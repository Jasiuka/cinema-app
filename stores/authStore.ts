import type { StoredUser, UserCredentials } from "~/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNotificationStore } from "./notificationsStore";

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
    async login(credentials: UserCredentials, client: SupabaseClient) {
      try {
        const { data, error } = await client.auth.signInWithPassword(
          credentials
        );
        if (!data.user) {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    unsetUser() {
      this.user = { email: "", name: "" };
    },
  },
});
