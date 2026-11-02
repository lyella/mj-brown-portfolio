"use client";

import { useState, type FormEvent } from "react";

/**
 * Contact form.
 * - With NEXT_PUBLIC_FORMSPREE_ENDPOINT set (in .env.local), submits to
 *   Formspree and shows success / error states.
 * - Without it, falls back to a mailto link so the form still works.
 */
export function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return; // mailto fallback handles the rest of the page

    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-sm border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

  if (status === "success") {
    return (
      <p className="rounded-sm border border-accent/40 bg-accent/10 px-4 py-3 text-sm">
        Thank you! Your message has been sent — I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-widest text-muted">
            Your Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-widest text-muted">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-widest text-muted">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Tell me about your project…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-fit bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-opacity hover:opacity-80 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {!endpoint && (
        <p className="text-xs text-muted">
          Tip: set <code className="rounded bg-line px-1">NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> in
          your env to enable direct submissions. Until then, you can also email me directly from
          the links on this page.
        </p>
      )}
    </form>
  );
}
