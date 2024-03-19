<template>
  <div class="dropdown">
    <div class="dropdown__btn">
      <slot name="display"></slot>
    </div>
    <ul class="dropdown__list">
      <slot name="list-items"> </slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { DropdownList } from "~/types";
defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => DropdownList,
    required: true,
  },
});
</script>

<style scoped>
.dropdown:hover > .dropdown__list {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.dropdown__btn {
  display: flex;
  align-items: center;
  gap: var(--sp-smallest);
}

.dropdown {
  position: relative;
}

.dropdown__list {
  position: absolute;
  background-color: var(--cl-light);
  overflow: hidden;
  opacity: 0;
  transition: var(--transition);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: var(--border-radius);
  color: var(--cl-dark);
  visibility: hidden;
  pointer-events: none;
}

:deep(.dropdown__item) {
  transition: var(--transition);
  display: block;
}

:deep(.dropdown__item) > * {
  padding: var(--pd-small);
  display: block;
  text-align: center;
}

:deep(.dropdown__item) > button {
  min-width: 100%;
}

:deep(.dropdown__item):hover {
  background-color: var(--cl-accent);
}
</style>
