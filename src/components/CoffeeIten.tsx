import { ActionsBuyTest, BuyTest, CoffeeImgTest, CounterBuy, DescriptionCardTest, IconButtonBuy, NameCardTest, TagDescTradicional, TagOne, TagsCardTest, TextNumberCount, TextPriceBuyTest } from "./CoffeeList.styles";


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


export function CoffeeItens() {
  return (
    <>
      <CoffeeImgTest>
        <img src={ExpressoTradicional} alt="" />
      </CoffeeImgTest>
      <TagsCardTest >
        <TagOne>
          <TagDescTradicional>Tradicional</TagDescTradicional>
        </TagOne>
      </TagsCardTest>
      <NameCardTest>
        Expresso Tradicional
      </NameCardTest>
      <DescriptionCardTest>
        O tradicional café feito com água quente e grãos moídos
      </DescriptionCardTest>
      <BuyTest> 
        <TextPriceBuyTest>R$ 9,90</TextPriceBuyTest> 
        <ActionsBuyTest>
          <CounterBuy>
            <div> <img src={iconMenos} alt="" /> </div>
            <TextNumberCount> 1 </TextNumberCount>
            <div> <img src={iconeMais} alt="" /> </div>
          </CounterBuy>
          <IconButtonBuy>
            <img src={Vector} alt="" />
          </IconButtonBuy>
        </ActionsBuyTest>
      </BuyTest>
    </>
  )
}