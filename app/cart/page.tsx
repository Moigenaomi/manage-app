
"useState";

import React from "react";
import { ShoppingCart, Search, Heart, Phone, Mail, MapPin } from "lucide-react";
import  {Header} from "../_components/header";
// import {Footer}  from "../_components/Footer";
// import { useCartContext } from "../../context/CartContext";
import { CartItem, useCartContext} from "../../context/CartContext";

export default function Cart() {
    const {cartItems, setCartItems} = useCartContext();

    const updateQuantity = (id: number, newQuantity: number) => {
        const updatedCartItems = cartItems.map((item: CartItem) => {
            if(item.id === id) {
                return {...item, quantity: newQuantity};
            }
            return item;
        });
        setCartItems(updatedCartItems);
        };
        
    const removeItem = (id: number) => {
        const updatedCartItems = cartItems.filter((item: CartItem) => item.id!== id);
        setCartItems(updatedCartItems);
    };
    return(
        <div className="container mx-auto px-4">
            <button onClick={()=> updateQuantity(1,5)}>updateQuantity</button>
            <button onClick = {() =>removeItem(1)}>Remove</button>
        </div>
    );
    const totalPrice: number= cartItems.reduce((total:number, item: CartItem) => total + item.price *( item.quantity|| 1), 0)||0;
    const shipping: number= 0;
    const total: number = totalPrice + shipping;
    return(
        <div className="min h-screen bg-white">
            <Header />
            <div className="flex justify-between items-center p-4">
                <div className="container mx-auto px-4">
                    <nav className="text-sm">
                        <ol className="flex items-center gap-4">
                            <li><Search size={24} className="text-2xl" /></li>
                            <li><Heart size={24} className="text-2xl" /></li>
                            <li><Phone size={24} className="text-2xl" /></li>
                            <li><Mail size={24} className="text-2xl" /></li>
                            <li><MapPin size={24} className="text-2xl" /></li>
                        </ol>
                    </nav>
                </div>
                <ShoppingCart size={24} className="text-2xl" />
                <p>Cart ({cartItems.length})</p>
                <p>Total Price : ${total.toFixed(2)}</p>
            </div>

            <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Your cart</h1>
            <p>Here are items in your cart</p>
            </div>  
        </div>
    );
};
