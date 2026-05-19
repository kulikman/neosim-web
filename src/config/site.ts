export const siteConfig = {
  name: "NeoSIM",
  description:
    "One eSIM. 150+ countries. Pay per megabyte — only when you use data. Auto-switches operators as you cross borders.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://neosim.io",
  ogImage: "/og-image.jpg",
  links: {
    appStore: "#",
    playStore: "#",
  },
  /** Primary nav links — rendered in the marketing Nav component. */
  nav: [
    { title: "Coverage",      href: "/coverage" },
    { title: "How it works",  href: "/how-it-works" },
    { title: "Business",      href: "/business" },
    { title: "Blog",          href: "/blog" },
  ],
  /** Footer column structure */
  footer: {
    product: [
      { title: "Coverage",     href: "/coverage" },
      { title: "How it works", href: "/how-it-works" },
      { title: "Get eSIM",     href: "/get-esim" },
      { title: "Top up",       href: "/topup" },
      { title: "App",          href: "/app-download" },
    ],
    company: [
      { title: "About",    href: "/about" },
      { title: "Blog",     href: "/blog" },
      { title: "Business", href: "/business" },
      { title: "Partners", href: "/partners" },
      { title: "Contact",  href: "/contact" },
    ],
    legal: [
      { title: "Privacy", href: "/privacy" },
      { title: "Terms",   href: "/terms" },
      { title: "FAQ",     href: "/faq" },
    ],
  },
} as const;
