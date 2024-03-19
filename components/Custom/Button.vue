<template>
  <button
    :disabled="disabled"
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
  disabled: {
    type: Boolean,
    required: false,
    default: false,
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
    case ButtonStyle.LINK:
      return "link";
    case ButtonStyle.INHERITED:
      return "inherited";
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
  display: flex;
  align-items: center;
  gap: var(--sp-smallest);
}

button.regular {
  background-color: var(--cl-accent);
  border: 2px solid transparent;
  color: var(--cl-light);
}

button.regular:not(:disabled):hover {
  background-color: transparent;
  border-color: var(--cl-accent);
  color: var(--cl-dark);
}

button.link {
  font-size: calc(var(--fs-smallest) - 0.2rem);
  border-radius: 0;
  background-color: transparent;
  color: #4dabf7;
  transition: var(--transition);
}

button.link:not(:disabled):hover {
  color: var(--cl-dark);
}

button.inherited {
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  border: none;
  background-color: transparent;
}
</style>
