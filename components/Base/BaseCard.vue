<template>
  <div class="base-card">
    <header v-if="headerRequired" class="base-card__header">
      <slot name="card-header"></slot>
    </header>
    <div class="base-card__main" :class="mainClass">
      <slot name="card-main"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  headerRequired: {
    type: Boolean,
    required: false,
    default: false,
  },
  headerClass: {
    type: String,
    required: false,
  },
  mainClass: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
.base-card {
  /* box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.1); */
}
</style>
