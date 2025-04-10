"use client"

import React, { useContext, useState } from 'react';
import { Heart, Minus, Plus, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import Footer from '../../_components/Footer';
import Header from '../../_components/header';
import { Product } from '../../_components/FeaturedProducts';
import { CartContext } from '../../../context/CartContext';
import { toast } from 'sonner';

function page() {
    const [quantity, setQuantity] = useState(1);

    const { setCart } = useContext(CartContext)

    const product: Product = {
        name: 'Organic Apple Juice',
        price: '29.99',
        image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?auto=format&fit=crop&q=80&w=200',
    }




    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const addToCart = (item: Product) => {
        try {
            setCart((prevCart: Product[]) => [...prevCart, item]);

            toast.success("Added to cart successfully", {
                id: "cart-toast"
            })
        } catch (error) {
            console.error(error)
            toast.error("An error occurred while adding item to cart", {
                id: "cart-toast"
            })
        }
        // console.log(cart);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Top Bar */}
            <Header />

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
                <div className="container mx-auto px-4">
                    <nav className="text-sm">
                        <ol className="flex items-center space-x-2">
                            <li><a href="#" className="text-gray-500 hover:text-green-600">Home</a></li>
                            <li><span className="text-gray-400 mx-2">/</span></li>
                            <li><a href="#" className="text-gray-500 hover:text-green-600">Shop</a></li>
                            <li><span className="text-gray-400 mx-2">/</span></li>
                            <li className="text-gray-900">{product.name}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Product Section */}
            <section className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt="Organic Honey"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                                    <img
                                        src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=200"
                                        alt={`Organic Honey view ${index + 1}`}
                                        className="w-full h-full object-cover hover:opacity-75 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Organic Raw Honey</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="text-gray-500">(24 Reviews)</span>
                        </div>
                        <p className="text-3xl font-bold text-green-600 mb-6">{product.price}</p>
                        <p className="text-gray-600 mb-6">
                            Our premium organic raw honey is sourced from sustainable apiaries, ensuring the highest quality and natural sweetness. Unprocessed and pure, this honey retains all its natural enzymes and beneficial properties.
                        </p>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="font-medium">Quantity:</span>
                            <div className="flex items-center border rounded-full">
                                <button
                                    onClick={decreaseQuantity}
                                    className="p-2 hover:text-green-600"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4">{quantity}</span>
                                <button
                                    onClick={increaseQuantity}
                                    className="p-2 hover:text-green-600"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="flex gap-4 mb-8">
                            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                            <button className="p-3 border rounded-full hover:text-green-600 hover:border-green-600 transition-colors">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Product Features */}
                        <div className="border-t pt-6 space-y-4">
                            <div className="flex items-center gap-4">
                                <Truck className="w-6 h-6 text-green-600" />
                                <div>
                                    <h4 className="font-medium">Free Shipping</h4>
                                    <p className="text-sm text-gray-500">On orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Shield className="w-6 h-6 text-green-600" />
                                <div>
                                    <h4 className="font-medium">Secure Payment</h4>
                                    <p className="text-sm text-gray-500">100% secure payment</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <RefreshCw className="w-6 h-6 text-green-600" />
                                <div>
                                    <h4 className="font-medium">Easy Returns</h4>
                                    <p className="text-sm text-gray-500">30 day return policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Description */}
            <section className="container mx-auto py-12 px-4">
                <div className="border-t pt-8">
                    <h2 className="text-2xl font-bold mb-6">Product Description</h2>
                    <div className="prose max-w-none">
                        <p className="mb-4">
                            Our organic raw honey is carefully harvested from sustainable apiaries located in pristine environments. The bees forage on wildflowers and organic flora, producing honey with unique flavors and beneficial properties.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>100% pure and unprocessed</li>
                            <li>Rich in natural enzymes and antioxidants</li>
                            <li>Sourced from certified organic apiaries</li>
                            <li>No artificial additives or preservatives</li>
                            <li>Glass jar packaging for optimal preservation</li>
                        </ul>
                        <h3 className="text-xl font-semibold mb-2">Usage:</h3>
                        <p>
                            Perfect for sweetening tea, coffee, or smoothies. Can be used in baking or as a natural sweetener in various recipes. Also great as a spread on toast or as a topping for yogurt and cereals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="container mx-auto py-12 px-4">
                <h2 className="text-2xl font-bold mb-8">Related Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {relatedProducts.map((product, index) => (
                        <div key={index} className="group">
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
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default page;

const relatedProducts = [
    { name: 'Organic Maple Syrup', price: '19.99', image: 'https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?auto=format&fit=crop&q=80&w=200' },
    { name: 'Raw Sugar', price: '12.99', image: 'https://images.unsplash.com/photo-1597831520711-4456c0b4c0e3?auto=format&fit=crop&q=80&w=200' },
    { name: 'Organic Agave', price: '15.99', image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=200' },
    { name: 'Date Syrup', price: '17.99', image: 'https://images.unsplash.com/photo-1591378603223-e15b45a81640?auto=format&fit=crop&q=80&w=200' },
];


