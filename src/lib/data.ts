/** Prices stored as $/MB; display as $/GB via fmtGB(). */

export interface Country {
  code: string;
  flag: string;
  name: string;
  region: "Europe" | "Americas" | "Asia" | "Oceania" | "Middle East" | "Africa";
  /** Price in $/MB */
  priceMb: number;
  networks: string;
  tech: "5G" | "4G" | "4G/5G";
}

export interface Destination {
  code: string;
  city: string;
  country: string;
  img: string;
  /** Price in $/MB */
  priceMb: number;
  popular: string | null;
}

export interface Step {
  n: string;
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface CompareRow {
  feature: string;
  neo: boolean;
  roam: boolean;
  sim: boolean;
}

export interface BlogPost {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  author: string;
  authorRole: string;
  body?: string[];
}

/** Format $/MB price to displayable $/GB string */
export function fmtGB(priceMb: number): string {
  return `$${(priceMb * 1024).toFixed(2)}/GB`;
}

/** Get numeric $/GB value */
export function gbVal(priceMb: number): string {
  return (priceMb * 1024).toFixed(2);
}

export const COUNTRIES: Country[] = [
  // Tier-1 EU @ $1.80/GB
  { code: "FR", flag: "🇫🇷", name: "France",         region: "Europe",      priceMb: 0.00176, networks: "Orange, SFR, Bouygues",         tech: "5G" },
  { code: "DE", flag: "🇩🇪", name: "Germany",        region: "Europe",      priceMb: 0.00176, networks: "Vodafone, O2, Telekom",          tech: "5G" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", region: "Europe",      priceMb: 0.00176, networks: "EE, Vodafone, O2",               tech: "5G" },
  { code: "IT", flag: "🇮🇹", name: "Italy",          region: "Europe",      priceMb: 0.00176, networks: "TIM, Vodafone, WindTre",         tech: "5G" },
  { code: "ES", flag: "🇪🇸", name: "Spain",          region: "Europe",      priceMb: 0.00176, networks: "Movistar, Vodafone, Orange",     tech: "5G" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands",    region: "Europe",      priceMb: 0.00176, networks: "KPN, Vodafone, T-Mobile",        tech: "5G" },
  { code: "PT", flag: "🇵🇹", name: "Portugal",       region: "Europe",      priceMb: 0.00176, networks: "MEO, NOS, Vodafone",             tech: "5G" },
  { code: "PL", flag: "🇵🇱", name: "Poland",         region: "Europe",      priceMb: 0.00176, networks: "Orange, Play, T-Mobile",         tech: "5G" },
  { code: "RO", flag: "🇷🇴", name: "Romania",        region: "Europe",      priceMb: 0.00185, networks: "Orange, Vodafone",               tech: "5G" },
  { code: "BE", flag: "🇧🇪", name: "Belgium",        region: "Europe",      priceMb: 0.00185, networks: "Proximus, Orange",               tech: "5G" },
  { code: "GR", flag: "🇬🇷", name: "Greece",         region: "Europe",      priceMb: 0.00205, networks: "Cosmote, Vodafone",              tech: "5G" },
  { code: "FI", flag: "🇫🇮", name: "Finland",        region: "Europe",      priceMb: 0.00205, networks: "Elisa, Telia",                   tech: "5G" },
  { code: "CZ", flag: "🇨🇿", name: "Czechia",        region: "Europe",      priceMb: 0.00195, networks: "O2, T-Mobile",                   tech: "5G" },
  { code: "AT", flag: "🇦🇹", name: "Austria",        region: "Europe",      priceMb: 0.00195, networks: "A1, Magenta",                    tech: "5G" },
  { code: "SE", flag: "🇸🇪", name: "Sweden",         region: "Europe",      priceMb: 0.00195, networks: "Telia, Telenor",                 tech: "5G" },
  { code: "DK", flag: "🇩🇰", name: "Denmark",        region: "Europe",      priceMb: 0.00195, networks: "TDC, Telia",                     tech: "5G" },
  { code: "HU", flag: "🇭🇺", name: "Hungary",        region: "Europe",      priceMb: 0.00195, networks: "Magyar, Vodafone",               tech: "5G" },
  { code: "BG", flag: "🇧🇬", name: "Bulgaria",       region: "Europe",      priceMb: 0.00195, networks: "A1, Vivacom",                    tech: "4G/5G" },
  { code: "CH", flag: "🇨🇭", name: "Switzerland",    region: "Europe",      priceMb: 0.00215, networks: "Swisscom, Salt, Sunrise",        tech: "5G" },
  { code: "NO", flag: "🇳🇴", name: "Norway",         region: "Europe",      priceMb: 0.00215, networks: "Telenor, Telia",                 tech: "5G" },
  { code: "IE", flag: "🇮🇪", name: "Ireland",        region: "Europe",      priceMb: 0.00215, networks: "Vodafone, Three",                tech: "5G" },
  { code: "HR", flag: "🇭🇷", name: "Croatia",        region: "Europe",      priceMb: 0.00215, networks: "A1, T-Mobile",                   tech: "5G" },
  { code: "IS", flag: "🇮🇸", name: "Iceland",        region: "Europe",      priceMb: 0.00283, networks: "Síminn, Vodafone",               tech: "4G/5G" },
  // Americas
  { code: "US", flag: "🇺🇸", name: "United States",  region: "Americas",    priceMb: 0.00202, networks: "AT&T, T-Mobile, Verizon",        tech: "5G" },
  { code: "CA", flag: "🇨🇦", name: "Canada",         region: "Americas",    priceMb: 0.00220, networks: "Rogers, Bell, Telus",            tech: "5G" },
  { code: "MX", flag: "🇲🇽", name: "Mexico",         region: "Americas",    priceMb: 0.00264, networks: "Telcel, AT&T, Movistar",         tech: "4G/5G" },
  { code: "BR", flag: "🇧🇷", name: "Brazil",         region: "Americas",    priceMb: 0.00440, networks: "Vivo, Claro, TIM",               tech: "5G" },
  { code: "CL", flag: "🇨🇱", name: "Chile",          region: "Americas",    priceMb: 0.00283, networks: "Entel, Movistar",                tech: "5G" },
  { code: "CO", flag: "🇨🇴", name: "Colombia",       region: "Americas",    priceMb: 0.00283, networks: "Claro, Tigo",                    tech: "4G/5G" },
  { code: "AR", flag: "🇦🇷", name: "Argentina",      region: "Americas",    priceMb: 0.00303, networks: "Movistar, Claro",                tech: "4G/5G" },
  { code: "PE", flag: "🇵🇪", name: "Peru",           region: "Americas",    priceMb: 0.00293, networks: "Movistar, Claro",                tech: "4G" },
  // Asia
  { code: "SG", flag: "🇸🇬", name: "Singapore",      region: "Asia",        priceMb: 0.00264, networks: "Singtel, StarHub, M1",           tech: "5G" },
  { code: "KR", flag: "🇰🇷", name: "South Korea",    region: "Asia",        priceMb: 0.00264, networks: "SKT, KT, LG U+",                tech: "5G" },
  { code: "VN", flag: "🇻🇳", name: "Vietnam",        region: "Asia",        priceMb: 0.00264, networks: "Viettel, Vinaphone",             tech: "5G" },
  { code: "MY", flag: "🇲🇾", name: "Malaysia",       region: "Asia",        priceMb: 0.00273, networks: "Maxis, Celcom",                  tech: "5G" },
  { code: "HK", flag: "🇭🇰", name: "Hong Kong",      region: "Asia",        priceMb: 0.00283, networks: "CSL, 3 HK",                     tech: "5G" },
  { code: "NZ", flag: "🇳🇿", name: "New Zealand",    region: "Oceania",     priceMb: 0.00273, networks: "Spark, Vodafone",                tech: "5G" },
  { code: "ID", flag: "🇮🇩", name: "Indonesia",      region: "Asia",        priceMb: 0.00273, networks: "Telkomsel, XL",                  tech: "5G" },
  { code: "IN", flag: "🇮🇳", name: "India",          region: "Asia",        priceMb: 0.00293, networks: "Airtel, Jio, Vi",                tech: "5G" },
  { code: "TW", flag: "🇹🇼", name: "Taiwan",         region: "Asia",        priceMb: 0.00293, networks: "Chunghwa, Taiwan Mobile",        tech: "5G" },
  { code: "PH", flag: "🇵🇭", name: "Philippines",    region: "Asia",        priceMb: 0.00293, networks: "Globe, Smart",                   tech: "5G" },
  { code: "TH", flag: "🇹🇭", name: "Thailand",       region: "Asia",        priceMb: 0.00308, networks: "AIS, TrueMove H, dtac",          tech: "5G" },
  { code: "AU", flag: "🇦🇺", name: "Australia",      region: "Oceania",     priceMb: 0.00308, networks: "Telstra, Optus, Vodafone",       tech: "5G" },
  { code: "JP", flag: "🇯🇵", name: "Japan",          region: "Asia",        priceMb: 0.00364, networks: "NTT Docomo, SoftBank",           tech: "5G" },
  { code: "CN", flag: "🇨🇳", name: "China",          region: "Asia",        priceMb: 0.00371, networks: "China Mobile, Unicom",           tech: "5G" },
  { code: "GE", flag: "🇬🇪", name: "Georgia",        region: "Asia",        priceMb: 0.00264, networks: "Magti, Geocell",                 tech: "4G/5G" },
  // Middle East
  { code: "AE", flag: "🇦🇪", name: "UAE",            region: "Middle East", priceMb: 0.00440, networks: "Etisalat, du",                   tech: "5G" },
  { code: "TR", flag: "🇹🇷", name: "Türkiye",        region: "Middle East", priceMb: 0.00264, networks: "Turkcell, Vodafone",             tech: "4G/5G" },
  { code: "IL", flag: "🇮🇱", name: "Israel",         region: "Middle East", priceMb: 0.00273, networks: "Cellcom, Partner",               tech: "5G" },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia",   region: "Middle East", priceMb: 0.00332, networks: "STC, Mobily",                    tech: "5G" },
  { code: "QA", flag: "🇶🇦", name: "Qatar",          region: "Middle East", priceMb: 0.00313, networks: "Ooredoo, Vodafone",              tech: "5G" },
  // Africa
  { code: "EG", flag: "🇪🇬", name: "Egypt",          region: "Africa",      priceMb: 0.00283, networks: "Orange, Vodafone",               tech: "4G" },
  { code: "MA", flag: "🇲🇦", name: "Morocco",        region: "Africa",      priceMb: 0.00273, networks: "Maroc, Orange",                  tech: "4G/5G" },
  { code: "ZA", flag: "🇿🇦", name: "South Africa",   region: "Africa",      priceMb: 0.00293, networks: "MTN, Vodacom",                   tech: "5G" },
  { code: "KE", flag: "🇰🇪", name: "Kenya",          region: "Africa",      priceMb: 0.00303, networks: "Safaricom, Airtel",              tech: "4G" },
];

export const DESTINATIONS: Destination[] = [
  { code: "JP", city: "Tokyo",     country: "Japan",     img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=70", priceMb: 0.00364, popular: "Most popular" },
  { code: "FR", city: "Paris",     country: "France",    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=70", priceMb: 0.00176, popular: null },
  { code: "AE", city: "Dubai",     country: "UAE",       img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=70", priceMb: 0.00440, popular: "Top rated" },
  { code: "TH", city: "Bangkok",   country: "Thailand",  img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=70", priceMb: 0.00308, popular: null },
  { code: "IT", city: "Rome",      country: "Italy",     img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70", priceMb: 0.00176, popular: null },
  { code: "US", city: "New York",  country: "USA",       img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=70", priceMb: 0.00202, popular: null },
  { code: "TR", city: "Istanbul",  country: "Türkiye",   img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=70", priceMb: 0.00264, popular: null },
  { code: "SG", city: "Singapore", country: "Singapore", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=70", priceMb: 0.00264, popular: null },
];

export const STEPS: Step[] = [
  { n: "01", title: "Order online",   body: "Sign up in seconds. No credit card required — get $2.50 free on your first connection abroad. Free eSIM delivered instantly to your email." },
  { n: "02", title: "Scan the QR",    body: "One tap installs your NeoSIM as a second line. Your home number stays active." },
  { n: "03", title: "Land & connect", body: "Touch down anywhere in 150+ countries. We auto-pick the strongest local network in seconds." },
  { n: "04", title: "Pay per GB",     body: "Top up the wallet, use what you need. Pay per GB — not per day. Set a daily cap so you're never surprised. Balance never expires." },
];

export const FAQS: Faq[] = [
  { q: "How is NeoSIM different from a regular travel eSIM?",  a: "Most travel eSIMs sell expiring data packages tied to one region. NeoSIM is a single global eSIM with one wallet — pay only for what you use, in 150+ countries. No regions to switch between, no leftover gigabytes." },
  { q: "Will my phone work with NeoSIM?",                       a: "NeoSIM works on every eSIM-capable device released since 2018 — every iPhone XS or newer, Pixel 4+, Galaxy S20+, and most flagships. Check the full list during checkout." },
  { q: "How fast is the connection?",                           a: "We connect to 500+ tier-1 carriers via direct IPX agreements. You get native 4G/5G in every supported country — same speeds as a local SIM." },
  { q: "What happens to my home number?",                       a: "Nothing. NeoSIM installs as a secondary line. Calls and SMS to your home number keep arriving. Use NeoSIM for data only, or set it as the default line — your call." },
  { q: "Can I top up from anywhere?",                           a: "Yes. The wallet works from any country with Apple Pay, Google Pay, or any card. Balance never expires." },
  { q: "Is there a monthly fee?",                               a: "No subscription. The eSIM itself is free; you only pay for the data you use. 1 MB minimum increments." },
  { q: "Can I get a refund on unused balance?",                 a: "Yes. Anytime. Request a refund in the wallet app and we return the unused balance to your original payment method within 5 business days." },
  { q: "How does eKYC work?",                                   a: "For regulatory compliance in some regions, we may ask for a quick selfie + ID scan. Takes 30 seconds, fully encrypted, processed by our GDPR-compliant partner." },
  { q: "Can I set a daily spending limit?",                     a: "Yes. In the app, go to Settings → Daily Cap and set the maximum amount you want to spend per day. When you reach the limit, your speed drops to 64kbps — you stay connected, just slower. The cap resets every midnight UTC." },
  { q: "How does the referral program work?",                   a: "Share your unique referral link. When a friend signs up and makes their first top-up, you both benefit. You earn 5% of every top-up they make — forever — credited to your NeoSIM balance as free data." },
  { q: "Can my family share one eSIM account?",                 a: "Yes. With Family Wallet, one balance covers up to 6 devices. The account owner can set individual daily limits for each family member. Perfect for traveling together." },
  { q: "What is NeoSIM's privacy policy in simple terms?",      a: "We collect only what we need to bill you. We never sell your data, never build ad profiles, and never share your location with third parties. Connection logs are deleted after 90 days. Servers are in Frankfurt, EU. Read our 8-point Privacy Manifesto for the full commitment." },
];

export const COMPARE: CompareRow[] = [
  { feature: "Works in 150+ countries on one eSIM",   neo: true,  roam: false, sim: false },
  { feature: "Pay only for data you actually use",    neo: true,  roam: false, sim: false },
  { feature: "Auto-connect to best local network",    neo: true,  roam: true,  sim: false },
  { feature: "Keep your home number active",          neo: true,  roam: true,  sim: false },
  { feature: "Top up from any country",               neo: true,  roam: false, sim: true  },
  { feature: "No expiring packages or unused GB",     neo: true,  roam: false, sim: false },
  { feature: "Miles back on every top-up",            neo: true,  roam: false, sim: false },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "esim-vs-roaming-2026",
    cat: "Guides",
    title: "eSIM vs traditional roaming: the real 2026 numbers",
    excerpt: "We pulled 14,000 anonymized billing rows. Here is what travelers actually pay across 6 carriers.",
    date: "Apr 22, 2026",
    read: "7 min",
    author: "Ines Tamm",
    authorRole: "Head of Data",
    body: [
      "We've been quietly running NeoSIM for 14 months and have something the industry rarely shares: real, anonymized roaming data from 14,000 trips across 87 countries.",
      "When we cross-referenced our per-MB billing against published carrier roaming rates, the gap was bigger than even we expected. The median traveler on a major US carrier paid $47 in roaming surcharges for what costs $4.10 on NeoSIM.",
      "Three things drive that gap. First, day-pass pricing assumes you'll use the data even when you don't — most travelers use under 200MB the day they arrive. Second, carrier 'unlimited' tiers throttle to 128 Kbps after 250MB, making them functionally unusable for navigation. Third, and most importantly, the wholesale costs carriers pay haven't moved in 5 years while retail prices have crept up 11%.",
      "What actually changes with eSIM-first MVNOs is not just price — it's the unit. We bill per megabyte, not per day, which aligns the bill with the actual cost of carrying that traffic. The result is that low-usage trips (a single weekend) and high-usage trips (a 3-week sprint) both come out cheaper, but for different reasons.",
    ],
  },
  {
    slug: "install-esim-iphone-15",
    cat: "Tutorials",
    title: "How to install an eSIM on iPhone 15 in under 90 seconds",
    excerpt: "A step-by-step with screenshots. Including the one setting that traps 30% of users.",
    date: "Apr 18, 2026",
    read: "4 min",
    author: "Marek Vainio",
    authorRole: "Support Lead",
  },
  {
    slug: "tokyo-data-survival-guide",
    cat: "Destinations",
    title: "Tokyo on 2GB: a data-survival guide for first-timers",
    excerpt: "Maps offline, IC card recharges, JR pass scans. What actually eats your gigabytes.",
    date: "Apr 14, 2026",
    read: "6 min",
    author: "Aya Watanabe",
    authorRole: "Asia Lead",
  },
  {
    slug: "gsma-membership-explained",
    cat: "Industry",
    title: "Why GSMA membership matters for your eSIM provider",
    excerpt: "And why most travel-eSIM brands you see ads for are not actually members.",
    date: "Apr 9, 2026",
    read: "5 min",
    author: "Ines Tamm",
    authorRole: "Head of Data",
  },
  {
    slug: "corporate-roaming-bills",
    cat: "Business",
    title: "The hidden $4.2M roaming bill in your finance dashboard",
    excerpt: "How distributed-team companies are quietly bleeding money on legacy carrier roaming.",
    date: "Apr 3, 2026",
    read: "8 min",
    author: "Tom Reinholdt",
    authorRole: "B2B Lead",
  },
  {
    slug: "5g-where-it-actually-works",
    cat: "Tech",
    title: "5G roaming: where it actually works in 2026",
    excerpt: "A country-by-country reality check. Spoiler: the marketing maps are optimistic.",
    date: "Mar 28, 2026",
    read: "10 min",
    author: "Marek Vainio",
    authorRole: "Support Lead",
  },
];
