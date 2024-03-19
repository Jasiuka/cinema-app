<template>
  <NuxtLayout name="default" main-class="settings-main">
    <template #main>
      <section class="settings">
        <h2>Account settings</h2>
        <SettingsContent />
      </section>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped>
.settings {
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: var(--pd-large);
}

h2 {
  text-align: center;
}
</style>
