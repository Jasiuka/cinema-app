<template>
  <BaseForm :form-inputs="loginInputs" component-name="login">
    <template #content-extra>
      <button type="button" role="button" @click="handleTabChange('forgot')">
        Forgot password
      </button>
    </template>
    <template #submit>
      <button type="submit" role="button">Login</button>
    </template>
  </BaseForm>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  handleTabChange: {
    type: Function,
    required: false,
  },
});

const email = ref("");
const password = ref("");
// const handleLogin = async function () {
//   const response = await login({
//     email: email.value,
//     password: password.value,
//   });
// };

const loginInputs = [
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];
</script>
