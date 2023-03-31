<template>
  <div class="p-20">
    <button @click="selectedComponant = 'PageA'" class="btn btn-danger mr-10">
      Page A
    </button>
    <button @click="selectedComponant = 'PageB'" class="btn btn-primary mr-10">
      Page B
    </button>
    <Component :is="composants[selectedComponant]" />
  </div>
</template>

<script setup lang="ts">
import PageA from './PageA.vue';
import PageB from './PageB.vue';
import { ref, type Component as C } from 'vue';

const composants: { [s:string]: C } = {
  PageA,
  PageB,
};

const selectedComponant = ref('PageA');
</script>

<style lang="scss">
@import "./assets/base.scss";
</style>
