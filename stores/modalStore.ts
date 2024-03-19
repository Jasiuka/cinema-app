import { ModalComponents } from "~/types";
export const useModalStore = defineStore("modal", {
  state: () => ({
    isModalOpen: false,
    modalComponent: ModalComponents.AUTH,
  }),

  actions: {
    openModal(modalComponent: ModalComponents) {
      this.modalComponent = modalComponent;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
