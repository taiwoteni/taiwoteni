import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

// Variable fonts — weight omitted so the full axis is available
// (the design uses optical weights like 340 / 360 / 380).
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
