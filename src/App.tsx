import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ShopCartContext, DeliveryInfoContext, Coffee, DeliveryInfo } from "./contexts/ShopCartContext";
import { useState } from "react";

export function App() {
  const [shopCart, setShopCart] = useState<Coffee[]>([
    {
      id: "1",
      CoffeeImage: "./src/public/ExpressoTradicional.png",
      CoffeeType: "Tradicional",
      CoffeeTitle: "Expresso   Tradicional",
      CoffeeDescription:
        "O tradicional café feito com água quente e grãos moídos",
      CoffeePrice: "13,20",
      CoffeAmout: 0,
    },
    {
      id: "2",
      CoffeeImage: "./src/public/ExpressoAmericano.png",
      CoffeeType: "Tradicional",
      CoffeeTitle: "Expresso Americano",
      CoffeeDescription: "Expresso diluído, menos intenso que o tradicional",
      CoffeePrice: "18,50",
      CoffeAmout: 0,
    },
    {
      id: "3",
      CoffeeImage: "./src/public/ExpressoCremoso.png",
      CoffeeType: "Tradicional",
      CoffeeTitle: "Expresso Cremoso",
      CoffeeDescription: "Café expresso tradicional com espuma cremosa",
      CoffeePrice: "7,32",
      CoffeAmout: 0,
    },
    {
      id: "4",
      CoffeeImage: "./src/public/ExpressoGelado.png",
      CoffeeType: "Tradicional, gelado",
      CoffeeTitle: "Expresso Gelado",
      CoffeeDescription: "Bebida preparada com café expresso e cubos de gelo",
      CoffeePrice: "7,98",
      CoffeAmout: 0,
    },
    {
      id: "5",
      CoffeeImage: "./src/public/CafecomLeite.png",
      CoffeeType: "Tradicional, com leite",
      CoffeeTitle: "Café com Leite",
      CoffeeDescription:
        "Meio a meio de expresso tradicional com leite vaporizado",
      CoffeePrice: "21,23",
      CoffeAmout: 0,
    },
    {
      id: "6",
      CoffeeImage: "./src/public/Latte.png",
      CoffeeType: "Tradicional, com leite",
      CoffeeTitle: "Latte",
      CoffeeDescription:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      CoffeePrice: "10,92",
      CoffeAmout: 0,
    },
    {
      id: "7",
      CoffeeImage: "./src/public/Capuccino.png",
      CoffeeType: "Tradicional, com leite",
      CoffeeTitle: "Capuccino",
      CoffeeDescription:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      CoffeePrice: "11,21",
      CoffeAmout: 0,
    },
    {
      id: "8",
      CoffeeImage: "./src/public/Macchiato.png",
      CoffeeType: "Tradicional, com leite",
      CoffeeTitle: "Macchiato",
      CoffeeDescription:
        "Café expresso misturado com um pouco de leite quente e espuma",
      CoffeePrice: "25,90",
      CoffeAmout: 0,
    },
    {
      id: "9",
      CoffeeImage: "./src/public/Mocaccino.png",
      CoffeeType: "Tradicional, com leite",
      CoffeeTitle: "Mocaccino",
      CoffeeDescription:
        "Café expresso com calda de chocolate, pouco leite e espuma",
      CoffeePrice: "21,30",
      CoffeAmout: 0,
    },
    {
      id: "10",
      CoffeeImage: "./src/public/ChocolateQuente.png",
      CoffeeType: "Tradicional, com leite",
      CoffeeTitle: "Chocolate Quente",
      CoffeeDescription:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      CoffeePrice: "11,32",
      CoffeAmout: 0,
    },
    {
      id: "11",
      CoffeeImage: "./src/public/Cubano.png",
      CoffeeType: "especial, alcoólico, gelado",
      CoffeeTitle: "Cubano",
      CoffeeDescription:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      CoffeePrice: "31,21",
      CoffeAmout: 0,
    },
    {
      id: "12",
      CoffeeImage: "./src/public/Havaiano.png",
      CoffeeType: "especial",
      CoffeeTitle: "Havaiano",
      CoffeeDescription: "Bebida adocicada preparada com café e leite de coco",
      CoffeePrice: "12,20",
      CoffeAmout: 0,
    },
    {
      id: "13",
      CoffeeImage: "./src/public/Arabe.png",
      CoffeeType: "especial",
      CoffeeTitle: "Árabe",
      CoffeeDescription:
        "Bebida preparada com grãos de café árabe e especiarias",
      CoffeePrice: "3,90",
      CoffeAmout: 0,
    },
    {
      id: "14",
      CoffeeImage: "./src/public/Irlandes.png",
      CoffeeType: "especial, alcoólico",
      CoffeeTitle: "Irlandês",
      CoffeeDescription:
        "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      CoffeePrice: "19,90",
      CoffeAmout: 0,
    },
  ]);

  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
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
      <DeliveryInfoContext.Provider value={{ deliveryInfo, setDeliveryInfo }}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DeliveryInfoContext.Provider>
    </ShopCartContext.Provider>
  );
}
