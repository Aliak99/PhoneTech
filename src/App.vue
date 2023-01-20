<template>
  <button @click="toggle = !toggle">Toggle</button>
  <div v-if="toggle">
    <Blog />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Blog from "./Blog.vue";

const toggle = ref(true);
</script>

<style scoped lang="scss"></style>
