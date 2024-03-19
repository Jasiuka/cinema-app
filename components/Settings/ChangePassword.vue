<template>
  <div class="settings__control">
    <h3 class="settings__control-heading">Password</h3>
    <div class="settings__control-content">
      <button @click="handleOpenClick">{{ open ? "Hide" : "Change" }}</button>
      <div
        class="settings__control-hidden-content"
        :class="{
          open: open,
        }"
      >
        <h1>Some hidden content</h1>
        <h1>Some hidden content</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);

const handleOpenClick = () => {
  open.value = !open.value;
};
</script>

<style scoped>
.settings__control {
}

.settings__control-hidden-content {
  height: 0;
  overflow: hidden;
}

.settings__control-hidden-content.open {
  min-height: 2rem;
}
</style>
