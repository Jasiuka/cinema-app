<template>
  <div class="settings__control">
    <h3 class="settings__control-heading">Email address</h3>
    <div class="settings__control-content">
      <p>
        Your email address is
        <span class="bold">
          {{ email }}
        </span>
      </p>
      <button @click="handleOpenClick">{{ open ? "Hide" : "Change" }}</button>
      <div
        class="settings__control-hidden-content"
        :class="{
          open: open,
        }"
      >
        <BaseForm>
          <template #form-content>
            <FormControl
              label="New email address"
              type="email"
              name="new-email"
            />
          </template>
          <template #submit></template>
        </BaseForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
defineProps({
  email: {
    type: String,
    required: true,
  },
});

const handleOpenClick = () => {
  open.value = !open.value;
};
</script>

<style scoped>
.settings__control {
}

.settings__control-hidden-content {
  max-height: 0;
  overflow: hidden;
}

.settings__control-hidden-content.open {
  min-height: 2rem;
  max-height: 20rem;
}
</style>
