<template>
  <form class="form" :class="customClass">
    <h2>
      <slot name="form-heading"></slot>
    </h2>
    <div class="form__content">
      <slot name="form-content"></slot>
    </div>
    <div class="form__content-extra">
      <slot name="content-extra"></slot>
    </div>
    <div class="form__actions">
      <slot name="actions-extra"></slot>
      <slot name="submit">
        <button
          class="form__submit-btn"
          role="button"
          title="Submit form"
          type="submit"
        >
          Submit
        </button>
      </slot>
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps({
  customClass: {
    type: String,
    required: false,
  },
  componentName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.form_content {
  display: flex;
}
</style>
