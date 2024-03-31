import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./AccountSetup/Login";
import Register from "./AccountSetup/Register";
import {Cart}  from "./Cart/Cart";
import { ShopContextProvider } from "./Cart/shop-context";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
    <Routes>
      <Route index element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  );
}

export default App;
