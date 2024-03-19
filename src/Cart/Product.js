import { useContext } from "react";
import { ShopContext } from "./shop-context";

function Product(props){
    const {id, title, price, img} = props.data;
    const {addToCart, cartItem} = useContext(ShopContext)

    const cartItemAmount = cartItem[id]
    return(
        <div className="item">
            <img alt="" src={img}></img>
            <h1>{title}</h1>
            <p>${price}</p>
            <button onClick={()=> addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    );
}
export default Product