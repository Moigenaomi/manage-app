"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexProvider,  ConvexReactClient } from "convex/react";
import {CartContext, CartItem} from "../context/CartContext";
import { useState } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>  {/* pass cart state to context provider */}
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <ConvexProvider client ={convex}>
        {children}
        </ConvexProvider>
      </body>
    </html>
    </CartContext.Provider>
  );
}
