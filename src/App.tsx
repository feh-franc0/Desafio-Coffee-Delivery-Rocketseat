import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ShopCartContext } from "./contexts/ShopCartContext";
import { deliveryInfoContext } from "./contexts/ShopCartContext";
import { useState } from "react";

export function App() {
  const [shopCart, setShopCart] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    valorDaCompra: 0,
    FormaDePagamento: "",
  });

  return (
    <ShopCartContext.Provider value={{ shopCart, setShopCart }}>
      <deliveryInfoContext.Provider
        value={{ deliveryInfo, setDeliveryInfo }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </deliveryInfoContext.Provider>
    </ShopCartContext.Provider>
  );
}
