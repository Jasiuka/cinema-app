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
        :disabled="loading"
        >Login
        <TheLoader v-if="loading" />
      </Button>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import { ButtonStyle, type InputEmit } from "~/types";

const { login } = useAuthStore();
const { closeModal } = useModalStore();
const loading = ref(false);

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
  loading.value = true;
  const isSuccess = await login({
    email: email.value,
    password: password.value,
  });
  if (isSuccess) closeModal();

  loading.value = false;
};
</script>

<style scoped>
form :deep(.btn-forgot) {
  padding-left: 0;
}
</style>
