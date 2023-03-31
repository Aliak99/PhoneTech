<template>
  <h3>La page A</h3>
  <br />
  <button class="btn mb-20" @click="count++">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref, onDeactivated } from "vue";

const count = ref(0);

onDeactivated(() => {
  count.value--;
});
</script>

<style scoped lang="scss"></style>
