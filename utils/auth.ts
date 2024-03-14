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
