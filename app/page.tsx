import Link from "next/link";
import { signOut } from "./login/actions";
import { ZeniqWebsite } from "./zeniq-website";
import { createClient } from "@/lib/supabase/server";

function SignedOutControls() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
      >
        Sign in
      </Link>
      <Link
        href="/register"
        className="rounded-2xl border border-white/10 bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
      >
        Register
      </Link>
    </div>
  );
}

function SignedInControls({ email }: { email?: string }) {
  return (
    <div className="flex items-center gap-3">
      {email ? <span className="hidden max-w-40 truncate text-sm text-white/55 lg:inline">{email}</span> : null}
      <Link
        href="/account"
        className="rounded-2xl border border-white/10 bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
      >
        Account
      </Link>
      <form action={signOut}>
        <input type="hidden" name="redirectTo" value="/" />
        <button
          type="submit"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}

export default async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <ZeniqWebsite
      authControls={
        user ? <SignedInControls email={user.email} /> : <SignedOutControls />
      }
    />
  );
}
