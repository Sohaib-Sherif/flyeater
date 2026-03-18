<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Button } from './base/components/ui/button';
import { Machine } from '../../flysdk/api';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from './base/components/ui/item';
import { PlayIcon, SquareIcon } from 'lucide-vue-next';

const machines = ref<Machine[]>([])

onMounted(async () => {
  machines.value = await window.flyApi.listMachines();
})
</script>

<template>
  <Item 
    v-for="(machine, index) in machines" 
    :key="index"
    variant="outline"
  >
    <ItemContent>
      <ItemTitle>{{ machine.name }}</ItemTitle>
      <ItemDescription>
        {{ machine.region }} - {{ machine.updated_at }}
      </ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button :variant="machine.state === 'started' ? 'destructive': 'default'" size="sm">
        <SquareIcon v-if="machine.state ==='started'"></SquareIcon>
        <PlayIcon v-else></PlayIcon>
        {{ machine.state === 'started'? 'Stop' : 'Start' }}
      </Button>
    </ItemActions>
  </Item>
</template>
