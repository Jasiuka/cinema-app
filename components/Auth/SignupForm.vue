<template>
  <BaseForm
    @submit.prevent="handleSignup($event)"
    :form-inputs="signupInputs"
    component-name="signup"
  >
    <template #submit>
      <button type="submit" role="button">Signup</button>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import type { InputObject, User } from "../../types.ts";

import { signup } from "~/utils/signup.ts";
const client = useSupabaseClient();
const signupInputs: InputObject[] = [
  { name: "firstName", type: "text", label: "First name" },
  { name: "lastName", type: "text", label: "Last name" },
  { name: "birthdate", type: "date", label: "Birth date" },
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
  { name: "confirm", type: "password", label: "Confirm password" },
];

const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
  const form = event.target;

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

  await signup(user, client);
};
</script>

<style scoped></style>
