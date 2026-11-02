import { site } from "@/lib/data/site";

/** Site footer — emails, socials, and copyright. */
export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg">{site.name}</p>
          <p className="text-sm text-muted">
            {site.role} — {site.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          {site.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="text-muted hover:text-accent">
              {email}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container-page pb-8 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
