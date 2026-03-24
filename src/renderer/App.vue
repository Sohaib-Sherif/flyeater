<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Button } from '@ui/base/components/ui/button';
import { OrgMachine } from '@flysdk/api';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@ui/base/components/ui/item';
import { PlayIcon, PowerIcon, RefreshCwIcon, SquareIcon } from 'lucide-vue-next';
import { Spinner } from '@ui/base/components/ui/spinner';
import { Badge } from '@ui/base/components/ui/badge';
import { compareDesc, formatDate, formatDistanceToNow, formatDistanceToNowStrict, minutesToMilliseconds } from 'date-fns';
import { now, useInterval, useTimeoutPoll } from '@vueuse/core';
import flyLandscapeLogo from '@resources/logo-landscape.svg';
import { Skeleton } from '@ui/base/components/ui/skeleton';

interface ExtendedMachine extends OrgMachine {
  isUpdatingState: boolean
}

const machines = ref<ExtendedMachine[]>([])
const listMachinesLoading = ref(false)
const isRefreshingMachinesList = ref(false)
const lastRefreshedAtTimestamp = ref<number | null>(null)
const lastRefreshedAtRelativeDate = ref('')

onMounted(() => {
  listMachines();
})

useTimeoutPoll(refreshList, minutesToMilliseconds(5))
useInterval(1000, { callback() {
  if(!lastRefreshedAtTimestamp.value) {
    return;
  }

  lastRefreshedAtRelativeDate.value = formatDistanceToNow(lastRefreshedAtTimestamp.value, { addSuffix: true, includeSeconds: true })
},})

async function listMachines() {
  listMachinesLoading.value = true;
  const apiResult = await window.flyApi.listOrgMachines();
  machines.value = apiResult.map((machine) => {
    return {
      ...machine,
      isUpdatingState: false
    }
  }).sort((firstMachine, secondMachine) => {
    return compareDesc(firstMachine.updated_at?? '', secondMachine.updated_at?? '')
  });
  listMachinesLoading.value = false;
}

async function refreshList() {
  isRefreshingMachinesList.value = true;
  await listMachines();
  isRefreshingMachinesList.value = false;
  lastRefreshedAtTimestamp.value = now()
}

async function startOrStopMachine(machine: ExtendedMachine) {
  if(!machine || !machine.id || !machine.app_name)
    return;

  machine.isUpdatingState = true
  if(machine.state !== 'started') {
    await window.flyApi.startMachine(machine.id, machine.app_name);
  }
  else {
    await window.flyApi.stopMachine(machine.id, machine.app_name);
  }
  machine.isUpdatingState = false

  // refetch the machines to see new state
  await listMachines();
}

function formatAbsoluteDate(machine: ExtendedMachine) {
  if(!machine.updated_at) {
    return 'Undefined date';
  }

  return formatDate(new Date(machine.updated_at), 'yyyy-MM-dd HH:mm:ss')
}

function formatRelativeDate(machine: ExtendedMachine) {
  if(!machine.updated_at || !machine.state) {
    return;
  }

  const distance = formatDistanceToNowStrict(machine.updated_at, { addSuffix: true, roundingMethod: 'round'});

  switch(machine.state) {
    case 'started':
      return `Running since ${distance}`;
    case 'stopped':
      return `Last ran ${distance}`;
    case 'suspended':
      return `Suspended ${distance}`;
    default:
      return 'Undefined state'
  }
}

function shutdown() {
  window.system.shutdownApp();
}
</script>

<template>
  <div class="p-4">
    <div class="float-right flex items-center">
      <a href="https://fly.io" 
        target="_blank" 
        title="Open Fly.io website" 
        class="me-4 focus:outline-0"
      >
        <img :src="flyLandscapeLogo" class="w-20 h-10"/>
      </a>
      <Button :variant="'outline'" :size="'icon-sm'" title="Exit" @click="shutdown">
        <PowerIcon></PowerIcon>
      </Button>
    </div>
    <div class="mb-4">
      <Button
        variant="outline"
        size="default"
        class="mb-1"
        :disabled="isRefreshingMachinesList"
        @click="refreshList"
      >
        <RefreshCwIcon v-if="!isRefreshingMachinesList"></RefreshCwIcon>
        <Spinner v-else class="animate-spin"></Spinner>
        Refresh
      </Button>
      <p
        v-if="lastRefreshedAtTimestamp"
        class="text-xs text-muted-foreground"
      >
        Last refreshed {{ lastRefreshedAtRelativeDate }}
      </p>
    </div>
    <template v-if="listMachinesLoading">
      <Skeleton v-for="skeleton in [1,2,3]" class="h-26 mb-4 w-full rounded-lg" />
    </template>
    <Item
      v-else
      v-for="(machine, index) in machines"
      :key="index"
      variant="muted"
      class="mb-4"
    >
      <ItemContent>
        <ItemTitle>{{ machine.name }}</ItemTitle>
        <ItemDescription>
          <Badge class="bg-orange-300 text-orange-900 me-1" title="App name">{{ machine.app_name }}</Badge>
          <Badge class="bg-zinc-300 text-zinc-900" title="Region">
            {{ machine.region }}
          </Badge>
          <p class="mt-2" :title="formatAbsoluteDate(machine)">
            {{ formatRelativeDate(machine) }}
          </p>
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          :variant="machine.state === 'started' ? 'destructive': 'default'"
          size="sm"
          @click="() => startOrStopMachine(machine)"
          :disabled="machine.isUpdatingState"
        >
          <template v-if="!machine.isUpdatingState">
            <SquareIcon v-if="machine.state ==='started'"></SquareIcon>
            <PlayIcon v-else></PlayIcon>
          </template>
          <Spinner v-else></Spinner>
          {{ machine.state === 'started'? 'Stop' : 'Start' }}
        </Button>
      </ItemActions>
    </Item>
  </div>
</template>
