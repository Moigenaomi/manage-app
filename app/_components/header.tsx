"use client";
import {Heart, Search, SearchIcon, ShoppingCart} from "lucide-react";
import React, { useContext } from "react";
import {CartContext} from "../../context/CartContext";

export const Header = ()=> {
 const {cartItems} = useContext(CartContext);
    return (
      <>
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex justify-between">
        <span>Black friday save upto 30%</span>
            <div className="flex items-center space-x-2">
              <span>KES</span>
            </div>
        </div>
      </div>

      <header className=" bg-black text-white py-4 px-2 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Gromart!</h2>
          <p className="text-gray-500">What would you like for today?</p>
          <SearchIcon/>
        </div>

          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6" />
            <Search className=" absolute right-3 top-2.5 h-6 w-6 text-gray-400" />
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute right-3 top-2.5 w-5 h-5">items in cart: {cartItems?.length?? 0}</span>
          </div>
      </header>

          <div className="flex items-center space-x-2">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>

          <div className="flex items-center space-x-2">
            <span>My Account</span>
            <span>Cart</span>
          </div>

          <div className="flex items-center space-x-2">
            <span>Help</span>
            <span>FAQs</span>
          </div>

        
        <button>Log In</button>
  </>
    );
  };
  