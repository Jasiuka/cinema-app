<template>
  <BaseForm @submit.prevent="handleLogin">
    <template #form-content>
      <FormControl
        @input-change="handleInputChange"
        label="Email"
        name="email"
        type="email"
      />
      <FormControl
        @input-change="handleInputChange"
        label="Password"
        name="password"
        type="password"
      />
    </template>
    <template #content-extra>
      <Button
        type="button"
        role="button"
        title="Forgot password"
        :button-style="ButtonStyle.LINK"
        @click="handleTabChange?.('forgot')"
        custom-class="btn-forgot"
      >
        Forgot password
      </Button>
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

<script setup lang="ts">
import { login } from "#imports";
import { ButtonStyle, type InputEmit } from "~/types";

const { setUser } = useAuthStore();
const client = useSupabaseClient();

defineProps({
  handleTabChange: {
    type: Function || undefined,
    required: false,
  },
});

const handleInputChange = (input: InputEmit) => {
  const inputName = input.inputName;
  switch (inputName) {
    case "email":
      email.value = input.value;
      break;
    case "password":
      password.value = input.value;
      break;
  }
};

const email = ref("");
const password = ref("");
const handleLogin = async function () {
  console.log({
    email: email.value,
    password: password.value,
  });
  const userData = await login(
    {
      email: email.value,
      password: password.value,
    },
    client
  );

  setUser(userData?.user.user_metadata.firstName);
};
</script>

<style scoped>
form :deep(.btn-forgot) {
  padding-left: 0;
}
</style>
