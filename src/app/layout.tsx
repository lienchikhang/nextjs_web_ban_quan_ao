import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/components/Header';
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoolPal",
  description: "Buy Clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='app'>
        <Header />
        {children}
      </body>
    </html>
  );
}
