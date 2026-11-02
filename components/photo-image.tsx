import Image from "next/image";

type PhotoImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[3/4]" or "aspect-video". */
  ratio?: string;
  className?: string;
  /** Responsive sizes hint for the browser — default suits card grids. */
  sizes?: string;
  /** Set true for above-the-fold images (home hero). */
  priority?: boolean;
};

/**
 * Responsive photo wrapper around next/image.
 * Images are served from /public/images and optimized by Next.js
 * (auto-converted to WebP, resized per device).
 */
export function PhotoImage({
  src,
  alt,
  ratio = "aspect-[3/4]",
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: PhotoImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-sm ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
      />
    </div>
  );
}
