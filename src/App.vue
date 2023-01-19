<template>
  <h1 v-show="toggle">Bonjour</h1>
  <button @click="toggle = !toggle">Cacher</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const toggle = ref(true);
</script>

<style scoped lang="scss"></style>
