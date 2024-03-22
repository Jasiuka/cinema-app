import {
  type StoredUser,
  type UserCredentials,
  type User,
  NotificationType,
} from "~/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNotificationStore } from "./notificationsStore";
import { getErrorMessage } from "#imports";

export const useAuthStore = defineStore("auth", () => {
  const { createNotification } = useNotificationStore();
  const client: SupabaseClient = useSupabaseClient();
  const user = ref<Partial<StoredUser>>({});

  const getEmail = computed(() => user.value.email);

  function setUser(newUser: StoredUser) {
    user.value = newUser;
  }

  function unsetUser() {
    user.value = {};
  }

  async function login(credentials: UserCredentials) {
    try {
      const { data, error } = await client.auth.signInWithPassword(credentials);
      if (error?.status) {
        throw new Error(error.message);
      } else {
        setUser({
          email: data.user?.email ?? "",
          name: data.user?.user_metadata.firstName ?? "",
        });
        return true;
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      createNotification(errorMessage, NotificationType.ERROR);
      return false;
    }
  }

  async function signUp(user: User) {
    try {
      const { data, error } = await client.auth.signUp({
        email: user.credentials.email,
        password: user.credentials.password,
        options: {
          data: user.userData,
        },
      });
      if (error?.status) {
        throw new Error(error.message);
      } else {
        return true;
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      createNotification(errorMessage, NotificationType.ERROR);
      return false;
    }
  }

  async function logout() {
    try {
      const { error } = await client.auth.signOut();
      if (error?.status) {
        throw new Error(error.message);
      }
      unsetUser();
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      createNotification(errorMessage, NotificationType.ERROR);
    }
  }

  async function changeEmail(email: string) {
    try {
      const { data, error } = await client.auth.updateUser({ email: email });
      console.log(data, "DATA");
      console.log(error, "ERROR");
      if (error?.status) {
        throw new Error(error.message);
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      createNotification(errorMessage, NotificationType.ERROR);
    }
  }

  async function changePassword(
    current_password: string,
    new_password: string
  ) {
    try {
      const currentPasswordVerified = await client.rpc("verify_user_password", {
        password: current_password,
      });
      if (currentPasswordVerified.data) {
        const updateResponse = await client.auth.updateUser({
          password: new_password,
        });
        if (!updateResponse.error) {
          createNotification(
            "Password changed successfuly",
            NotificationType.SUCCESS
          );
        } else {
          throw new Error(updateResponse.error.message);
        }
      } else {
        throw new Error("Current password is incorrect");
      }
      return currentPasswordVerified;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      createNotification(errorMessage, NotificationType.ERROR);
    }
  }

  return {
    user,
    getEmail,
    setUser,
    unsetUser,
    login,
    signUp,
    logout,
    changeEmail,
    changePassword,
  };
});
