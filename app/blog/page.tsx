import Link from "next/link";

export const metadata = {
  title: "Blog | ZENIQ",
  description:
    "Product news, development updates, and motion capture guides from ZENIQ.",
};

const posts = [
  {
    slug: "introducing-zeniq",
    title: "Introducing ZENIQ",
    description:
      "How ZENIQ turns ordinary webcam footage into accessible 3D motion capture data.",
    date: "July 10, 2026",
    category: "Product Update",
  },
  {
    slug: "zeniq-development-update",
    title: "Quy trình làm việc \"Mocap Mù\" – rào cản lớn nhất bóp nghẹt dòng chảy sáng tạo của nghệ sĩ 3D độc lập.",
    description:
      "Sự ức chế của các 3D Animator khi làm việc theo quy trình hạn chế kinh phí phần cứng và phần mềm mocap truyền thống.",
    date: "13:00, July 10, 2026",
    category: "Tutorial",
  },
];

export default function BlogPage() {
  return (
    <div>
      <header className="max-w-3xl py-10">
        <p className="text-sm uppercase tracking-[0.25em] text-white/45">
          ZENIQ Blog
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Motion capture insights, guides, and development updates.
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/65">
          Follow the development of ZENIQ and learn about markerless motion
          capture, animation, virtual characters, and real-time performance.
        </p>
      </header>

      <section className="mt-10 grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
          >
            <div className="flex gap-3 text-sm text-white/45">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <h2 className="mt-5 text-2xl font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="transition hover:text-white/65"
              >
                {post.title}
              </Link>
            </h2>

            <p className="mt-4 leading-7 text-white/65">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-block text-sm font-semibold"
            >
              Read article →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}