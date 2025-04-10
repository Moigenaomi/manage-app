"use client"

import { useContext } from "react";
import CategoryList from "./_components/categorylist";
import FeaturedProducts from "./_components/FeaturedProducts";
import Footer from "./_components/Footer";
import Header from "./_components/header";
import Hero from "./_components/Hero";
import OfferCard from "./_components/offercard";
import SearchBar from "./_components/searchbar";
import { CartContext } from "../context/CartContext"; 



//  const products = [
//   { name: "Orange", price: "$6.75", image: "/orange.png" },
//  { name: "Watermelon", price: "$9.27", image: "/watermelon.png" },
//  ];



export default function HomePage() {


  return (
    <div className="max-w-md md:container mx-auto bg-white p-4">
      <Header />
      {/* <SearchBar /> */}
      <Hero />
      <CategoryList />
      <OfferCard />
      <FeaturedProducts />
      <Footer />
      <div className="grid grid-cols-2 gap-4">
        {/* {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))} */}
      </div>
    </div>
  );
}
