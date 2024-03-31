import { PRODUCTS } from "./Products"
import { ShopContext } from "./shop-context"
import { useContext } from "react"
import { CartItem } from "./CartItem"
import { useNavigate } from "react-router-dom"

export const Cart =()=>{

    const nav = useNavigate()

    const handleHome=()=>{
        nav('/home')
    }

    const {cartItem, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    return(
        <div className="cart">
            <div className="head">
                <h1 >Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItem[product.id]!==0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={handleHome}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    )
}