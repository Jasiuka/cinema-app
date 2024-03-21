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
import { login } from "#imports";
import { ButtonStyle, type InputEmit } from "~/types";

const { setUser } = useAuthStore();
const client = useSupabaseClient();
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
const { createNotification } = useNotificationStore();
const handleLogin = async function () {
  loading.value = true;
  const userData = await login(
    {
      email: email.value,
      password: password.value,
    },
    client
  );

  if (userData) {
    const email = userData.user.email !== undefined ? userData.user.email : "";
    const name =
      userData.user.user_metadata.firstName !== undefined
        ? userData.user.user_metadata.firstName
        : "";
    setUser({
      email,
      name,
    });
    closeModal();
  }
  loading.value = false;
};
</script>

<style scoped>
form :deep(.btn-forgot) {
  padding-left: 0;
}
</style>
