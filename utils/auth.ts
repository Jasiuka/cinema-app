import type { SupabaseClient } from "@supabase/supabase-js";
import type { User, UserCredentials } from "~/types";

export async function signup(user: User, client: SupabaseClient) {
  try {
    const { data, error } = await client.auth.signUp({
      email: user.credentials.email,
      password: user.credentials.password,
      options: {
        data: user.userData,
      },
    });
    if (!data.user) {
      return;
    }
    console.log(data);
  } catch (error) {}
}

export async function login(
  credentials: UserCredentials,
  client: SupabaseClient
) {
  try {
    const { data, error } = await client.auth.signInWithPassword(credentials);
    if (!data.user) {
      return;
    }
    return data;
  } catch (error) {}
}

export async function forgotPassword(email: string, client: SupabaseClient) {
  try {
  } catch (error) {}
}

export async function logout(client: SupabaseClient) {
  try {
    const { error } = await client.auth.signOut();
    console.log("Logged out successfuly");
  } catch (error) {}
}

export async function changeEmail(email: string, client: SupabaseClient) {
  try {
    const { data, error } = await client.auth.updateUser({ email: email });
    if (!error) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function changePassword(
  current_password: string,
  new_password: string,
  client: SupabaseClient
) {
  try {
    const currentPasswordVerified = await client.rpc("verify_user_password", {
      password: current_password,
    });
    if (currentPasswordVerified.data) {
      const updateResponse = await client.auth.updateUser({
        password: new_password,
      });
    }
    return currentPasswordVerified;
  } catch (error) {
    console.log(error);
  }
}
