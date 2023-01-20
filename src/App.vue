<template>
  <form @submit.prevent="addTodo()">
    <label for="add-todo">Ajouter une Todo</label>
    <input v-model="tache" id="add-todo" type="text" />
    <button>Ajouter</button>
  </form>
  <ul v-if="todos.length">
    <template v-for="(todo, index) in todos" :key="todo.id">
      <li>
        {{ todo.titre }}

        <button @click="suppTodo(index)">Supprimer</button>
      </li></template
    >
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tache = ref("");
const todos = ref<{ id: Number; titre: String }[]>([]);

function addTodo() {
  todos.value.push({ id: Date.now(), titre: tache.value });
  tache.value = "";
}

function suppTodo(index: number) {
  todos.value.splice(index, 1);
}
</script>