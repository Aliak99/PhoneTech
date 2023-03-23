<template>
  <form>
    <div>
      <input
        :class="{
          success: meta.touched && meta.valid && meta.validated && !meta.pending,
          error: meta.touched && !meta.valid && meta.validated && !meta.pending,
        }"
        @focus="handleBlur"
        @blur="handleChange"
        v-model="usernameValue"
        type="text"
        placeholder="Prénom"
      />
    </div>
    <p v-if="meta.pending">Chargement...</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <pre>{{ meta }}</pre>
    <pre>{{ metaForm }}</pre>
  </form>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toFieldValidator } from "@vee-validate/zod";

const promise = (valeur: boolean) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valeur);
    }, 3000);
  });

const { meta: metaForm } = useForm();

const { value: usernameValue, errorMessage, meta, handleBlur, handleChange } = useField(
  "username",
  toFieldValidator(
    z
      .string()
      .min(5, { message: "Trop court !" })
      .refine(
        async (data) => ((await data) === "valid" ? promise(true) : promise(false)),
        { message: "erreur" }
      )
  ),
  { validateOnValueUpdate: false }
);
</script>

<style scoped lang="scss">
.success {
  border-color: green;
}

.error {
  border-color: red;
}
</style>
