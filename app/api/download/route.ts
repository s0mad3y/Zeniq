import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const DOWNLOAD_URL =
  "https://github.com/s0mad3y/Zeniq/releases/download/v2.0.0/ZENIQ-Windows.zip";

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("download_events")
      .insert({
        source: "website",
        user_id: user?.id ?? null,
        email: user?.email ?? null,
      });

    if (error) {
      console.error("Failed to record download:", error);
    }
  } catch (error) {
    console.error("Download tracking exception:", error);
  }

  return NextResponse.redirect(DOWNLOAD_URL);
}