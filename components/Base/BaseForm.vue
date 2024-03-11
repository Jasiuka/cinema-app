<template>
  <form class="form" :class="customClass">
    <h2>
      <slot name="form-heading"></slot>
    </h2>
    <div
      v-for="control in formInputs"
      :key="control.name"
      class="form__control"
    >
      <label class="form__label" :for="`${componentName}-${control.name}`">{{
        control.label
      }}</label>
      <input
        :name="control.name"
        :id="`${componentName}-${control.name}`"
        :type="control.type"
      />
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

<script setup>
defineProps({
  formInputs: {
    type: Array,
    required: true,
  },
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
.form__label {
  text-transform: capitalize;
}
</style>
