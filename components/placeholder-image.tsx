/**
 * Deterministic gradient placeholder for images not yet added.
 * Swap <PlaceholderImage> for next/image once real photos
 * live in /public/images.
 */

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) % 360;
  }
  return hash;
}

type PlaceholderImageProps = {
  label: string;
  ratio?: string; // Tailwind aspect ratio utility, default 3/4
  className?: string;
};

export function PlaceholderImage({ label, ratio = "aspect-[3/4]", className = "" }: PlaceholderImageProps) {
  const hue = hashString(label);
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-sm bg-line ${ratio} ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 18% 82%), hsl(${(hue + 40) % 360} 22% 92%))`,
      }}
      role="img"
      aria-label={`${label} — image placeholder`}
    >
      <span className="px-4 text-center font-display text-sm italic text-ink/50">
        {label}
      </span>
    </div>
  );
}
