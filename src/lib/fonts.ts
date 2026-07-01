import { Fira_Sans, Source_Sans_3 } from "next/font/google";

export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fira-sans",
  display: "swap",
});

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const fontVariables = `${firaSans.variable} ${sourceSansPro.variable}`;
