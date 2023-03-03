import { CoffeeCard1, CoffeeCard2, CoffeeCard3, CoffeeCard4, CoffeeCard5, CoffeeCard6, CoffeeCard7, CoffeeCard8, CoffeeCard9, CoffeeCard10, CoffeeCard11, CoffeeCard12, CoffeeCard13, CoffeeCard14, ContainerCoffeeList, FilterCoffeeList, ListCoffeeItens, Tag1, Tag2, Tag3, Tag4, Tag5, TitleCoffeeList, TitleTag1, TitleTag2, TitleTag3, TitleTag4, TitleTag5, Buy, TextPriceBuy, ActionsBuy, CounterBuy, IconButtonBuy, TextNumberCount, DescriptionCard, NameCard, TagsCard, TagOne, TagDescTradicional, CoffeeImg, TagTwo, TagsCardTwo, TagDescTradicionalTwo, TagDescTradicionalThree, TagThree, TagEspecial, TagDescTradicionalEspecial, TagTwoAlcoolico, TagThreeGelado } from "./CoffeeList.styles";

import Vector from "../../public/Vector.svg";
import iconMenos from "../../public/iconMenos.svg";
import iconeMais from "../../public/iconeMais.svg";

import ExpressoTradicional from "../../public/ExpressoTradicional.png";
import CafecomLeite from "../../public/CafecomLeite.png";
import Mocaccino from "../../public/Mocaccino.png";
import Arabe from "../../public/Arabe.png";
import ExpressoAmericano from "../../public/ExpressoAmericano.png";
import Latte from "../../public/Latte.png";
import ChocolateQuente from "../../public/ChocolateQuente.png";
import Irlandes from "../../public/Irlandes.png";
import ExpressoCremoso from "../../public/ExpressoCremoso.png";
import Capuccino from "../../public/Capuccino.png";
import Cubano from "../../public/Cubano.png";
import ExpressoGelado from "../../public/ExpressoGelado.png";
import Macchiato from "../../public/Macchiato.png";
import Havaiano from "../../public/Havaiano.png";

