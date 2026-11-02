import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

/** All blog post file names, e.g. ["hello-world.mdx", ...] */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

/** Parse one post by its slug (file name without .mdx). */
export function getPostBySlug(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    content,
  };
}

/** All posts, newest first. */
export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, "")))
    .filter((post): post is Post => Boolean(post))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
