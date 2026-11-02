import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Reveal } from "@/components/reveal";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content });
  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const shareUrl = `https://mj-brown.vercel.app/blog/${post.slug}`; // update after the custom domain goes live

  return (
    <article className="container-page py-16 md:py-24">
      <Reveal className="prose-post text-center">
        <Link href="/blog" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline">
          ← All posts
        </Link>
        <time className="mt-6 block text-xs uppercase tracking-widest text-muted" dateTime={post.date}>
          {post.date}
        </time>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-muted">{post.excerpt}</p>
      </Reveal>

      <Reveal delay={0.1} className="prose-post mt-10">
        {content}
      </Reveal>

      <div className="prose-post mt-12 flex items-center gap-4 border-t border-line pt-6 text-xs uppercase tracking-widest text-muted">
        <span>Share on</span>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent"
        >
          Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent"
        >
          Facebook
        </a>
      </div>

      {others.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="font-display text-2xl">More stories</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="group border border-line p-6 transition-colors hover:border-accent"
              >
                <time className="text-xs uppercase tracking-widest text-muted">{other.date}</time>
                <p className="mt-2 font-display text-lg group-hover:text-accent">{other.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
