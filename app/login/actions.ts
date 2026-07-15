"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type LoginState = {
  error?: string;
};

export type RegisterState = {
  error?: string;
  success?: string;
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isSafeRedirectPath(value: string) {
  return value.startsWith("/") && !value.startsWith("//") && !value.includes("\\");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password: string) {
  return password.length >= 8;
}

function isEmailRateLimitError(error: { code?: string; status?: number }) {
  return error.code === "over_email_send_rate_limit" || error.status === 429;
}

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = getString(formData, "email");
  const password = getString(formData, "password");

  if (!email || !password) {
    return { error: "Enter both email and password." };
  }

  if (!isValidEmail(email)) {
    return { error: "Enter a valid email address." };
  }

  let authenticated = false;

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error("Supabase login failed", error);
      return { error: "Unable to sign in with those credentials." };
    }

    authenticated = true;
  } catch (error) {
    console.error("Supabase login failed", error);

    return {
      error: "Unable to sign in. Please try again.",
    };
  }

  if (authenticated) {
    revalidatePath("/account");
    redirect("/account");
  }

  return { error: "Unable to sign in. Please try again." };
}

export async function register(
  _previousState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const email = getString(formData, "email");
  const password = getString(formData, "password");
  const confirmPassword = getString(formData, "confirmPassword");

  if (!email || !password || !confirmPassword) {
    return { error: "Enter email, password, and password confirmation." };
  }

  if (!isValidEmail(email)) {
    return { error: "Enter a valid email address." };
  }

  if (!isValidPassword(password)) {
    return { error: "Password must be at least 8 characters." };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  let hasSession = false;

  try {
    const requestHeaders = await headers();
    const origin = requestHeaders.get("origin");

    if (!origin) {
      throw new Error("Missing request origin for email confirmation redirect.");
    }

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback?next=/`,
      },
    });

    if (error) {
      console.error("Supabase registration failed", error);

      if (isEmailRateLimitError(error)) {
        return {
          error: "Too many confirmation emails were requested. Please wait a few minutes and try again.",
        };
      }

      return { error: "Unable to create an account. Please check your details and try again." };
    }

    hasSession = Boolean(data.session);
  } catch (error) {
    console.error("Supabase registration failed", error);

    return {
      error: "Unable to create an account. Please try again.",
    };
  }

  if (hasSession) {
    revalidatePath("/account");
    redirect("/account");
  }

  return {
    success: "Account created. Check your email to confirm your address before signing in.",
  };
}

export async function signOut(formData?: FormData) {
  const redirectTo = formData ? getString(formData, "redirectTo") : "";
  const safeRedirectTo = isSafeRedirectPath(redirectTo) ? redirectTo : "/login";

  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/");
  redirect(safeRedirectTo);
}
