<template>
  <form @submit="mySubmit">
    <div>
      <input v-model="emailValue" type="email" placeholder="Email" />
    </div>
    <pre>{{ errorMessage }}</pre>
    <button>Envoi</button>
  </form>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toFieldValidator } from "@vee-validate/zod";

const { handleSubmit } = useForm();

const mySubmit = handleSubmit(
  async (values, actions) => {
    // await fetch au serveur...
    console.log(values);
    actions.setFieldError("email", "L'email existe déjà");
  },
  (errors) => {
    console.log(errors);
  }
);

const { value: emailValue, errorMessage } = useField(
  "email",
  toFieldValidator(z.string().min(5, { message: "Trop court !" }))
);
</script>

<style scoped lang="scss"></style>
