import { Fira_Sans, Source_Sans_3 } from "next/font/google";

export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fira-sans",
});

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans-pro",
});

export const fontVariables = `${firaSans.variable} ${sourceSansPro.variable}`;
