<template>
  <input
    :value="content"
    @input="content = ($event.target as HTMLInputElement).value"
    type="text"
  />
  <p>{{ content }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const content = ref("");
</script>

<style scoped lang="scss"></style>