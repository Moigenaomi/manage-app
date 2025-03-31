import React from 'react'


const products = [
    { name: 'Organic Apple Juice', price: '29.99', image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?auto=format&fit=crop&q=80&w=200' },
    { name: 'Fresh Vegetables', price: '19.99', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=200' },
    { name: 'Organic Honey', price: '24.99', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=200' },
    { name: 'Fresh Fruits', price: '15.99', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=200' },
    { name: 'Organic Tea', price: '9.99', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=200' },
  ];

function FeaturedProducts() {
    return (
        <section className="container mx-auto py-16 px-4" >
            <h3 className="text-2xl font-bold text-center mb-12">Featured Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {products.map((product) => (
                    <div key={product.name} className="group">
                        <div className="bg-gray-100 rounded-lg p-4 mb-4 relative">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
                            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                Add to Cart
                            </button>
                        </div>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-green-600 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default FeaturedProducts