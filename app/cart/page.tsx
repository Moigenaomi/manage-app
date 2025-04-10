"use client"

import React, { useContext, useState } from 'react';
import { ShoppingCart, Search, Heart, Phone, Mail, MapPin, Minus, Plus, X, ArrowRight, RefreshCw } from 'lucide-react';
import Header from '../_components/header';
import Footer from '../_components/Footer';
import { CartContext } from '../../context/CartContext';
import Link from 'next/link';

function Cart() {
  // const [cartItems, setCartItems] = useState(initialCartItems);
  const { cart, setCart } = useContext(CartContext)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(items => items.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="text-gray-500 hover:text-green-600">Home</a></li>
              <li><span className="text-gray-400 mx-2">/</span></li>
              <li className="text-gray-900">Shopping Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Cart Section */}
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item,index) => (
              <div key={index} className="flex gap-4 bg-white p-4 rounded-lg border">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{item.variant}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border rounded-full">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-green-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-green-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}

            {cart.length === 0 && (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-4">Add some products to your cart and start shopping!</p>
                <Link
                  href="/products"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <RefreshCw className="w-5 h-5" />
                  <span>30 days free returns</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// const initialCartItems = [
//   {
//     id: 1,
//     name: 'Organic Raw Honey',
//     variant: '500g Glass Jar',
//     price: 24.99,
//     quantity: 1,
//     image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=200',
//   },
//   {
//     id: 2,
//     name: 'Organic Maple Syrup',
//     variant: 'Grade A Dark',
//     price: 19.99,
//     quantity: 2,
//     image: 'https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?auto=format&fit=crop&q=80&w=200',
//   },
//   {
//     id: 3,
//     name: 'Raw Sugar',
//     variant: '1kg Pack',
//     price: 12.99,
//     quantity: 1,
//     image: 'https://images.unsplash.com/photo-1597831520711-4456c0b4c0e3?auto=format&fit=crop&q=80&w=200',
//   },
// ];

export default Cart;