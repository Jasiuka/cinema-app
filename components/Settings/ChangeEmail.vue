<template>
  <SettingsControlBase>
    <template #heading>
      <h3>Email address</h3>
    </template>
    <template #content>
      <p>
        Your email address is
        <span class="bold">
          {{ email }}
        </span>
      </p>
    </template>
    <template #content-hidden>
      <BaseForm @submit.prevent="handleChangeEmail($event)" :in-row="true">
        <template #form-content>
          <FormControl
            label="New email address"
            type="email"
            name="new-email"
          />
        </template>
        <template #submit>
          <Button
            :button-style="ButtonStyle.REGULAR"
            title="Change email"
            type="submit"
            >Change</Button
          >
        </template>
      </BaseForm>
    </template>
  </SettingsControlBase>
</template>

<script setup lang="ts">
import { ButtonStyle } from "~/types";
defineProps({
  email: {
    type: String,
    required: true,
  },
});
const { changeEmail } = useAuthStore();
const handleChangeEmail = async (event: SubmitEvent) => {
  const form = event.target as HTMLFormElement;
  const newEmail = form["new-email"].value;
  await changeEmail(newEmail);
};
</script>

<style></style>
