<template>
  <ul>
    <li v-for="user of utilisateurs" :key="user.prenom">
      {{
        `${user.prenom} : ${Math.round(
          user.notes.reduce((a, b) => a + b) / user.notes.length
        )}`
      }}
    </li>
  </ul>
</template>


<script setup lang="ts">
import { reactive } from "vue";
const utilisateurs = reactive([
  { prenom: "Jean", notes: [14, 15, 18] },
  { prenom: "Paul", notes: [12, 10, 8] },
  { prenom: "Pierre", notes: [3, 15, 18] },
  { prenom: "Bob", notes: [12, 15, 18] },
  { prenom: "Julie", notes: [12, 15, 18] },
  { prenom: "Lucie", notes: [12, 20, 18] },
  { prenom: "Paulette", notes: [19, 13, 18] },
]);
</script>


<style>
</style>