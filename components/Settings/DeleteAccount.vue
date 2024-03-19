<template>
  <div class="settings__control">
    <h3 class="settings__control-heading">Delete account</h3>
    <div class="settings__control-content">
      <p>Would you like to delete your account?</p>
      <p>
        Deleting your account will remove all the content associated with it and
        without account you wont be able to buy tickets through website
      </p>
      <button @click="openModal(ModalComponents.DELETE_ACCOUNT)">
        Delete account
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalComponents } from "~/types";

const open = ref(false);
const { openModal } = useModalStore();

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
