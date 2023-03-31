<template>
  <h2>{{ evenement }}</h2>
  <Suspense
    @pending="myEvent('PENDING')"
    @fallback="myEvent('FALLBACK')"
    @resolve="myEvent('RESOLVE')"
  >
    <LazyList />
    <template #fallback>
      <h1>Chargement...</h1>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const evenement = ref("");
const LazyList = defineAsyncComponent(() => import("./Liste.vue"));

function myEvent(eventName: string) {
  console.log(eventName);
  evenement.value = eventName;
}
</script>

<style lang="scss"></style>
