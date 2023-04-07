<template>
  <div class="p-20">
    <div class="mb-20 d-flex w100 justify-content-center align-items-center">
      <input
        v-model="input"
        @keydown.enter="addItem"
        type="text"
        class="flex-fill mr-20"
      />
      <button class="btn btn-primary mr-20" @click="addItem">Ajouter</button>
    </div>
    <div class="container">
      <TransitionGroup tag="ul">
        <li
          :style="`--i:${index}`"
          class="w-100 card mb-10"
          v-for="(item, index) in items"
          @click="removeItem(index)"
          :key="item"
        >
          {{ item }}
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
const items = ref<string[]>(["Pomme", "Fraise", "Poire"]);

function addItem() {
  items.value.push(input.value);
  input.value = "";
}

function removeItem(index: number) {
  items.value.splice(index, 1);
}
</script>

<style lang="scss">
@import "./assets/scss/base.scss";

li {
  cursor: pointer;
}

.container {
  position: relative;
}

.v-enter-from {
  transform: translateX(-10px);
  opacity: 0;
}

.v-leave-active {
  width: 100%;
  transition: all 1s;
  position: absolute;
}

.v-move,
.v-enter-active {
  transition: all 1s;
  transition-delay: calc(var(--i) * 0.2s);
}

.v-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
