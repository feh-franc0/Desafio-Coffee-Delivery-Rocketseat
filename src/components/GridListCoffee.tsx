import { GridListCoffeeItens } from "./CoffeeList.styles";

import { useContext, useState } from "react";
import { ShopCartContext } from "../contexts/ShopCartContext";

import Vector from "../public/Vector.svg";
import iconMenos from "../public/iconMenos.svg";
import iconeMais from "../public/iconeMais.svg";
import { CoffeeItem } from "./CoffeeItem";

import {
  CounterBuy,
  IconButtonBuy,
  TextNumberCount,
  TagOne,
  TagDescTradicional,
  CoffeeIten,
  CoffeeImgTest,
  TagsCardTest,
  NameCardTest,
  DescriptionCardTest,
  BuyTest,
  TextPriceBuyTest,
  ActionsBuyTest,
} from "./CoffeeList.styles";

export interface PropsCoffee {
  id: string;
  CoffeeImage: string;
  CoffeeType: string;
  CoffeeTitle: string;
  CoffeeDescription: string;
  CoffeePrice: string;
  CoffeAmout: number;
}

export function GridListCoffee() {
  const { shopCart, setShopCart }: any = useContext(ShopCartContext);
  const [listCoffee, setListCoffee] = useState<PropsCoffee[]>([
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
  console.log("shopCart: ", shopCart);

  const handleClick = (id: string) => {
    // console.log("clicou no btn -> enviar", id);
    const index = listCoffee.findIndex((objeto) => objeto.id === id);
    const novoArray = [...listCoffee];
    const objCart = novoArray[index];

    const existingItem = shopCart.find((item: any) => item.id === objCart.id);
    if (existingItem) {
      setShopCart((prevCart: any) =>
        prevCart.map((item: any) => {
          if (item.id === objCart.id) {
            return {
              ...item,
              // CoffeAmout: objCart.CoffeAmout,
              CoffeAmout: item.CoffeAmout + objCart.CoffeAmout,
            };
          }
          return item;
        })
      );
    } else {
      setShopCart((prevCart: any) => [...prevCart, objCart]);
    }
  };

  const addCart = (id: string) => {
    const index = listCoffee.findIndex((objeto) => objeto.id === id);
    if (index !== -1) {
      const novoArray = [...listCoffee];
      novoArray[index].CoffeAmout++;
      setListCoffee(novoArray);
    }
  };

  const subtractCart = (id: string) => {
    const index = listCoffee.findIndex((objeto) => objeto.id === id);
    if (index !== -1) {
      const novoArray = [...listCoffee];
      novoArray[index].CoffeAmout--;
      setListCoffee(novoArray);
    }
  };

  return (
    <GridListCoffeeItens>
      {listCoffee.map((props: any) => (
        <CoffeeIten key={props.id}>
          <CoffeeImgTest>
            <img src={props.CoffeeImage} alt="" />
          </CoffeeImgTest>
          <TagsCardTest>
            <TagOne>
              <TagDescTradicional>{props.CoffeeType}</TagDescTradicional>
            </TagOne>
          </TagsCardTest>
          <NameCardTest>{props.CoffeeTitle}</NameCardTest>
          <DescriptionCardTest>{props.CoffeeDescription}</DescriptionCardTest>
          <BuyTest id={props.id}>
            <TextPriceBuyTest>R$ {props.CoffeePrice}</TextPriceBuyTest>
            <ActionsBuyTest>
              <CounterBuy>
                <button onClick={() => subtractCart(props.id)}>
                  <img src={iconMenos} alt="" />
                </button>
                <TextNumberCount> {props.CoffeAmout} </TextNumberCount>
                <button onClick={() => addCart(props.id)}>
                  <img src={iconeMais} alt="" />
                </button>
              </CounterBuy>
              <IconButtonBuy onClick={() => handleClick(props.id)}>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuyTest>
          </BuyTest>
        </CoffeeIten>
      ))}
    </GridListCoffeeItens>
  );
}
