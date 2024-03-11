<template>
  <BaseForm :form-inputs="loginInputs" component-name="login">
    <template #submit>
      <button type="submit" role="button">Send</button>
    </template>
  </BaseForm>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const loginInputs = [{ name: "email", type: "email", label: "Email" }];
</script>
