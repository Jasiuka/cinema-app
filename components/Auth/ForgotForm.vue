<template>
  <BaseForm>
    <template #form-content>
      <p class="info">
        Enter your email address below, and we will send you a password reset
        link. Please check your inbox and follow the instructions to reset your
        password.
      </p>
      <FormControl name="email" label="Email" type="email" />
    </template>
    <template #submit>
      <Button
        type="submit"
        :button-style="ButtonStyle.REGULAR"
        title="Send reset password link"
        role="button"
        >Send</Button
      >
    </template>
  </BaseForm>
</template>

<script setup>
import { ref } from "vue";
import { ButtonStyle } from "~/types";

const email = ref("");
</script>

<style scoped>
.info {
  font-size: calc(var(--fs-smallest) - 0.3rem);
}
</style>
