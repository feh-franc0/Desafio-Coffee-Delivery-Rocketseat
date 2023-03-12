import { CoffeeCard1, CoffeeCard2, CoffeeCard3, CoffeeCard4, CoffeeCard5, CoffeeCard6, CoffeeCard7, CoffeeCard8, CoffeeCard9, CoffeeCard10, CoffeeCard11, CoffeeCard12, CoffeeCard13, CoffeeCard14, ContainerCoffeeList, FilterCoffeeList, ListCoffeeItens, Tag1, Tag2, Tag3, Tag4, Tag5, TitleCoffeeList, TitleTag1, TitleTag2, TitleTag3, TitleTag4, TitleTag5, Buy, TextPriceBuy, ActionsBuy, CounterBuy, IconButtonBuy, TextNumberCount, DescriptionCard, NameCard, TagsCard, TagOne, TagDescTradicional, CoffeeImg, TagTwo, TagsCardTwo, TagDescTradicionalTwo, TagDescTradicionalThree, TagThree, TagEspecial, TagDescTradicionalEspecial, TagTwoAlcoolico, TagThreeGelado, GridListCoffeeItens, CoffeeIten, CoffeeImgTest, TagsCardTest, NameCardTest, DescriptionCardTest, BuyTest, TextPriceBuyTest, ActionsBuyTest } from "./CoffeeList.styles";

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

interface PropsCoffee  {
  CoffeeImage: string
  CoffeeType: string
  CoffeeTitle: string
  CoffeeDescription: string
  CoffeePrice: string
}

export function CoffeeItem(props:PropsCoffee) {
  return (
    // <p>ola</p>

    
  <CoffeeIten>
  <CoffeeImgTest>
    <img src={props.CoffeeImage} alt="" />
  </CoffeeImgTest>
  <TagsCardTest>
    <TagOne>
      <TagDescTradicional>{props.CoffeeType}</TagDescTradicional>
    </TagOne>
  </TagsCardTest>
  <NameCardTest>
    {props.CoffeeTitle}
  </NameCardTest>
  <DescriptionCardTest>
    {props.CoffeeDescription}
  </DescriptionCardTest>
  <BuyTest> 
    <TextPriceBuyTest>R$ {props.CoffeePrice}</TextPriceBuyTest> 
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
  </CoffeeIten>


  )
}