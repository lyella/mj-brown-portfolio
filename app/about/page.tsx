import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PhotoImage } from "@/components/photo-image";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story of MJ Brown — from scratch to a journey of modeling and web design, always thinking in a positive way.",
};

export default function AboutPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">About Me</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">My journey</h1>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_360px]">
        <Reveal className="space-y-6 text-lg leading-relaxed">
          <p>
            I created my website to show my world and keep my memories. This website is not only
            about my journey — it is also for my works, and how dedicated I am.
          </p>
          <p>
            Started from scratch, I didn&apos;t always know where my feet were going to lead me,
            but I always think in a positive way. Every shoot, every layout, every project is a
            step forward.
          </p>
          <p>
            Some of my works are quite minimalist — I&apos;m not good at that yet, but I know I
            will make it soon. Modeling and web design both let me tell stories: one in front of
            the camera, one behind the screen.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <PhotoImage
            src="/images/about-portrait.jpg"
            alt="MJ Brown — behind the scenes"
            sizes="(max-width: 768px) 100vw, 360px"
          />
          <p className="mt-3 text-xs uppercase tracking-widest text-muted">
            Always learning · Always creating
          </p>
        </Reveal>
      </div>
    </div>
  );
}
