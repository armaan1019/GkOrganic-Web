import { supabase } from "./supabase";

export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password,
  });
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function isAdmin() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("No authenticated user");
    return false;
  }

  console.log("Current user:", user.id);

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  console.log("Profile:", profile);
  console.log("Profile error:", error);
  console.log("Profile error JSON:", JSON.stringify(error, null, 2));

  if (error || !profile) {
    return false;
  }

  return profile.role === "admin";
}