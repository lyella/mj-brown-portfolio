import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { works, getWork } from "@/lib/data/works";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return { title: work.title, description: work.summary };
}

export default async function WorkDetailPage({ params }: Params) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const related = works.filter((w) => w.category === work.category && w.slug !== work.slug).slice(0, 3);

  return (
    <article className="container-page py-16 md:py-24">
      <Reveal>
        <Link href="/works" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline">
          ← All works
        </Link>
        <p className="eyebrow mt-6">
          {work.category} · {work.year}
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl">{work.title}</h1>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <PlaceholderImage label={`${work.title} — cover`} ratio="aspect-[16/9]" />
      </Reveal>

      <Reveal delay={0.15} className="mt-10 grid gap-10 md:grid-cols-[1fr_260px]">
        <div className="space-y-4 text-lg leading-relaxed">
          <p className="font-display text-2xl">{work.summary}</p>
          <p className="text-muted">{work.description}</p>
        </div>

        <aside className="space-y-6 border border-line p-6 text-sm">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Stack</p>
            <ul className="mt-2 space-y-1">
              {work.stack.map((tech) => (
                <li key={tech}>· {tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            {work.liveUrl && (
              <a
                href={work.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-ink px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-opacity hover:opacity-80"
              >
                Visit the page
              </a>
            )}
            {work.figmaUrl && (
              <a
                href={work.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-ink px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-paper"
              >
                View design
              </a>
            )}
          </div>
        </aside>
      </Reveal>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl">More {work.category} work</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/works/${item.slug}`} className="group block">
                <PlaceholderImage label={item.title} ratio="aspect-video" />
                <p className="mt-3 font-display text-lg group-hover:text-accent">{item.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
