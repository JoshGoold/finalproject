import { PRODUCTS } from "./Products"
import { ShopContext } from "./shop-context"
import { useContext, useEffect, useState } from "react"
import  axios  from "axios"
import { CartItem } from "./CartItem"
import { useNavigate, useParams } from "react-router-dom"
import CurrencyExchange from "./CurrencyExchange"

export const Cart = (props) => {

    const nav = useNavigate()
    const {user} = useParams();
    
    // useEffect(() => {
    //     // Fetch the username from the server
    //     axios.get("/api")
    //         .then(response => {
    //             if (response.data.valid) {
    //                 setUsername(response.data.username)
    //             } else {
    //                 //if not logged into any account automatically redirects you to login
    //                 nav("/login");
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error fetching username:', error);
    //         });
    // }, []);

    const handleHome = () => {
        nav(`/home/${user}`)
    }
    const handleCheckout=()=>{
        nav(`/checkout`);
    }

    const { cartItem, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();

    return (
        <CurrencyExchange>
            {(exchangeRates) => (
                <div className="cart">
                    <div className="head">
                        <h1 >Your Cart Items</h1>
                    </div>
                    <div className="cartItems">
                        {PRODUCTS.map((product) => {
                            if (cartItem[product.id] !== 0) {
                                return <CartItem data={product} />
                            }
                        })}
                    </div>
                    <div className="checkout">
                        <p>Subtotal: ${totalAmount}</p>
                        <p>
                            (equivalent to USD{" "}
                            {exchangeRates && (totalAmount * exchangeRates).toFixed(2)})
                        </p>
                        <button onClick={handleHome}>Continue Shopping</button>
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            )}
        </CurrencyExchange>
    )
}