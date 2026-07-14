import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="mt-12 text-3xl font-semibold tracking-tight">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-10 text-2xl font-semibold">{children}</h3>
  ),

p: ({ children, ...props }) => (
  <p
    {...props}
    className="mt-6 text-lg leading-8 text-white/75"
  >
    {children}
  </p>
),

  ul: ({ children }) => (
    <ul className="mt-6 list-disc space-y-3 pl-6 text-lg text-white/75">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg text-white/75">
      {children}
    </ol>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
    >
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l-2 border-white/30 pl-6 italic text-white/65">
      {children}
    </blockquote>
  ),

  code: ({ children }) => (
    <code className="rounded bg-white/10 px-2 py-1 text-sm">{children}</code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}