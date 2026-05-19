"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface Currency {
  code: string;
  symbol: string;
  rate: number;
  flag: string;
  name: string;
}

export const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$",   rate: 1,    flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR", symbol: "€",   rate: 0.92, flag: "🇪🇺", name: "Euro" },
  { code: "GBP", symbol: "£",   rate: 0.78, flag: "🇬🇧", name: "Pound Sterling" },
  { code: "JPY", symbol: "¥",   rate: 152,  flag: "🇯🇵", name: "Japanese Yen" },
  { code: "AUD", symbol: "A$",  rate: 1.52, flag: "🇦🇺", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$",  rate: 1.36, flag: "🇨🇦", name: "Canadian Dollar" },
  { code: "SGD", symbol: "S$",  rate: 1.34, flag: "🇸🇬", name: "Singapore Dollar" },
  { code: "CHF", symbol: "Fr",  rate: 0.88, flag: "🇨🇭", name: "Swiss Franc" },
];

interface CurrencyContextValue {
  cur: Currency;
  set: (code: string) => void;
  all: Currency[];
  fmt: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  cur: CURRENCIES[0],
  set: () => {},
  all: CURRENCIES,
  fmt: (v) => `$${v.toFixed(2)}`,
});

export function CurrencyProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [code, setCode] = useState<string>(() => {
    if (typeof window === "undefined") return "USD";
    try { return localStorage.getItem("neosim_currency") ?? "USD"; } catch { return "USD"; }
  });

  const cur = CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];

  function set(c: string): void {
    setCode(c);
    try { localStorage.setItem("neosim_currency", c); } catch {}
  }

  function fmt(usdPrice: number): string {
    const v = usdPrice * cur.rate;
    if (cur.code === "JPY") return `${cur.symbol}${Math.round(v)}`;
    if (v < 0.01) return `${cur.symbol}${v.toFixed(4)}`;
    if (v < 1) return `${cur.symbol}${v.toFixed(3)}`;
    return `${cur.symbol}${v.toFixed(2)}`;
  }

  return (
    <CurrencyContext.Provider value={{ cur, set, all: CURRENCIES, fmt }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  return useContext(CurrencyContext);
}
