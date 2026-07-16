import Link from "next/link";
import { LoginForm } from "./login-form";

type LoginPageProps = {
  searchParams: Promise<{ authError?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { authError } = await searchParams;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-16 lg:px-8">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
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

          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Account access</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">Sign in to ZENIQ</h1>
            <p className="mt-3 leading-7 text-white/65">
              Access your ZENIQ account with your Supabase Auth credentials.
            </p>
          </div>

          <LoginForm />

          {authError ? (
            <p className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              Unable to confirm your email. Please request a new link and try again.
            </p>
          ) : null}

          <p className="mt-6 text-center text-sm text-white/45">
            Need an account?{" "}
            <Link href="/register" className="font-medium text-white transition hover:text-white/75">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
