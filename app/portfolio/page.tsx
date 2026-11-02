import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PhotoImage } from "@/components/photo-image";
import { PlaceholderImage } from "@/components/placeholder-image";
import { portfolioCategories, itemsByCategory } from "@/lib/data/portfolio";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Modeling portfolio of MJ Brown — high fashion, product shoots, freestyle, ambassador and modern shoots.",
};

export default function PortfolioPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">In front of the camera</h1>
        <p className="mt-4 max-w-xl text-muted">
          A selection of my modeling work, grouped by the kind of shoot.
          For more pictures, please visit my{" "}
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline"
          >
            Instagram here
          </a>
          .
        </p>
      </Reveal>

      {portfolioCategories.map((category) => {
        const items = itemsByCategory(category);
        if (items.length === 0) return null;

        return (
          <section key={category} className="mt-16">
            <Reveal>
              <h2 className="font-display text-3xl">{category}</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  {item.images[0] ? (
                    <PhotoImage src={item.images[0]} alt={item.title} />
                  ) : (
                    <PlaceholderImage label={item.title} />
                  )}
                  <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                    {item.year}
                  </p>
                  <p className="font-display text-lg">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <Reveal className="mt-16 border border-line p-8 text-center">
        <p className="font-display text-2xl">Want to work together?</p>
        <Link
          href="/contact"
          className="mt-4 inline-block bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-opacity hover:opacity-80"
        >
          Contact Me
        </Link>
      </Reveal>
    </div>
  );
}
