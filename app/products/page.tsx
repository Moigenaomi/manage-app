import Link from "next/link";

// Define the Product type
type Product = {
  id: string;
  name: string;
};

export default function Products() {
  const products: Product[] = [
    { id: "1", name: "Organic Apple Juice" },
    { id: "2", name: "Fresh Vegetables" },
    { id: "3", name: "Organic Honey" },
    { id: "4", name: "Fresh Fruits" },
    { id: "5", name: "Organic Tea" },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border-b pb-4">
            <Link
              href={`/products/${product.id}`}
              className="text-xl font-semibold text-green-600 hover:text-green-800"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
