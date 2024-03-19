<template>
  <div>
    <TheModal>
      <component :is="modalComponent"></component>
    </TheModal>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/stores/modalStore.js";
import { AuthComponent, DeleteAccountForm } from "#components";
import { ModalComponents } from "./types";
const modalStore = useModalStore();
const modalComponent = computed(() => {
  switch (modalStore.modalComponent) {
    case ModalComponents.AUTH:
      return AuthComponent;
    case ModalComponents.DELETE_ACCOUNT:
      return DeleteAccountForm;
    default:
      return AuthComponent;
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
:root {
  /* COLORS */
  --cl-accent: #f05d5e;
  --cl-accent-light: #ffc8c8;
  --cl-light: #f8f9fa;
  --cl-dark: #212529;
  --cl-black: black;
  --cl-grey: #868e96;
  --cl-white: white;

  /* PADDING */
  --pd-smallest: clamp(0.2rem, 1dvw, 0.5rem);
  --pd-small: clamp(0.5rem, 2dvw, 1rem);
  --pd-medium: clamp(1rem, 2dvw, 1.5rem);
  --pd-large: clamp(1.5rem, 2dvw, 2rem);
  --pd-largest: clamp(2rem, 2dvw, 2.5rem);
  /* SPACING */
  --sp-smallest: clamp(0.2rem, 2dvw, 0.6rem);
  --sp-small: clamp(0.6rem, 2dvw, 1.2rem);
  --sp-medium: clamp(1.2rem, 2dvw, 1.8rem);
  --sp-large: clamp(1.8rem, 2dvw, 2.4rem);
  --sp-largest: clamp(2.4rem, 2dvw, 3rem);

  /* FONT SIZE */
  --fs-smallest: clamp(1rem, 3dvw, 1.2rem);
  --fs-small: clamp(1.2rem, 3dvw, 1.8rem);
  --fs-medium: clamp(1.8rem, 3dvw, 2.4rem);
  --fs-large: clamp(2.4rem, 3dvw, 3rem);
  --fs-largest: clamp(3rem, 3dvw, 3.6rem);

  /* OTHER */
  --border-radius: 6px;
  --transition: all 0.4s ease;
  --shadow: box-shadow: 4px 4px 9px 0px rgba(0,0,0,0.1);
  --max-width: 100rem;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a:link,
a:visited,
a {
  color: inherit;
  text-decoration: none;
}

.header-main {
  position: absolute;
}

button {
  border: none;
  background-color: inherit;
  cursor: pointer;
}

body {
  font-family: "Montserrat", "Sans serif";
  background-color: #272932;
  color: #e7ecef;
  overflow-x: hidden;
  margin: 0;
  font-size: var(--fs-smallest);
  position: relative;
}


button:disabled {
  background-color: grey !important;
}




/* HELPER CLASSES */
.pos-absolute {
  position: absolute;
}

.pos-relative {
  position: relative;
}

.pos-flex {
  position: flex;
}

.pos-fixed {
  position: fixed;
}

.border-radius {
  border-radius: 6px;
}

.bold {
  font-weight: 600;
}
</style>
