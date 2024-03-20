import type { StoredUser } from "~/types";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {} as StoredUser,
  }),

  getters: {
    getEmail(state) {
      return state.user.email;
    },
  },
  actions: {
    setUser(user: StoredUser) {
      this.user = user;
    },
    unsetUser() {
      this.user = { email: "", name: "" };
    },
  },
});
