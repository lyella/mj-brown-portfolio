/**
 * Works content — the web design side of the site.
 * To add a project: append one object to `works`.
 * The `slug` becomes the URL: /works/{slug}.
 */

export const workCategories = [
  "E-commerce",
  "Personal / Blog",
  "Mobile App",
  "Podcast",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export type Work = {
  slug: string;
  title: string;
  category: WorkCategory;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  figmaUrl?: string;
};

export const works: Work[] = [
  {
    slug: "curl-tips-mobile-app",
    title: "Curl Tips Mobile App Design",
    category: "Mobile App",
    year: "2024",
    summary: "A mobile app concept for hair-care tips and tutorials.",
    description:
      "End-to-end mobile app design for a hair-care community: onboarding, tip feeds, and tutorial player. Designed as a high-fidelity prototype with a component library for consistent styling.",
    stack: ["Figma", "Design System", "Prototyping"],
    figmaUrl: "https://www.figma.com/",
  },
  {
    slug: "bossamusic",
    title: "Bossamusic",
    category: "Personal / Blog",
    year: "2024",
    summary: "A music blog where everyone has a different story to share.",
    description:
      "A personal blog layout centered on storytelling — artist features, playlists, and memories. Built around readable typography and generous imagery.",
    stack: ["Figma", "Web Design"],
  },
  {
    slug: "e-commerce-of-parfum",
    title: "E-commerce of Parfum",
    category: "E-commerce",
    year: "2024",
    summary: "A fragrance e-commerce storefront design.",
    description:
      "A product-led storefront for a parfum label: collection pages, product detail views, and a three-step checkout designed for conversion.",
    stack: ["Figma", "E-commerce UX", "Web Design"],
  },
  {
    slug: "fashionnova",
    title: "Fashionnova",
    category: "E-commerce",
    year: "2023",
    summary: "Fashion e-commerce concept with bold editorial energy.",
    description:
      "A high-energy fashion storefront concept mixing editorial layouts with commerce essentials — lookbooks, quick-add, and size guides.",
    stack: ["Figma", "E-commerce UX"],
  },
  {
    slug: "design-101",
    title: "Design 101",
    category: "Personal / Blog",
    year: "2023",
    summary: "A learning blog for beginning designers.",
    description:
      "A clean, lesson-based blog design for design fundamentals — structured post formats, progress tracking, and example galleries.",
    stack: ["Figma", "Web Design"],
  },
  {
    slug: "unique-beauty",
    title: "Unique Beauty",
    category: "E-commerce",
    year: "2023",
    summary: "Beauty brand storefront with a soft, premium feel.",
    description:
      "A beauty e-commerce design emphasizing product texture and skin tones — soft palette, large product photography, and subscription flows.",
    stack: ["Figma", "E-commerce UX"],
  },
  {
    slug: "abnkkkrmdpplk-podcast",
    title: "ABNKKRMDMPPLk Podcast",
    category: "Podcast",
    year: "2024",
    summary: "Website design for a storytelling podcast.",
    description:
      "A podcast home: episode archive, embedded players, guest features, and subscription calls-to-action, designed around the show's identity.",
    stack: ["Figma", "Web Design"],
  },
  {
    slug: "clothing-line",
    title: "It's a Clothing Line Site",
    category: "E-commerce",
    year: "2023",
    summary: "A streetwear clothing-line site concept.",
    description:
      "A minimal streetwear catalog: drop-style collections, lookbook pages, and a cart experience tuned for hype releases.",
    stack: ["Figma", "E-commerce UX"],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
