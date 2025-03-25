interface ProductPageProps {
    params: { id: string };
  }
  
  export default function ProductPage({ params }: ProductPageProps) {
    return (
      <div>
        <h1>Product ID: {params.id}</h1>
        <p>Details about the product...</p>
      </div>
    );
  }
  