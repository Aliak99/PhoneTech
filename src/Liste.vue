<template>
  <div class="p-20">
    <ul>
      <li v-for="user of state.users">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive<{ users: any[] }>({ users: [] });

// Délai de 3secondes grâce à l'option delay de restapi
state.users = await (await fetch("https://restapi.fr/api/ali?delay=3")).json();
</script>

<style lang="scss"></style>
