import React from "react";
import Image from "next/image";
export function Hero() {
    <section className="relative h-[500px] bg-gray-300">
        <div className=" container mx-auto px-4 py-16 flex flex-col md:flex-row items-center h-full">
      <div className="max-w-md w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900">Welcome to My Grocery Shop</h2>
        <p className="mt-4 text-lg text-gray-600">Discover our wide range of fruits and vegetables at the best prices</p>
        <button className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
      </div>
        <div className="right-0 top-0 h-full">
            <Image src="/hero.jpg" alt="Hero" className="object-cover w-full h-full rounded-lg" />
        </div> 
         </div>
     </section>
}