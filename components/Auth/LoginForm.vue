<template>
  <BaseForm @submit.prevent="handleLogin" component-name="login">
    <template #form-content>
      <FormControl label="Email" name="email" type="email" />
      <FormControl label="Password" name="password" type="password" />
    </template>
    <template #content-extra>
      <button type="button" role="button" @click="handleTabChange('forgot')">
        Forgot password
      </button>
    </template>
    <template #submit>
      <Button
        type="submit"
        title="Login"
        :button-style="ButtonStyle.REGULAR"
        role="button"
        >Login</Button
      >
    </template>
  </BaseForm>
</template>

<script setup>
import { login } from "#imports";
import { ButtonStyle } from "~/types";
const client = useSupabaseClient();

defineProps({
  handleTabChange: {
    type: Function,
    required: false,
  },
});

const email = ref("");
const password = ref("");
const handleLogin = async function () {
  console.log({
    email: email.value,
    password: password.value,
  });
  const response = await login(
    {
      email: email.value,
      password: password.value,
    },
    client
  );
};
</script>
