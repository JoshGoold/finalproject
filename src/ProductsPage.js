import { PRODUCTS } from "./Cart/Products";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Footer from "./pages/Footer";
import { ShopContext } from "./Cart/shop-context";
import { CiShoppingCart } from "react-icons/ci";

import { FaHome } from "react-icons/fa";

function ProductsPage() {
  const backendUrl = `http://${process.env.BACKEND_SERVICE}:${process.env.BACKEND_PORT}`
  const { id } = useParams();
  const [showSidePanel, setShowSidePanel] = useState(true);
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
  const [username, setUsername] = useState("");

  const nav = useNavigate();

  const handleHome = () => {
    nav(`/home/${username}`);
  };
  const handleCart = () => {
    nav("/cart");
  };

  useEffect(() => {
    // Fetch the username from the server
    axios
      .get(backendUrl)
      .then((response) => {
        if (response.data.valid) {
          setUsername(response.data.username);
        } else {
          //if not logged into any account automatically redirects you to login
          nav("/login");
        }
      })
      .catch((error) => {
        console.error("Error fetching username:", error);
      });
  }, []);

  return (
    <div className="page">
      <div className="page-body">
        <div className="head fadeIn slideInLeft">
          <h1>
            {" "}
            {showSidePanel && (
              <button className="home-pp" onClick={handleHome}>
                <FaHome />
              </button>
            )}{" "}
          </h1>
          <ul>
            <li id="cart" onClick={handleCart}>
              {<CiShoppingCart />}
            </li>
          </ul>
        </div>
        <div className="content">
          {PRODUCTS.map((product) => (
            <>
              {product.id == id && (
                <div key={product.id} className="flex">
                  <span>
                    <img className="flex-img" src={product.img}></img>
                    <h1 className="title">{product.title}</h1>
                  </span>
                  <p className="desc">{product.desc}</p>
                  <p className="price">${product.price} CAD</p>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="cartBtn"
                  >
                    Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                  </button>
                </div>
              )}
            </>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ProductsPage;
