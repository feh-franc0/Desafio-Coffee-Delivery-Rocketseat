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


import { useContext, useState } from "react";
import { ShopCartContext } from "../contexts/ShopCartContext";

import Vector from "../public/Vector.svg";
import iconMenos from "../public/iconMenos.svg";
import iconeMais from "../public/iconeMais.svg";

import ExpressoTradicional from "../public/ExpressoTradicional.png";
import CafecomLeite from "../public/CafecomLeite.png";
import Mocaccino from "../public/Mocaccino.png";
import Arabe from "../public/Arabe.png";
import ExpressoAmericano from "../public/ExpressoAmericano.png";
import Latte from "../public/Latte.png";
import ChocolateQuente from "../public/ChocolateQuente.png";
import Irlandes from "../public/Irlandes.png";
import ExpressoCremoso from "../public/ExpressoCremoso.png";
import Capuccino from "../public/Capuccino.png";
import Cubano from "../public/Cubano.png";
import ExpressoGelado from "../public/ExpressoGelado.png";
import Macchiato from "../public/Macchiato.png";
import Havaiano from "../public/Havaiano.png";
// import { CoffeeItem } from "./CoffeeItem";

interface PropsCoffee {
  CoffeeId: string;
  CoffeeImage: string;
  CoffeeType: string;
  CoffeeTitle: string;
  CoffeeDescription: string;
  CoffeePrice: string;
  CoffeAmout: string;
}

export function CoffeeItem(props: PropsCoffee) {
  const { shopCart, setShopCart }: any = useContext(ShopCartContext);
  const { listCoffee, setListCoffee}: any = useState([])

  const handleClick = (id: any) => {
    console.log("clicou no btn -> enviar", id);
    // event.preventDefault();
    // const idItem = event.target
    // console.log(idItem);
    //   ? event.target.id
    //   : event.target.parentNode.id;

    // const newObj = {
    //   id: idItem,
    //   amount: 1,
    //   price: "15,00",
    // };
    // setShopCart([...shopCart, newObj]);
  };

  const add = (id: any) => {
    console.log("clicou no btn -> add", id);
  };

  const subtract = (id: any) => {
    console.log("clicou no btn -> subtract", id);
  };

  //TODO => {'number': '2', 'id': '12312'}

  return (
    <CoffeeIten>
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
      <BuyTest id={props.CoffeeId}>
        <TextPriceBuyTest>R$ {props.CoffeePrice}</TextPriceBuyTest>
        <ActionsBuyTest>
            <CounterBuy>
              <button onClick={() => subtract(props.CoffeeId)}>
                <img src={iconMenos} alt="" />
              </button>
            <TextNumberCount> {props.CoffeAmout} </TextNumberCount>
            <button onClick={() => add(props.CoffeeId)}>
              <img src={iconeMais} alt="" />
            </button>
          </CounterBuy>
          <IconButtonBuy onClick={() => handleClick(props.CoffeeId)}>
            <img src={Vector} alt="" />
          </IconButtonBuy>
        </ActionsBuyTest>
      </BuyTest>
    </CoffeeIten>
  );
}
