import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { Dictionary } from "./dictionaries";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

type Props = {
  children: React.ReactNode;
  params: {
    lang: Dictionary;
  };
};

export default function RootLayout({ children, params }: Props) {
  console.log({ params });
  return (
    <html lang={params.lang} className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
