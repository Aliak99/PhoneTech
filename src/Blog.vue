<template>
  <h1>Question</h1>
  <button :class="{ active: agree }" @click="updateValue($event, true)">
    Oui !
  </button>
  <button
    :class="{ active: agree == false }"
    @click="updateValue($event, false)"
  >
    Non !
  </button>
  <hr />
  <input :value="name" @input="updateNameValue" type="text" />
</template>

<script setup lang="ts">
const props = defineProps<{
  agree: boolean | null;
  name: string;
  nameModifiers?: { [s: string]: boolean };
}>();

const emit = defineEmits<{
  (e: "update:agree", value: boolean);
  (e: "update:name", value: boolean);
}>();

function updateValue(event: MouseEvent, value: boolean) {
  emit("update:agree", value);
}

function updateNameValue(event: Event) {
  let value = (event.target as HTMLInputElement).value;
  if (value) {
    if (props.nameModifiers?.maj) {
      emit("update:name", value[0].toUpperCase() + value.slice(1));
    } else {
      emit("update:name", value);
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  background-color: red;
}
</style>
