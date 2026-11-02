/**
 * Site-wide configuration — brand, contact channels, navigation.
 * Edit this file to change the header/footer, emails and social links.
 */
export const site = {
  name: "MJ Brown",
  role: "Model & Web Designer",
  tagline: "a journey through my world",
  description:
    "Portfolio of MJ Brown — model and web designer. High fashion, product shoots, freestyle photography and selected web design works.",
  emails: ["mjhane1223.mja@gmail.com", "model.mjbrown@gmail.com"],
  // Replace with the real Instagram profile URL
  instagram: "https://www.instagram.com/",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Works", href: "/works" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Me", href: "/contact" },
] as const;
