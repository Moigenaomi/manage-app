"use client"

import { Heart, Search, SearchIcon, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {

  const router = useRouter();


  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return null;
  }

  const { cart } = cartContext;


  return (
    <>
      {
        // Get discounts on friday
        new Date().getUTCDay() === 5 && (
          <div className="bg-black text-white py-2 px-4">
            <div className="container mx-auto flex justify-between items-center text-sm">

              <span>Black Friday. Save up to 50%</span>

              <div className="flex gap-4">
                <span>KES</span>
                <span>Sign In</span>
              </div>
            </div>
          </div>
        )

      }


      <header className="container mx-auto py-4 px-4 text-black sticky top-0 z-10 backdrop-blur-md rounded-sm shadow shadow-gray-400 bg-white/80">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">ekommart</h1>
          <div className="flex items-center gap-6">
            <SearchIcon />
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search products..."
                className="pl-4 pr-10 py-2 border rounded-full w-64"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex gap-4">
              <Heart className="w-6 h-6" />
              <div className="relative">
                <div className="" onClick={() => router.push("/cart")}>
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart && cart?.length || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex flex-wrap gap-8">
            <Link href={"/"}><li className="hover:text-green-600 cursor-pointer">Home</li></Link>
            {/* <li className="hover:text-green-600 cursor-pointer">About</li> */}
            <Link href={"/products"}> <li className="hover:text-green-600 cursor-pointer">Shop</li></Link>
            <li className="hover:text-green-600 cursor-pointer">Admin</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
