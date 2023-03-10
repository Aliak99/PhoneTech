<template>
  <div>
    Tapez votre Prenom:
    <input
      type="text"
      :value="prenom"
      @input="maj('prenom', ($event.target as HTMLInputElement).value)"
    />
  </div>
  <div>
    Tapez votre Nom:
    <input
      type="text"
      :value="nom"
      @input="maj('nom', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  prenom: string;
  nom: string;
  nameModifiers?: { [s: string]: boolean };
}>();

const emit = defineEmits<{
  (e: "update:prenom", value: string): void;
  (e: "update:nom", value: string): void;
}>();

function maj(field: "prenom" | "nom", value: string) {
  if (value) {
    value = value[0].toUpperCase() + value.slice(1).toLowerCase();
    if (field === "prenom") {
      emit(`update:${field}`, value);
    } else {
      emit(`update:${field}`, value);
    }
  }
}
</script>

<style scoped lang="scss"></style>
