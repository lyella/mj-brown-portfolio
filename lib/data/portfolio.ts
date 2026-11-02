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
    images: ["/images/sew-me.jpg"],
  },
  {
    title: "High Fashion Shoots",
    category: "High Fashion",
    year: "2024",
    description: "A series of studio editorials with dramatic lighting.",
    images: ["/images/high-fashion-shoots.jpg"],
  },
  {
    title: "Dear Sea Stories",
    category: "Freestyle",
    year: "2023",
    description: "A freestyle coastal story told through natural light.",
    images: ["/images/dear-sea-stories.jpg"],
  },
  {
    title: "Ziko Natural",
    category: "Product Shoots",
    year: "2023",
    description: "Product campaign for a natural skincare line.",
    images: ["/images/ziko-natural.jpg"],
  },
  {
    title: "Belleza Products",
    category: "Product Shoots",
    year: "2023",
    description: "Beauty product features with clean, minimal styling.",
    images: ["/images/belleza-1.jpg", "/images/belleza-2.jpg", "/images/belleza-3.jpg"],
  },
  {
    title: "AL&CO Brand",
    category: "Ambassador",
    year: "2024",
    description: "Brand ambassador work for AL&CO's seasonal lookbook.",
    images: ["/images/alco-brand.jpg"],
  },
  {
    title: "Modern Shoots",
    category: "Modern Shoots",
    year: "2024",
    description: "Contemporary portraits with a fresh, modern styling.",
    images: ["/images/modern-shoots.jpg"],
  },
];

export function itemsByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
