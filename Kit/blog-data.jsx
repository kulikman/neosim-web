// Blog data — sample articles for index + detail
const POSTS = [
  { slug: 'esim-vs-roaming-2026', cat: 'Guides', title: 'eSIM vs traditional roaming: the real 2026 numbers', excerpt: 'We pulled 14,000 anonymized billing rows. Here is what travelers actually pay across 6 carriers.', date: 'Apr 22, 2026', read: '7 min', author: 'Ines Tamm', authorRole: 'Head of Data',
    body: [
      "We've been quietly running NeoSIM for 14 months and have something the industry rarely shares: real, anonymized roaming data from 14,000 trips across 87 countries.",
      "When we cross-referenced our per-MB billing against published carrier roaming rates, the gap was bigger than even we expected. The median traveler on a major US carrier paid $47 in roaming surcharges for what costs $4.10 on NeoSIM.",
      "Three things drive that gap. First, day-pass pricing assumes you'll use the data even when you don't — most travelers use under 200MB the day they arrive. Second, carrier 'unlimited' tiers throttle to 128 Kbps after 250MB, making them functionally unusable for navigation. Third, and most importantly, the wholesale costs carriers pay haven't moved in 5 years while retail prices have crept up 11%.",
      "What actually changes with eSIM-first MVNOs is not just price — it's the unit. We bill per megabyte, not per day, which aligns the bill with the actual cost of carrying that traffic. The result is that low-usage trips (a single weekend) and high-usage trips (a 3-week sprint) both come out cheaper, but for different reasons."
    ] },
  { slug: 'install-esim-iphone-15', cat: 'Tutorials', title: 'How to install an eSIM on iPhone 15 in under 90 seconds', excerpt: 'A step-by-step with screenshots. Including the one setting that traps 30% of users.', date: 'Apr 18, 2026', read: '4 min', author: 'Marek Vainio', authorRole: 'Support Lead' },
  { slug: 'tokyo-data-survival-guide', cat: 'Destinations', title: 'Tokyo on 2GB: a data-survival guide for first-timers', excerpt: 'Maps offline, IC card recharges, JR pass scans. What actually eats your gigabytes.', date: 'Apr 14, 2026', read: '6 min', author: 'Aya Watanabe', authorRole: 'Asia Lead' },
  { slug: 'gsma-membership-explained', cat: 'Industry', title: 'Why GSMA membership matters for your eSIM provider', excerpt: 'And why most travel-eSIM brands you see ads for are not actually members.', date: 'Apr 9, 2026', read: '5 min', author: 'Ines Tamm', authorRole: 'Head of Data' },
  { slug: 'corporate-roaming-bills', cat: 'Business', title: 'The hidden $4.2M roaming bill in your finance dashboard', excerpt: 'How distributed-team companies are quietly bleeding money on legacy carrier roaming.', date: 'Apr 3, 2026', read: '8 min', author: 'Tom Reinholdt', authorRole: 'B2B Lead' },
  { slug: '5g-where-it-actually-works', cat: 'Tech', title: '5G roaming: where it actually works in 2026', excerpt: 'A country-by-country reality check. Spoiler: the marketing maps are optimistic.', date: 'Mar 28, 2026', read: '10 min', author: 'Marek Vainio', authorRole: 'Support Lead' },
];
window.POSTS = POSTS;
