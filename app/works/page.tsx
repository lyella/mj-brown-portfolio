import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { works, workCategories } from "@/lib/data/works";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Web design works of MJ Brown — e-commerce, personal and blog sites, mobile apps and podcast designs.",
};

export default function WorksPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">Works</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Behind the screen</h1>
        <p className="mt-4 max-w-xl text-muted">
          Samples of my web design projects — from e-commerce websites to personal and blog
          sites. Click any project to read more.
        </p>
      </Reveal>

      {workCategories.map((category) => {
        const items = works.filter((work) => work.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category} className="mt-16">
            <Reveal>
              <h2 className="font-display text-3xl">{category}</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((work, index) => (
                <Reveal key={work.slug} delay={index * 0.1}>
                  <Link href={`/works/${work.slug}`} className="group block">
                    <PlaceholderImage label={work.title} ratio="aspect-video" />
                    <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                      {work.year}
                    </p>
                    <p className="font-display text-lg group-hover:text-accent">{work.title}</p>
                    <p className="mt-1 text-sm text-muted">{work.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
