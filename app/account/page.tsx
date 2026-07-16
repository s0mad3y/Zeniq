import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut } from "../login/actions";
import { createClient } from "@/lib/supabase/server";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-16 lg:px-8">
        <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="ZENIQ logo"
                className="h-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
              <div>
                <p className="text-lg font-semibold tracking-[0.18em]">ZENIQ</p>
                <p className="text-xs text-white/55">Minimal motion capture software</p>
              </div>
            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Back home
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Account</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">Welcome to ZENIQ</h1>
            <p className="mt-3 leading-7 text-white/65">
              You are signed in. Your account details are below.
            </p>
          </div>

          <div className="mt-8 space-y-4 rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Email</p>
              <p className="mt-2 break-all text-white">{user.email ?? "No email on file"}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">User ID</p>
              <p className="mt-2 break-all font-mono text-sm text-white/75">{user.id}</p>
            </div>
          </div>

          <form action={signOut} className="mt-8">
            <input type="hidden" name="redirectTo" value="/login" />
            <button
              type="submit"
              className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-2xl transition hover:scale-[1.01]"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
