import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.18em]"
          >
            ZENIQ
          </Link>

          <Link
            href="/blog"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Blog
          </Link>
        </nav>

        {children}
      </div>
    </main>
  );
}