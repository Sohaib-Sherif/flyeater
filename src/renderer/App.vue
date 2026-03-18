<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Button } from './base/components/ui/button';
import { Machine } from '../../flysdk/api';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from './base/components/ui/item';
import { PlayIcon, RefreshCwIcon, SquareIcon } from 'lucide-vue-next';
import { Spinner } from './base/components/ui/spinner';

interface ExtendedMachine extends Machine {
  isUpdatingState: boolean
}

const machines = ref<ExtendedMachine[]>([])
const listMachinesLoading = ref(false)
const isRefreshingMachinesList = ref(false)

onMounted(() => {
  listMachines();
})

async function listMachines() {
  const apiResult = await window.flyApi.listMachines();
  machines.value = apiResult.map((machine) => {
    return {
      ...machine,
      isUpdatingState: false
    }
  });
}

async function refreshList() {
  isRefreshingMachinesList.value = true;
  await listMachines();
  isRefreshingMachinesList.value = false;
}

async function startOrStopMachine(machine: ExtendedMachine) {
  if(!machine || !machine.id)
    return;

  machine.isUpdatingState = true
  if(machine.state !== 'started') {
    await window.flyApi.startMachine(machine.id);
  }
  else {
    await window.flyApi.stopMachine(machine.id);
  }
  machine.isUpdatingState = false

  // refetch the machines to see new state
  await listMachines();
}
</script>

<template>
  <div class="p-4">
    <Button 
      variant="outline" 
      size="default" 
      class="mb-4" 
      :disabled="isRefreshingMachinesList"
      @click="refreshList" 
    >
      <RefreshCwIcon v-if="!isRefreshingMachinesList"></RefreshCwIcon>
      <Spinner v-else class="animate-spin"></Spinner>
      Refresh
    </Button>
    <Item
      v-for="(machine, index) in machines"
      :key="index"
      variant="muted"
      class="mb-4"
    >
      <ItemContent>
        <ItemTitle>{{ machine.name }}</ItemTitle>
        <ItemDescription>
          {{ machine.region }} - {{ machine.updated_at }}
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
