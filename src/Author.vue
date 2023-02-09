<template>
  <small> {{ author.name }} - {{ author.birthdate }}</small>
  <p>{{ api }}</p>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { AuthorInterface } from "./App.vue";

const { author, updateBirthday } = inject<
  Readonly<{
    author: AuthorInterface;
    updateBirthday: () => void;
  }>
>("author")!;

setTimeout(() => {
  updateBirthday();
}, 2000);

const api = inject("API_URL");
</script>

<style scoped lang="scss"></style>
