import { ContainerIntro, BackgroundContainer, TitleBlock, Title, Paragraph, ImageCoffee, Items, BlockImageItem1, Item1, Item2, Item3, Item4, BlockImageItem2, BlockImageItem3, BlockImageItem4, ParagraphItem } from "./Intro.styles";
import imageItem1 from "../../public/item1.svg";
import imageItem2 from "../../public/item2.svg";
import imageItem3 from "../../public/item3.svg";
import imageItem4 from "../../public/item4.svg";

export function Intro () {
  return (
    <ContainerIntro>
      <TitleBlock>
        <Title>
          Encontre o café perfeito para qualquer hora do dia
        </Title>
        <Paragraph>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </Paragraph>
      </TitleBlock>

      <Items>
        <Item1>
          <BlockImageItem1>
            <img src={imageItem1} alt="" />
          </BlockImageItem1>
            <ParagraphItem>Compra simples e segura</ParagraphItem>
        </Item1>

        <Item2>
          <BlockImageItem2>
            <img src={imageItem2} alt="" />
          </BlockImageItem2>
            <ParagraphItem>Entrega rápida e rastreada</ParagraphItem>
        </Item2>

        <Item3>
          <BlockImageItem3>
            <img src={imageItem3} alt="" />
          </BlockImageItem3>
            <ParagraphItem>Embalagem mantém o café intacto</ParagraphItem>
        </Item3>

        <Item4>
        <BlockImageItem4>
          <img src={imageItem4} alt="" />
        </BlockImageItem4>
          <ParagraphItem>O café chega fresquinho até você</ParagraphItem>
        </Item4>
        
      </Items>

      <ImageCoffee></ImageCoffee>
    </ContainerIntro>
  )
}