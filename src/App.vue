<template>

  <Enfant v-model:prenom.maj="prenom" v-model:nom.maj="nom" />
  <h1>Prenom: {{ prenom }}</h1>
  <h1>Nom: {{ nom }}</h1>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Enfant from "./Enfant.vue";

const prenom = ref("");
const nom = ref("");
</script>

<style scoped lang="scss"></style>
