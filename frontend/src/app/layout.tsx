import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Exchange",
  description: "A platform to exchange cryptocurrencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* height is 50px */}
        <Navbar />
        {/* ensures height is h-screen - 50px */}
        <div className="h-screen -mt-50">
          {children}
        </div>
        
      </body>
    </html>
  );
}
