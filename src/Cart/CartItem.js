import { useContext } from "react";
import { ShopContext } from "./shop-context";

export const CartItem=(props)=>{
    const {id, title, price, img} = props.data;
    const {cartItem, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
    return(
        <div className="cartItem">
            <img alt="" src={img}></img>
            
            <div className="content">
            <h1>{title}</h1>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItem[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={()=>addToCart(id)}> + </button>
            </div>
            </div>
        </div>
    )
}