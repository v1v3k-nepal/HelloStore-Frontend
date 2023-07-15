import { createContext, useEffect, useState } from "react";
import React from 'react';
import { useLocation } from "react-router-dom";

export const Context = createContext();


const AppContext = ({children}) => {

  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location])

  useEffect(()=>{
    let subtotal = 0;
    cartItems.map((item)=>{
      (subtotal += (item.attributes.price)*(item.attributes.quantity))
    })

    let count = 0;
    cartItems.map((item)=>{
      (count += item.attributes.quantity)
    })

    setCartSubTotal(subtotal);
    setCartCount(count);
  },[cartItems])

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items?.findIndex((p)=> p.id === product?.id);
    if(index !== -1){ //Products already exists in cart
      items[index].attributes.quantity += quantity;
    }
    else{// Product does not exist already in cart 
      product.attributes.quantity = quantity;
      items = [...items, product]
    } 
    setCartItems(items);
  }

  const handleRemoveFromCart = (product) =>{
    let items = [...cartItems];
    items = items.filter((p)=> p.id !== product.id);
    setCartItems(items);
  }

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p)=> p.id === product.id);
    if(type=="increment"){
      items[index].attributes.quantity += 1;
    }
    else if(type=="decrement"){
      if(items[index].attributes.quantity ===1) return(1);
      items[index].attributes.quantity -=1;
    }
    setCartItems(items);
  }

  return (
    <Context.Provider 
    value={{
      products, setProducts,
      categories, setCategories,
      showCart, setShowCart,
      cartItems, setCartItems,
      cartCount, setCartCount,
      cartSubTotal, setCartSubTotal,
      handleAddToCart,
      handleRemoveFromCart,
      handleCartProductQuantity
    }}>
        {children}
    </Context.Provider>
  );
}

export default AppContext;
