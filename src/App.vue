<template>
  <input type="text" v-model="author.name" />
  <div>
    <Blog />
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, readonly } from "vue";
import Blog from "./Blog.vue";

export interface AuthorInterface {
  name: string;
  birthdate: number;
}

const author = reactive({
  name: "Chateaubriand",
  birthdate: 1768,
});

function updateBirthday() {
  author.birthdate = 2000;
}

provide("author", readonly({ author, updateBirthday }));
</script>

<style scoped lang="scss"></style>
