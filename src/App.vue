<template>
  <div>
    <input name="email" v-model="email" />
    <p>{{ emailError }}</p>
    <input name="password" v-model="password" type="password" />
    <p>{{ passwordError }}</p>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";

const validationSchema = {
  email(value) {
    if (value.includes("@") && value.length > 5) {
      return true;
    } else {
      return "Email non valide";
    }
  },
  password(value) {
    if (value?.length >= 8) {
      return true;
    } else {
      return "Le mot de passe doit être de 8 caractères au moins";
    }
  },
};
useForm({ validationSchema });

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
</script>

<style scoped lang="scss"></style>
