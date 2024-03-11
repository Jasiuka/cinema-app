<template>
  <BaseForm @submit.prevent="handleLogin" component-name="login">
    <template #form-content>
      <div class="form__control">
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email" id="email" />
      </div>
      <div class="form__control">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
        />
      </div>
    </template>
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
import { login } from "#imports";
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
