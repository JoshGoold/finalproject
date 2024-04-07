import { useContext, useState } from "react";
import { ShopContext } from "./shop-context";
import {useNavigate} from 'react-router-dom'

function Product(props) {
    const { id, title, price, img, desc } = props.data;
    const { addToCart, cartItem } = useContext(ShopContext);
    const cartItemAmount = cartItem[id];

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageDescription = (img) => {
        setSelectedImage(img);
    };

    const handleCloseDescription = (img) => {
        setSelectedImage(null);
    };

    const nav = useNavigate("");

    const handleItemPage=()=>{
        nav(`/shop/${id}`)
    }

    return (
        <div onClick={handleItemPage} className="item">
            <div className="image-container"  style={{ position: 'relative', display: 'inline-block' }}>
                <img alt={title} src={img} onClick={() => handleImageDescription(img)}></img>
                {selectedImage === img && (
                    <div style={{ position: 'absolute', top: 0, left: 0, background: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px' }}>
                        <p style={{ color: 'black' }}>{desc}</p>
                        <button onClick={handleCloseDescription} style={{color: 'black'}}>Close</button>
                    </div>
                )}
            </div>
            <h1>{title}</h1>
            <p>${price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>

        </div>
    );
}

export default Product;