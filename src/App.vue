<script setup lang="ts">
import { useCycleList } from "@/composables/useCycleList";
import { ref } from "vue";
const list = ref([
  "Dog",
  "Cat",
  "Lizard",
  "Shark",
  "Whale",
  "Dolphin",
  "Octopus",
  "Seal",
]);

const { state, next, prev } = useCycleList(list);
</script>

<template>
  <div class="page">
    <div>
      <h1>{{ state }}</h1>
      <div class="btn-wrapper">
        <button @click="prev">Previous</button>
        <button @click="next">Next</button>
      </div>
    </div>
  </div>
</template>
