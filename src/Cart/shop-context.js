import React, { createContext } from "react";
import { PRODUCTS } from "./Products";
import { useState } from "react";

export const ShopContext = createContext(null);

//this creates an object for each of the products
//we use functions below to modify the value of the index positions of the
//products this is the basic behaviour behind our shopping cart functionailty
const getDefaultCart =() =>{
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    
    return cart;
}

export const ShopContextProvider=(props)=>{
    const [cartItem, setCartItem] = useState(getDefaultCart());


    //function takes in the id of product added to cart, it then uses the cart mapping
    //of all the products finds its placement by its id and increases it to one
    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItem((prev)=>({...prev, [itemId]: newAmount}))
    }
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItem){
            if (cartItem[item]>0){
                let itemInfo = PRODUCTS.find((product)=>product.id===Number(item));
                totalAmount = totalAmount + cartItem[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
    //these are the functions provided to all child components
    const contextValue = {cartItem, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
    return(
        //this uses composotion to pass its functions and data to all child components using contextValue
        //within app anything wrapped inside this container will have access to its functions
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
