import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./AccountSetup/Login";
import Register from "./AccountSetup/Register";
import ProductsPage from "./ProductsPage";
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
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/shop/:id" element={<ProductsPage/>}/>
    </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  );
}

export default App;
