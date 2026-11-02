import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Feel free to contact MJ Brown for any project — modeling or web designing. Don't hesitate to send a message.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">Contact Me</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Let&apos;s work together</h1>
        <p className="mt-4 max-w-xl text-muted">
          Feel free to contact me for any project that you want me to work on — it could be
          modeling or web designing. Don&apos;t hesitate to send a message!
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_320px]">
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.2} className="space-y-8 border border-line p-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Email me directly</p>
            <div className="mt-2 space-y-1 text-sm">
              {site.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="block text-accent hover:underline">
                  {email}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Follow me</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
