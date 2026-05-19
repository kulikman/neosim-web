export interface Country {
  code: string;
  flag: string;
  name: string;
  region: string;
  price: number;
  networks: string;
  tech: string;
}

export const COUNTRIES: Country[] = [
  { code: "FR", flag: "🇫🇷", name: "France",         region: "Europe",      price: 0.00176, networks: "Orange, SFR, Bouygues",          tech: "5G" },
  { code: "DE", flag: "🇩🇪", name: "Germany",        region: "Europe",      price: 0.00176, networks: "Vodafone, O2, Telekom",           tech: "5G" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", region: "Europe",      price: 0.00176, networks: "EE, Vodafone, O2",               tech: "5G" },
  { code: "IT", flag: "🇮🇹", name: "Italy",          region: "Europe",      price: 0.00176, networks: "TIM, Vodafone, WindTre",          tech: "5G" },
  { code: "ES", flag: "🇪🇸", name: "Spain",          region: "Europe",      price: 0.00176, networks: "Movistar, Vodafone, Orange",      tech: "5G" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands",    region: "Europe",      price: 0.00176, networks: "KPN, Vodafone, T-Mobile",         tech: "5G" },
  { code: "PT", flag: "🇵🇹", name: "Portugal",       region: "Europe",      price: 0.00176, networks: "MEO, NOS, Vodafone",              tech: "5G" },
  { code: "CH", flag: "🇨🇭", name: "Switzerland",    region: "Europe",      price: 0.00215, networks: "Swisscom, Salt, Sunrise",         tech: "5G" },
  { code: "GR", flag: "🇬🇷", name: "Greece",         region: "Europe",      price: 0.00205, networks: "Cosmote, Vodafone",               tech: "5G" },
  { code: "PL", flag: "🇵🇱", name: "Poland",         region: "Europe",      price: 0.00176, networks: "Orange, Play, T-Mobile",          tech: "5G" },
  { code: "SE", flag: "🇸🇪", name: "Sweden",         region: "Europe",      price: 0.00195, networks: "Telia, Telenor",                  tech: "5G" },
  { code: "NO", flag: "🇳🇴", name: "Norway",         region: "Europe",      price: 0.00215, networks: "Telenor, Telia",                  tech: "5G" },
  { code: "DK", flag: "🇩🇰", name: "Denmark",        region: "Europe",      price: 0.00195, networks: "TDC, Telia",                      tech: "5G" },
  { code: "FI", flag: "🇫🇮", name: "Finland",        region: "Europe",      price: 0.00205, networks: "Elisa, Telia",                    tech: "5G" },
  { code: "IE", flag: "🇮🇪", name: "Ireland",        region: "Europe",      price: 0.00215, networks: "Vodafone, Three",                 tech: "5G" },
  { code: "AT", flag: "🇦🇹", name: "Austria",        region: "Europe",      price: 0.00195, networks: "A1, Magenta",                     tech: "5G" },
  { code: "BE", flag: "🇧🇪", name: "Belgium",        region: "Europe",      price: 0.00185, networks: "Proximus, Orange",                tech: "5G" },
  { code: "CZ", flag: "🇨🇿", name: "Czechia",        region: "Europe",      price: 0.00195, networks: "O2, T-Mobile",                    tech: "5G" },
  { code: "HR", flag: "🇭🇷", name: "Croatia",        region: "Europe",      price: 0.00215, networks: "A1, T-Mobile",                    tech: "5G" },
  { code: "HU", flag: "🇭🇺", name: "Hungary",        region: "Europe",      price: 0.00195, networks: "Magyar, Vodafone",                tech: "5G" },
  { code: "RO", flag: "🇷🇴", name: "Romania",        region: "Europe",      price: 0.00185, networks: "Orange, Vodafone",                tech: "5G" },
  { code: "US", flag: "🇺🇸", name: "United States",  region: "Americas",    price: 0.00202, networks: "AT&T, T-Mobile, Verizon",         tech: "5G" },
  { code: "CA", flag: "🇨🇦", name: "Canada",         region: "Americas",    price: 0.00220, networks: "Rogers, Bell, Telus",             tech: "5G" },
  { code: "MX", flag: "🇲🇽", name: "Mexico",         region: "Americas",    price: 0.00264, networks: "Telcel, AT&T, Movistar",          tech: "4G/5G" },
  { code: "BR", flag: "🇧🇷", name: "Brazil",         region: "Americas",    price: 0.00440, networks: "Vivo, Claro, TIM",                tech: "5G" },
  { code: "AR", flag: "🇦🇷", name: "Argentina",      region: "Americas",    price: 0.00303, networks: "Movistar, Claro",                 tech: "4G/5G" },
  { code: "CL", flag: "🇨🇱", name: "Chile",          region: "Americas",    price: 0.00283, networks: "Entel, Movistar",                 tech: "5G" },
  { code: "JP", flag: "🇯🇵", name: "Japan",          region: "Asia",        price: 0.00364, networks: "NTT Docomo, SoftBank",            tech: "5G" },
  { code: "KR", flag: "🇰🇷", name: "South Korea",    region: "Asia",        price: 0.00264, networks: "SKT, KT, LG U+",                  tech: "5G" },
  { code: "SG", flag: "🇸🇬", name: "Singapore",      region: "Asia",        price: 0.00264, networks: "Singtel, StarHub, M1",            tech: "5G" },
  { code: "TH", flag: "🇹🇭", name: "Thailand",       region: "Asia",        price: 0.00308, networks: "AIS, TrueMove H, dtac",           tech: "5G" },
  { code: "IN", flag: "🇮🇳", name: "India",          region: "Asia",        price: 0.00293, networks: "Airtel, Jio, Vi",                 tech: "5G" },
  { code: "TW", flag: "🇹🇼", name: "Taiwan",         region: "Asia",        price: 0.00293, networks: "Chunghwa, Taiwan Mobile",         tech: "5G" },
  { code: "HK", flag: "🇭🇰", name: "Hong Kong",      region: "Asia",        price: 0.00283, networks: "CSL, 3 HK",                       tech: "5G" },
  { code: "MY", flag: "🇲🇾", name: "Malaysia",       region: "Asia",        price: 0.00273, networks: "Maxis, Celcom",                   tech: "5G" },
  { code: "VN", flag: "🇻🇳", name: "Vietnam",        region: "Asia",        price: 0.00264, networks: "Viettel, Vinaphone",              tech: "5G" },
  { code: "ID", flag: "🇮🇩", name: "Indonesia",      region: "Asia",        price: 0.00273, networks: "Telkomsel, XL",                   tech: "5G" },
  { code: "PH", flag: "🇵🇭", name: "Philippines",    region: "Asia",        price: 0.00293, networks: "Globe, Smart",                   tech: "5G" },
  { code: "CN", flag: "🇨🇳", name: "China",          region: "Asia",        price: 0.00371, networks: "China Mobile, Unicom",            tech: "5G" },
  { code: "AE", flag: "🇦🇪", name: "UAE",            region: "Middle East", price: 0.00440, networks: "Etisalat, du",                    tech: "5G" },
  { code: "TR", flag: "🇹🇷", name: "Türkiye",        region: "Middle East", price: 0.00264, networks: "Turkcell, Vodafone",              tech: "4G/5G" },
  { code: "IL", flag: "🇮🇱", name: "Israel",         region: "Middle East", price: 0.00273, networks: "Cellcom, Partner",               tech: "5G" },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia",   region: "Middle East", price: 0.00332, networks: "STC, Mobily",                    tech: "5G" },
  { code: "QA", flag: "🇶🇦", name: "Qatar",          region: "Middle East", price: 0.00313, networks: "Ooredoo, Vodafone",              tech: "5G" },
  { code: "AU", flag: "🇦🇺", name: "Australia",      region: "Oceania",     price: 0.00308, networks: "Telstra, Optus, Vodafone",        tech: "5G" },
  { code: "NZ", flag: "🇳🇿", name: "New Zealand",    region: "Oceania",     price: 0.00273, networks: "Spark, Vodafone",                tech: "5G" },
  { code: "ZA", flag: "🇿🇦", name: "South Africa",   region: "Africa",      price: 0.00293, networks: "MTN, Vodacom",                   tech: "5G" },
  { code: "EG", flag: "🇪🇬", name: "Egypt",          region: "Africa",      price: 0.00283, networks: "Orange, Vodafone",               tech: "4G" },
  { code: "MA", flag: "🇲🇦", name: "Morocco",        region: "Africa",      price: 0.00273, networks: "Maroc, Orange",                  tech: "4G/5G" },
  { code: "KE", flag: "🇰🇪", name: "Kenya",          region: "Africa",      price: 0.00303, networks: "Safaricom, Airtel",              tech: "4G" },
  { code: "GE", flag: "🇬🇪", name: "Georgia",        region: "Asia",        price: 0.00264, networks: "Magti, Geocell",                 tech: "4G/5G" },
];

interface CountrySeg {
  trip: string;
  city: string;
  tip: string;
  neighborhoods: string[];
  avgGB: string;
  highlights: string[];
}

export const COUNTRY_SEG: Record<string, CountrySeg> = {
  JP: { trip: "Japan",   city: "Tokyo",     tip: "Buy your eSIM before leaving — Narita arrival WiFi is unreliable past midnight.",  neighborhoods: ["Shinjuku", "Shibuya", "Asakusa", "Akihabara", "Ginza"],           avgGB: "1.5–2 GB", highlights: ["Native 5G in 9 carriers", "Works on Shinkansen tunnels via NTT", "Roaming-grade IPv6"] },
  US: { trip: "the US",  city: "New York",  tip: "T-Mobile gives you the strongest 5G in NYC; AT&T wins in suburbs.",               neighborhoods: ["Manhattan", "Brooklyn", "San Francisco", "LA", "Chicago"],          avgGB: "3 GB",     highlights: ["mmWave 5G in 12 metros", "Hotspot included", "eSIM Quick Transfer support"] },
  TH: { trip: "Thailand", city: "Bangkok", tip: "AIS coverage on the islands beats DTAC. Rural spots default to TrueMove.",          neighborhoods: ["Bangkok", "Phuket", "Chiang Mai", "Krabi", "Koh Samui"],           avgGB: "2 GB",     highlights: ["5G in central Bangkok", "Island coverage on AIS", "No KYC required"] },
  GB: { trip: "the UK",  city: "London",    tip: "Vodafone has the cleanest London Underground coverage as of late 2025.",           neighborhoods: ["London", "Edinburgh", "Manchester", "Bath", "Liverpool"],           avgGB: "2 GB",     highlights: ["5G in 50+ towns", "Tube coverage on partner stations", "EU-roam included for short hops"] },
  ES: { trip: "Spain",   city: "Barcelona", tip: "Movistar wins in Madrid, Orange wins along the Costa del Sol.",                   neighborhoods: ["Madrid", "Barcelona", "Seville", "Valencia", "Granada"],            avgGB: "1.8 GB",   highlights: ["5G across 30+ cities", "Strong Catalonia coastal coverage", "EU roaming bundled"] },
  IT: { trip: "Italy",   city: "Rome",      tip: "TIM still wins in the north, Vodafone is more reliable in Sicily.",               neighborhoods: ["Rome", "Milan", "Florence", "Venice", "Naples"],                    avgGB: "1.5 GB",   highlights: ["5G in major cities", "Train coverage Rome → Milan", "Vatican signal works"] },
  DE: { trip: "Germany", city: "Berlin",    tip: "Telekom has the widest rural coverage; O2 dominates Munich's inner ring.",         neighborhoods: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],              avgGB: "2 GB",     highlights: ["5G in 200+ cities", "Autobahn coverage 95%+", "ICE train connectivity"] },
  FR: { trip: "France",  city: "Paris",     tip: "Orange covers the TGV network; SFR is stronger in Provence.",                    neighborhoods: ["Paris", "Nice", "Lyon", "Bordeaux", "Marseille"],                  avgGB: "2 GB",     highlights: ["5G in all major cities", "TGV high-speed rail coverage", "DOM-TOM territories included"] },
  AE: { trip: "the UAE", city: "Dubai",     tip: "Etisalat (now e&) has stronger 5G in new Dubai developments; du wins in Abu Dhabi.", neighborhoods: ["Dubai Marina", "Downtown", "Abu Dhabi", "Sharjah", "Jumeirah"], avgGB: "2.5 GB",   highlights: ["Ultra-dense 5G in Dubai", "Mall coverage everywhere", "International roaming gateway"] },
  SG: { trip: "Singapore", city: "Singapore", tip: "Singtel has the most consistent MRT underground coverage island-wide.",         neighborhoods: ["CBD", "Orchard", "Sentosa", "Changi", "Jurong"],                   avgGB: "2 GB",     highlights: ["5G island-wide", "MRT underground coverage", "Fastest average speeds in SEA"] },
};

export function getCountrySeg(code: string, country: Country): CountrySeg {
  return COUNTRY_SEG[code] ?? {
    trip: country.name,
    city: country.name,
    tip: `Native ${country.tech} via tier-1 partners. Consistent coverage in all major cities.`,
    neighborhoods: [],
    avgGB: "2 GB",
    highlights: [
      `${country.tech} via ${country.networks.split(",")[0]}`,
      "Hotspot included",
      "Balance never expires",
    ],
  };
}
