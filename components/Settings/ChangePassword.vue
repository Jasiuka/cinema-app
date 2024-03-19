<template>
  <SettingsControlBase>
    <template #heading>
      <h3 class="settings__control-heading">Password</h3>
    </template>
    <template #content> </template>
    <template #content-hidden>
      <BaseForm :in-row="true">
        <template #form-content>
          <FormControl
            label="New password"
            type="password"
            name="new-password"
          />
          <FormControl
            label="Current password"
            type="password"
            name="new-password-confirm"
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
const open = ref(false);

const handleOpenClick = () => {
  open.value = !open.value;
};
</script>

<style scoped>
.settings__control {
}

.settings__control-hidden-content {
  height: 0;
  overflow: hidden;
}

.settings__control-hidden-content.open {
  min-height: 2rem;
}
</style>
