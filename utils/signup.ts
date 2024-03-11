import type { SupabaseClient } from "@supabase/supabase-js";
import type { User } from "~/types";

export async function signup(user: User, client: SupabaseClient) {
  try {
    // First create account
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
