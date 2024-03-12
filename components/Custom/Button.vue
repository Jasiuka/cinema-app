<template>
  <button
    :title="title"
    :type="type"
    role="button"
    :class="[customClass, btnStyle]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import { ButtonStyle } from "~/types";
const props = defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes["type"]>,
    required: false,
    default: "button",
  },
  title: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    required: false,
  },
  buttonStyle: {
    type: String as PropType<ButtonStyle>,
    required: false,
    default: ButtonStyle.REGULAR,
  },
});

const btnStyle = computed(() => {
  switch (props.buttonStyle) {
    case ButtonStyle.REGULAR:
      return "regular";
    case ButtonStyle.INVERTED:
      return "inverted";
    default:
      return "regular";
  }
});
</script>

<style scoped>
button {
  font-size: calc(var(--fs-small) - 0.3rem);
  transition: var(--transition);
  border-radius: var(--border-radius);
  padding: calc(var(--pd-smallest) - 0.3rem) var(--pd-smallest);
}

button.regular {
  background-color: var(--cl-accent);
  border: 2px solid transparent;
  color: var(--cl-light);
}

button.regular:hover {
  background-color: transparent;
  border-color: var(--cl-accent);
  color: var(--cl-dark);
}
</style>
