<template>
  <form @submit="mySubmit">
    <div>
      <input v-model="emailValue" type="email" placeholder="Prénom" />
    </div>
    <pre>{{ errorMessage }}</pre>
    <button :disabled="isSubmitting">Envoi</button>
    <pre>{{ submitCount }}</pre>
  </form>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toFieldValidator } from "@vee-validate/zod";

const { handleSubmit, isSubmitting, submitCount } = useForm();

const promise = new Promise((resolve) => setTimeout(() => resolve(true), 3000));

const mySubmit = handleSubmit(
  async (values, { resetForm }) => {
    await promise;
    resetForm({
      values: { email: "exemple@gmail.com" },
      errors: { email: "Pas valide !" },
      touched: { email: false },
      submitCount: submitCount.value,
    });
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
