export const useModalStore = defineStore("modal", {
  state: () => ({
    isModalOpen: false,
    modalComponent: "AuthComponent",
  }),

  actions: {
    openModal(modalComponent: string) {
      this.modalComponent = modalComponent;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
