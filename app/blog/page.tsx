import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A website where everyone has a different story, sharing their memories — the blog of MJ Brown.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container-page py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">Blog</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Stories &amp; memories</h1>
        <p className="mt-4 max-w-xl text-muted">
          It&apos;s a place where everyone has a different story, sharing their memories.
        </p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted">No posts yet — coming soon.</p>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border border-line p-8 transition-colors hover:border-accent"
              >
                <time className="text-xs uppercase tracking-widest text-muted" dateTime={post.date}>
                  {post.date}
                </time>
                <h2 className="mt-2 font-display text-2xl group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Read more →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
