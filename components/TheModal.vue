<template>
  <dialog class="modal" v-if="modalStore.isModalOpen">
    <Transition name="modal">
      <div class="modal__content">
        <button class="modal__close-btn" @click="closeModal">
          <Icon class="icon-cross" size="1.5rem" name="mdi:close-thick" />
        </button>
        <slot></slot>
      </div>
    </Transition>
  </dialog>
</template>

<script setup>
import { useModalStore } from "./../stores/modalStore";

const modalStore = useModalStore();

const closeModal = () => {
  modalStore.closeModal();
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f05d5d2e;
  border: none;
  margin: 0;
  min-height: 100dvh;
  min-width: 100dvw;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: var(--transition);
}

.modal__content {
  padding: var(--pd-small);
  background-color: white;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: var(--sp-medium);
}

.modal__close-btn {
  align-self: flex-end;
}

/* .modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.5);
} */

.modal-enter-active {
  animation: showUp 20s ease forwards;
  background-color: green;
}

.modal-leave-active {
  animation: showUp 0.3s ease backwards;
  background-color: green;
}

@keyframes showUp {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.icon-cross {
  color: red;
}
</style>
