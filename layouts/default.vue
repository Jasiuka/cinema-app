<template>
  <header class="header" :class="[headerClass, headerPosition]">
    <TheNavigation />
    <slot name="extraInHeader"></slot>
  </header>
  <main class="page-main" :class="mainClass" :id="mainId">
    <slot name="main"></slot>
  </main>
  <footer v-if="footer"></footer>
</template>

<script setup>
import TheNavigation from "../components/UI/TheNavigation.vue";
defineProps({
  footer: {
    type: Boolean,
    required: false,
    default: true,
  },
  mainClass: {
    type: String,
    required: false,
  },
  headerClass: {
    type: String,
    required: false,
  },
  headerPosition: {
    type: String,
    required: false,
    default: "pos-relative",
  },
  mainId: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
.header {
  min-width: 100dvw;
  display: flex;
  justify-content: center;
}
</style>
