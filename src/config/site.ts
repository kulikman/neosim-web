export const siteConfig = {
  name: "Neosim",
  description:
    "Neosim — your digital mobile operator for travel. One eSIM, 150+ countries, pay per MB.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/kulikman/neosim",
  },
  // Navigation links rendered in the Header.
  // Only add routes that have a corresponding page.tsx.
  nav: [
    { title: "Home", href: "/" },
    { title: "Dashboard", href: "/dashboard" },
  ],
} as const;
