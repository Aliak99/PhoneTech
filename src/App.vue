<template>
  <form @submit="submit">
    <div>
      <select v-model="cityValue">
        <option value disabled>--Choisissez une ville--</option>
        <option value="Nice">Nice</option>
        <option value="Paris">Paris</option>
        <option value="Lyon">Lyon</option>
      </select>
    </div>
    <pre>{{ errorMessage }}</pre>
    <div>
      <input v-model="zipValue" type="number" />
    </div>
    <div>
      <input v-model="minValue" type="number" />
    </div>
    <div>
      <input v-model="maxValue" type="number" />
    </div>
    <pre>{{ values }}</pre>
    <button>Envoi</button>
  </form>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toFieldValidator } from "@vee-validate/zod";

const { handleSubmit, values } = useForm();

const submit = handleSubmit(() => {});

const { value: cityValue, errorMessage } = useField(
  "address.city",
  toFieldValidator(z.string({ required_error: "Veuillez choisir une ville" }), {
    validateOnValueUpdate: false,
    initialValue: "",
  })
);
const { value: zipValue } = useField("address.zip.code");

const { value: minValue } = useField("minMax[0]");
const { value: maxValue } = useField("minMax[1]");
</script>

<style scoped lang="scss"></style>
