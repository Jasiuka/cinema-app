<template>
  <BaseForm @submit.prevent="handleSignup($event)">
    <template #form-content>
      <FormControl name="firstName" label="First Name" />
      <FormControl name="lastName" label="Last Name" />
      <FormControl
        name="birthdate"
        label="Birthdate"
        :moved-label="true"
        type="date"
      />
      <FormControl name="email" label="Email" type="email" />
      <FormControl
        name="password"
        label="Password"
        type="password"
        tooltip="Password must be at least 6 characters long, including uppercase, lowercase letters, a number, and a symbol."
      />
      <FormControl name="confirm" label="Confirm password" type="password" />
    </template>
    <template #submit>
      <Button
        type="submit"
        title="Login"
        :button-style="ButtonStyle.REGULAR"
        role="button"
        :disabled="loading"
        >Signup
        <TheLoader v-if="loading" />
      </Button>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import { ButtonStyle, type User } from "~/types";

const { signUp } = useAuthStore();

const loading = ref(false);
const handleSignup = async (event: SubmitEvent) => {
  loading.value = true;
  const form = event.target as HTMLFormElement;

  const user: User = {
    credentials: {
      email: form.email.value,
      password: form.password.value,
    },
    userData: {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      birthdate: form.birthdate.value,
    },
  };

  await signUp(user);
  loading.value = false;
};
</script>

<style scoped></style>
