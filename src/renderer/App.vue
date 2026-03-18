<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Button } from './base/components/ui/button';
import { Machine } from '../../flysdk/api';

const machines = ref<Machine[]>([])

onMounted(async () => {
  machines.value = await window.flyApi.listMachines();
})
</script>

<template>
  <p v-for="(machine, index) in machines" :key="index">{{ machine.name }}</p>
</template>
