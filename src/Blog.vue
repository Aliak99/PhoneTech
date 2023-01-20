<template>
  <h1>Blog</h1>
  <button @click="count++">+1</button>
  <p>{{ count }}</p>
</template>
  
  <script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

const count = ref(0);

const intervalId = setInterval(() => {
  console.log("tick");
}, 1000);

onBeforeMount(() => {
  console.log("Avant le montage");
});
onMounted(() => {
  console.log("Après le montage");
});
onBeforeUpdate(() => {
  console.log("Avant la mise à jour");
});
onUpdated(() => {
  console.log("Après la mise à jour");
});
onBeforeUnmount(() => {
  console.log("Avant la destruction / démontage");
});
onUnmounted(() => {
  clearInterval(intervalId);
  console.log("Démontage");
});
</script>
  
  <style scoped lang="scss"></style>
  