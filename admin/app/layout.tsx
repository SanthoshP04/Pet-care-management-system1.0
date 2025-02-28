import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter}from "next/font/google"
import "@uploadthing/react/styles.css";

import { Navbar } from "@/Layout/Navbar/Navbar";




const inter =Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title:{
    template:"%s  ",
    default:" admin Pet"
  },
  description: "admin Pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
