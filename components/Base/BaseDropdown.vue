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
  min-height: 5rem;
  opacity: 1;
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
  height: 0;
  background-color: var(--cl-light);
  overflow: hidden;
  opacity: 0;
  transition: var(--transition);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: var(--pd-small);
  border-radius: var(--border-radius);
}
</style>
