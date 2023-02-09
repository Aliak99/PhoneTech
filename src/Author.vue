<template>
  <small> {{ author.name }} - {{ author.birthdate }}</small>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { authorKey } from "./ProvideKeys";

const { author, updateBirthday } = inject(authorKey)!;

setTimeout(() => {
  updateBirthday();
}, 5000);
</script>

<style scoped lang="scss"></style>
