'use client'
import { Inter } from "next/font/google";
import '@/components/Header';
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Provider from "@/lib/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className='app'>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
