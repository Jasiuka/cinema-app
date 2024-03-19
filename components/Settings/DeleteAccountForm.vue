<template>
  <BaseForm>
    <template #form-content>
      <p>Enter your email address to confirm your account deletion</p>
      <FormControl
        label="Your email address"
        name="delete-account"
        type="email"
      />
    </template>
    <template #submit>
      <Button
        type="submit"
        title="Delete my account"
        :button-style="ButtonStyle.REGULAR"
        >Delete</Button
      >
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import { ButtonStyle } from "~/types";
</script>
