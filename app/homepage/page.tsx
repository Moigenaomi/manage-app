import CategoryList from "../components/categorylist";
import Header from "../components/header";
import OfferCard from "../components/offercard";
import SearchBar from "../components/searchbar";



//  const products = [
//   { name: "Orange", price: "$6.75", image: "/orange.png" },
//  { name: "Watermelon", price: "$9.27", image: "/watermelon.png" },
//  ];

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto bg-white p-4">
      <Header />
      <SearchBar />
      <CategoryList />
      <OfferCard />
      <div className="grid grid-cols-2 gap-4">
        {/* {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))} */}
      </div>
    </div>
  );
}
