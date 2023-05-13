import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ShopCartContext } from "./contexts/ShopCartContext";
import { useState } from "react";

export function App() {
  const [shopCart, setShopCart] = useState([])
  return (
    <ShopCartContext.Provider value={{shopCart, setShopCart}}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ShopCartContext.Provider>
  );
}
