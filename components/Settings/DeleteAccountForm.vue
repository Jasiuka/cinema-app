<template>
  <BaseForm @submit.prevent="handleDeletion">
    <template #form-content>
      <p>Enter your email address to confirm your account deletion</p>
      <FormControl
        label="Your email address"
        name="delete-account"
        type="email"
        @input-change="handleInputChange"
      />
    </template>
    <template #submit>
      <Button
        type="submit"
        title="Delete my account"
        :button-style="ButtonStyle.REGULAR"
        :disabled="!emailMatch"
        >Delete</Button
      >
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import type { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { ButtonStyle, type InputEmit } from "~/types";
const client = useSupabaseClient();
const { getEmail } = useAuthStore();
const emailMatch = ref(false);

const handleInputChange = (input: InputEmit) => {
  if (input.value !== getEmail && emailMatch.value) {
    emailMatch.value = false;
  } else if (input.value === getEmail && !emailMatch.value) {
    emailMatch.value = true;
  }
};

const handleDeletion = async () => {
  const user = await client.auth.getUser();
  if (emailMatch && user.data) {
    const { error, data } = await client
      .from("DeleteRequests")
      .insert({ user: user.data.user?.id } as never);
    console.log(error);
  }
};
</script>
