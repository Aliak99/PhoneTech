<template>
  <input type="text" v-model="author.name" />
  <div>
    <Blog />
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, readonly } from "vue";
import { authorKey } from "./ProvideKeys";
import Blog from "./Blog.vue";

const author = reactive({
  name: "Chateaubriand",
  birthdate: 1768,
});

function updateBirthday() {
  author.birthdate = 2000;
}

provide(authorKey, {
  author: readonly(author),
  updateBirthday,
});
</script>

<style scoped lang="scss"></style>
