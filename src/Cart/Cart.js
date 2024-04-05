import { PRODUCTS } from "./Products"
import { ShopContext } from "./shop-context"
import { useContext } from "react"
import { CartItem } from "./CartItem"
import { useNavigate } from "react-router-dom"
import CurrencyExchange from "./CurrencyExchange"

export const Cart = () => {

    const nav = useNavigate()

    const handleHome = () => {
        nav('/home')
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
                        <button>Checkout</button>
                    </div>
                </div>
            )}
        </CurrencyExchange>
    )
}