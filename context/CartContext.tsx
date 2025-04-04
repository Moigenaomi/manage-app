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
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCartItems: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCartItems: () => void;
 };
//  create context
 export const CartContext = createContext<CartContextType| undefined>(undefined);

//  create provide component
 export const CartProvider =({children}: {children:ReactNode})=> {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCartItems = (item: CartItem) => {
    setCartItems([...cartItems, item])
  };
  const removeFromCart = (itemToRemove: CartItem) => {
    setCartItems(cartItems.filter((item: CartItem) => itemToRemove.id!== item.id))
  };
  const clearCartItems = () => {
    setCartItems([])
  };
 return (
  <CartContext.Provider value={{cartItems, setCartItems, addToCartItems, removeFromCart, clearCartItems}}>
    {children}
  </CartContext.Provider>
)};

 export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
  
  

  
  

