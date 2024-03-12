<template>
  <BaseForm component-name="login">
    <template #form-content>
      <FormControl name="email" label="Email" type="email" />
    </template>
    <template #submit>
      <button type="submit" role="button">Send</button>
    </template>
  </BaseForm>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
</script>
