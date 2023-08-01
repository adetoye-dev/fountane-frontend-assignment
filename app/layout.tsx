import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "./providers";
import { NEXT_SEO_DEFAULTS } from "@/next-seo-config";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fountane | Frontend Assignment",
  description: "Assignment for fountane's frontend internship application",
  ...NEXT_SEO_DEFAULTS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