export function CoffeeList () {
  return (
    <ContainerCoffeeList>
      <TitleCoffeeList>Nossos Cafés</TitleCoffeeList>
      <FilterCoffeeList>
        <Tag1> <TitleTag1> Tradicional </TitleTag1> </Tag1>
        <Tag2> <TitleTag2> especial </TitleTag2> </Tag2>
        <Tag3> <TitleTag3> com leite </TitleTag3> </Tag3>
        <Tag4> <TitleTag4> alcoólico </TitleTag4> </Tag4>
        <Tag5> <TitleTag5> gelado </TitleTag5> </Tag5>
      </FilterCoffeeList>
      
      <ListCoffeeItens>

        <CoffeeCard1>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            O tradicional café feito com água quente e grãos moídos
          </DescriptionCard>
          <NameCard>
            Expresso Tradicional
          </NameCard>
          <TagsCard>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
          </TagsCard>
          <CoffeeImg>
            <img src={ExpressoTradicional} alt="" />
          </CoffeeImg>
        </CoffeeCard1>


        <CoffeeCard2>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Expresso diluído, menos intenso que o tradicional
          </DescriptionCard>
          <NameCard>
            Expresso Americano
          </NameCard>
          <TagsCard>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
          </TagsCard>
          <CoffeeImg>
            <img src={ExpressoAmericano} alt="" />
          </CoffeeImg>

        </CoffeeCard2>

        <CoffeeCard3>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Café expresso tradicional com espuma cremosa
          </DescriptionCard>
          <NameCard>
            Expresso Cremoso
          </NameCard>
          <TagsCard>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
          </TagsCard>
          <CoffeeImg>
            <img src={ExpressoCremoso} alt="" />
          </CoffeeImg>

        </CoffeeCard3>

        <CoffeeCard4>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Bebida preparada com café expresso e cubos de gelo
          </DescriptionCard>
          <NameCard>
            Expresso Gelado
          </NameCard>
          <TagsCardTwo>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
            <TagTwo>
              <TagDescTradicionalTwo>gelado</TagDescTradicionalTwo>
            </TagTwo>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={ExpressoGelado} alt="" />
          </CoffeeImg>

        </CoffeeCard4>

        <CoffeeCard5>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Meio a meio de expresso tradicional com leite vaporizado
          </DescriptionCard>
          <NameCard>
            Café com Leite
          </NameCard>
          <TagsCardTwo>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
            <TagTwo>
              <TagDescTradicionalThree>com leite</TagDescTradicionalThree>
            </TagTwo>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={CafecomLeite} alt="" />
          </CoffeeImg>

        </CoffeeCard5>

        <CoffeeCard6>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Uma dose de café expresso com o dobro de leite e espuma cremosa
          </DescriptionCard>
          <NameCard>
            Latte
          </NameCard>
          <TagsCardTwo>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
            <TagTwo>
              <TagDescTradicionalThree>com leite</TagDescTradicionalThree>
            </TagTwo>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={Latte} alt="" />
          </CoffeeImg>

        </CoffeeCard6>

        <CoffeeCard7>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Bebida com canela feita de doses iguais de café, leite e espuma
          </DescriptionCard>
          <NameCard>
            Capuccino
          </NameCard>
          <TagsCardTwo>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
            <TagTwo>
              <TagDescTradicionalThree>com leite</TagDescTradicionalThree>
            </TagTwo>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={Capuccino} alt="" />
          </CoffeeImg>

        </CoffeeCard7>

        <CoffeeCard8>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Café expresso misturado com um pouco de leite quente e espuma
          </DescriptionCard>
          <NameCard>
            Macchiato
          </NameCard>
          <TagsCardTwo>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
            <TagTwo>
              <TagDescTradicionalThree>com leite</TagDescTradicionalThree>
            </TagTwo>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={Macchiato} alt="" />
          </CoffeeImg>

        </CoffeeCard8>

        <CoffeeCard9>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Café expresso com calda de chocolate, pouco leite e espuma
          </DescriptionCard>
          <NameCard>
            Mocaccino
          </NameCard>
          <TagsCardTwo>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
            <TagTwo>
              <TagDescTradicionalThree>com leite</TagDescTradicionalThree>
            </TagTwo>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={Mocaccino} alt="" />
          </CoffeeImg>

        </CoffeeCard9>

        <CoffeeCard10>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Bebida feita com chocolate dissolvido no leite quente e café
          </DescriptionCard>
          <NameCard>
            Chocolate Quente
          </NameCard>
          <TagsCardTwo>
            <TagOne>
              <TagDescTradicional>Tradicional</TagDescTradicional>
            </TagOne>
            <TagTwo>
              <TagDescTradicionalThree>com leite</TagDescTradicionalThree>
            </TagTwo>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={ChocolateQuente} alt="" />
          </CoffeeImg>

        </CoffeeCard10>

        <CoffeeCard11>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Drink gelado de café expresso com rum, creme de leite e hortelã
          </DescriptionCard>
          <NameCard>
            Cubano
          </NameCard>
          <TagsCardTwo>
            <TagEspecial>
              <TagDescTradicionalEspecial>especial</TagDescTradicionalEspecial>
            </TagEspecial>
            <TagTwoAlcoolico>
              <TitleTag4>alcoólico</TitleTag4>
            </TagTwoAlcoolico>
            <TagThreeGelado>
              <TagDescTradicionalTwo>gelado</TagDescTradicionalTwo>
            </TagThreeGelado>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={Cubano} alt="" />
          </CoffeeImg>

        </CoffeeCard11>

        <CoffeeCard12>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Bebida adocicada preparada com café e leite de coco
          </DescriptionCard>
          <NameCard>
            Havaiano
          </NameCard>
          <TagsCard>
            <TagEspecial>
              <TagDescTradicionalEspecial>especial</TagDescTradicionalEspecial>
            </TagEspecial>
          </TagsCard>
          <CoffeeImg>
            <img src={Havaiano} alt="" />
          </CoffeeImg>

        </CoffeeCard12>

        <CoffeeCard13>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Bebida preparada com grãos de café árabe e especiarias
          </DescriptionCard>
          <NameCard>
            Árabe
          </NameCard>
          <TagsCard>
            <TagEspecial>
              <TagDescTradicionalEspecial>especial</TagDescTradicionalEspecial>
            </TagEspecial>
          </TagsCard>
          <CoffeeImg>
            <img src={Arabe} alt="" />
          </CoffeeImg>

        </CoffeeCard13>

        <CoffeeCard14>
          <Buy> 
            <TextPriceBuy>R$ 9,90</TextPriceBuy> 
            <ActionsBuy>
              <CounterBuy>
                <div> <img src={iconMenos} alt="" /> </div>
                <TextNumberCount> 1 </TextNumberCount>
                <div> <img src={iconeMais} alt="" /> </div>
              </CounterBuy>
              <IconButtonBuy>
                <img src={Vector} alt="" />
              </IconButtonBuy>
            </ActionsBuy>
          </Buy>
          <DescriptionCard>
            Bebida a base de café, uísque irlandês, açúcar e chantilly
          </DescriptionCard>
          <NameCard>
            Irlandês
          </NameCard>
          <TagsCardTwo>
            <TagEspecial>
              <TagDescTradicionalEspecial>especial</TagDescTradicionalEspecial>
            </TagEspecial>
            <TagTwoAlcoolico>
              <TitleTag4>alcoólico</TitleTag4>
            </TagTwoAlcoolico>
          </TagsCardTwo>
          <CoffeeImg>
            <img src={Irlandes} alt="" />
          </CoffeeImg>

        </CoffeeCard14>

      </ListCoffeeItens>
    </ContainerCoffeeList>
  )
}