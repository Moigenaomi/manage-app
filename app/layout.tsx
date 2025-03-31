"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CartContext } from "../context/CartContext";
import { useState, ReactNode } from "react";

declare const process: {
  env: {
    NEXT_PUBLIC_CONVEX_URL: string;
  };
};

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ConvexProvider client={convex}>{children}</ConvexProvider>
        </body>
      </html>
    </CartContext.Provider>
  );
}
