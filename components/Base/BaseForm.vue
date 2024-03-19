<template>
  <form class="form" :class="customClass">
    <div :class="{ row: inRow }" class="form__inner-box">
      <div class="form__content">
        <slot name="form-content"></slot>
      </div>
      <div class="form__content-extra">
        <slot name="content-extra"></slot>
      </div>
      <div :class="{ row: inRow }" class="form__actions">
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
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps({
  customClass: {
    type: String,
    required: false,
  },
  inRow: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped>
.form__actions:not(.row) {
  margin-top: var(--sp-medium);
}

.form__content {
  display: flex;
  flex-direction: column;
  gap: var(--sp-medium);
}

.form__inner-box:not(.row) > .form__content {
  margin-bottom: var(--sp-smallest);
}

.form__inner-box {
  width: 70%;
}

.form__inner-box.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
