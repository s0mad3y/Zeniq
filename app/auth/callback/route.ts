import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function isSafeRedirectPath(value: string) {
  return value.startsWith("/") && !value.startsWith("//") && !value.includes("\\");
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/";
  const safeNext = isSafeRedirectPath(next) ? next : "/";

  if (!code) {
    console.error("Supabase auth callback missing code");
    return NextResponse.redirect(new URL("/login?authError=1", requestUrl.origin));
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Supabase auth callback failed", error);
      return NextResponse.redirect(new URL("/login?authError=1", requestUrl.origin));
    }
  } catch (error) {
    console.error("Supabase auth callback failed", error);
    return NextResponse.redirect(new URL("/login?authError=1", requestUrl.origin));
  }

  return NextResponse.redirect(new URL(safeNext, requestUrl.origin));
}
