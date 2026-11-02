/**
 * Portfolio content — the modeling side of the site.
 * To add a shoot: append one object to `portfolioItems`.
 * `images` should point to files in /public/images once real photos are added.
 */

export const portfolioCategories = [
  "High Fashion",
  "Product Shoots",
  "Freestyle",
  "Ambassador",
  "Modern Shoots",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  year: string;
  description: string;
  images: string[]; // e.g. ["/images/sew-me-1.jpg"]
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Sew Me",
    category: "High Fashion",
    year: "2024",
    description: "Editorial high fashion shoot exploring tailored silhouettes.",
    images: [],
  },
  {
    title: "High Fashion Shoots",
    category: "High Fashion",
    year: "2024",
    description: "A series of studio editorials with dramatic lighting.",
    images: [],
  },
  {
    title: "Dear Sea Stories",
    category: "Freestyle",
    year: "2023",
    description: "A freestyle coastal story told through natural light.",
    images: [],
  },
  {
    title: "Ziko Natural",
    category: "Product Shoots",
    year: "2023",
    description: "Product campaign for a natural skincare line.",
    images: [],
  },
  {
    title: "Belleza Products",
    category: "Product Shoots",
    year: "2023",
    description: "Beauty product features with clean, minimal styling.",
    images: [],
  },
  {
    title: "AL&CO Brand",
    category: "Ambassador",
    year: "2024",
    description: "Brand ambassador work for AL&CO's seasonal lookbook.",
    images: [],
  },
];

export function itemsByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
