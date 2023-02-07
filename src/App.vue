<template>
  <input
    :value="variable"
    @input="variable = ($event.target as HTMLInputElement).value"
    type="text"
  />
  <p>{{ variable }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Blog from "./Blog.vue";

const variable = ref("");
</script>

<style scoped lang="scss"></style>
