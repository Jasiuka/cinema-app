<template>
  <BaseForm :form-inputs="loginInputs" component-name="login">
    <template #form-content>
      <div class="form__control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
    </template>
    <template #submit>
      <button type="submit" role="button">Send</button>
    </template>
  </BaseForm>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
</script>
