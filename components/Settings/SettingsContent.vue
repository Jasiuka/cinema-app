<template>
  <div class="settings__content">
    <ChangeEmail email="someemail@gmail.com" />
    <ChangePassword />
    <DeleteAccount />
  </div>
</template>

<style scoped>
.settings__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.settings__content > * {
  min-width: 40rem;
  max-width: 40rem;
}
</style>
