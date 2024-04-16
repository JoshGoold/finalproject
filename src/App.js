import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./AccountSetup/Login";
import Register from "./AccountSetup/Register";
import ProductsPage from "./Cart/ProductsPage.js";
import Checkout from "./pages/Checkout";
import {Cart}  from "./Cart/Cart";
import { ShopContextProvider } from "./Cart/shop-context";


function App() {
  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
    <Routes>
      <Route index element={<Register/>}/>
      <Route path="/home/:user" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart/:user" element={<Cart/>}/>
      <Route path="/shop/:id" element={<ProductsPage/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  );
}

export default App;
