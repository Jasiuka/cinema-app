<template>
  <BaseForm @submit.prevent="handleSignup($event)" component-name="signup">
    <template #form-content>
      <div class="form__control">
        <label for="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" />
      </div>
      <div class="form__control">
        <label for="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" />
      </div>
      <div class="form__control">
        <label for="birthdate">Birthdate</label>
        <input type="date" name="birthdate" id="birthdate" />
      </div>
      <div class="form__control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div class="form__control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div class="form__control">
        <label for="confirm">Confirm password</label>
        <input type="password" name="confirm" id="confirm" />
      </div>
    </template>
    <template #submit>
      <button type="submit" role="button">Signup</button>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import type { User } from "../../types.ts";
import { signup } from "#imports";

const client = useSupabaseClient();
const handleSignup = async (event: SubmitEvent) => {
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

  await signup(user, client);
};
</script>

<style scoped></style>
