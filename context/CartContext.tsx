import React, {createContext, useState, useContext, ReactNode} from 'react';

 export type CartItem= {
  id: number,
  name: string,
  price: number,
  quantity: number,
 }
//  define context
 export type CartContextType = {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
 };
//  create context
 export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
 });
//  create provide component
 export const CartProvider =({children}: {children:ReactNode})=> {
  const [CartItems, setCartItems] = useState(<any[]>([]));
 }
 
 export const useCartContext = () => useContext(CartContext);

  const [products, setProducts] = useState([
    {id: 1, name: 'Apple', price: 1.5},
    {id: 2, name: 'Banana', price: 0.8},
    {id: 3, name: 'Orange', price: 1.2},
  ]);
  const addToCart = (item) => {
    setCart([...cart, product])
  };
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id!== itemId))
  };
  const clearCart = () => {
    setCart([])
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
  
}

