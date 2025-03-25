import Link from "next/link";
export default function Products() {
  const products = [
    { id: "1", name: "Apples" },
    { id: "2", name: "Bananas" },
    { id: "3", name: "Milk" },
  ];

    return (
      <div>
        <h1>Our Products</h1>
        <ul>
        {products.map((product)=> (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
        ))}
        </ul>
      </div>
    );
  }
  