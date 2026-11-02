import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { site } from "@/lib/data/site";
import { portfolioItems } from "@/lib/data/portfolio";
import { works } from "@/lib/data/works";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const featuredPortfolio = portfolioItems.slice(0, 3);
  const featuredWorks = works.slice(0, 3);
  const latestPost = getAllPosts()[0];

  return (
    <>
      {/* Hero */}
      <section className="container-page grid items-center gap-10 py-16 md:grid-cols-[1fr_auto] md:py-24">
        <div>
          <p className="eyebrow">Model & Web Designer</p>
          <h1 className="mt-3 font-display text-6xl leading-tight md:text-8xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-md font-display text-2xl italic text-muted">
            &ldquo;{site.tagline}&rdquo;
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/portfolio"
              className="bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-opacity hover:opacity-80"
            >
              View Portfolio
            </Link>
            <Link
              href="/works"
              className="border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-paper"
            >
              See Works
            </Link>
          </div>
        </div>
        <PlaceholderImage label="MJ Brown — portrait" ratio="aspect-[3/4] w-full md:w-80" />
      </section>

      {/* About teaser */}
      <section className="border-y border-line bg-white/60">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">About My Website</p>
            <p className="mt-4 max-w-2xl font-display text-xl leading-relaxed md:text-2xl">
              I created my website to show my world and keep my memories. This site is not only
              about my journey — it&apos;s also for my works, and how dedicated I am. Started from
              scratch, not always sure where the road leads, but always thinking in a positive way.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
            >
              Read my story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="container-page py-16">
        <Reveal className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl md:text-4xl">Featured Shoots</h2>
          <Link href="/portfolio" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline">
            All shoots →
          </Link>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPortfolio.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <PlaceholderImage label={item.title} />
              <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                {item.category} · {item.year}
              </p>
              <p className="font-display text-lg">{item.title}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured works */}
      <section className="border-t border-line bg-white/60">
        <div className="container-page py-16">
          <Reveal className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">Selected Works</h2>
            <Link href="/works" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline">
              All works →
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <Reveal key={work.slug} delay={index * 0.1}>
                <Link href={`/works/${work.slug}`} className="group block">
                  <PlaceholderImage label={work.title} ratio="aspect-video" />
                  <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                    {work.category} · {work.year}
                  </p>
                  <p className="font-display text-lg group-hover:text-accent">{work.title}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog + contact call */}
      <section className="container-page grid gap-6 py-16 md:grid-cols-2">
        <Reveal className="border border-line p-8">
          <p className="eyebrow">From the Blog</p>
          {latestPost ? (
            <>
              <h3 className="mt-3 font-display text-2xl">{latestPost.title}</h3>
              <p className="mt-2 text-sm text-muted">{latestPost.excerpt}</p>
              <Link
                href={`/blog/${latestPost.slug}`}
                className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
              >
                Read more →
              </Link>
            </>
          ) : (
            <p className="mt-3 text-sm text-muted">Coming soon.</p>
          )}
        </Reveal>
        <Reveal delay={0.1} className="border border-line bg-ink p-8 text-paper">
          <p className="eyebrow">Work With Me</p>
          <h3 className="mt-3 font-display text-2xl">
            Modeling or web design — feel free to message me!
          </h3>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-paper px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-80"
          >
            Contact Me
          </Link>
        </Reveal>
      </section>
    </>
  );
}
