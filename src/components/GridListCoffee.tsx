import { GridListCoffeeItens } from "./CoffeeList.styles";


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
import { CoffeeItem } from "./CoffeeItem";

export function GridListCoffee () {

  return (
    
      <GridListCoffeeItens>

        <CoffeeItem
          CoffeeImage={ExpressoTradicional}
          CoffeeType="Tradicional"
          CoffeeTitle="Expresso Tradicional"
          CoffeeDescription="O tradicional café feito com água quente e grãos moídos"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={ExpressoAmericano}
          CoffeeType="Tradicional"
          CoffeeTitle="Expresso Americano"
          CoffeeDescription="Expresso diluído, menos intenso que o tradicional"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={ExpressoCremoso}
          CoffeeType="Tradicional"
          CoffeeTitle="Expresso Cremoso"
          CoffeeDescription="Café expresso tradicional com espuma cremosa"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={ExpressoGelado}
          CoffeeType="Tradicional, gelado"
          CoffeeTitle="Expresso Gelado"
          CoffeeDescription="Bebida preparada com café expresso e cubos de gelo"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={CafecomLeite}
          CoffeeType="Tradicional, com leite"
          CoffeeTitle="Café com Leite"
          CoffeeDescription="Meio a meio de expresso tradicional com leite vaporizado"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Latte}
          CoffeeType="Tradicional, com leite"
          CoffeeTitle="Latte"
          CoffeeDescription="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Capuccino}
          CoffeeType="Tradicional, com leite"
          CoffeeTitle="Capuccino"
          CoffeeDescription="Bebida com canela feita de doses iguais de café, leite e espuma"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Macchiato}
          CoffeeType="Tradicional, com leite"
          CoffeeTitle="Macchiato"
          CoffeeDescription="Café expresso misturado com um pouco de leite quente e espuma"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Mocaccino}
          CoffeeType="Tradicional, com leite"
          CoffeeTitle="Mocaccino"
          CoffeeDescription="Café expresso com calda de chocolate, pouco leite e espuma"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={ChocolateQuente}
          CoffeeType="Tradicional, com leite"
          CoffeeTitle="Chocolate Quente"
          CoffeeDescription="Bebida feita com chocolate dissolvido no leite quente e café"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Cubano}
          CoffeeType="especial, alcoólico, gelado"
          CoffeeTitle="Cubano"
          CoffeeDescription="Drink gelado de café expresso com rum, creme de leite e hortelã"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Havaiano}
          CoffeeType="especial"
          CoffeeTitle="Havaiano"
          CoffeeDescription="Bebida adocicada preparada com café e leite de coco"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Arabe}
          CoffeeType="especial"
          CoffeeTitle="Árabe"
          CoffeeDescription="Bebida preparada com grãos de café árabe e especiarias"
          CoffeePrice="9,90"
        />

        <CoffeeItem
          CoffeeImage={Irlandes}
          CoffeeType="especial, alcoólico"
          CoffeeTitle="Irlandês"
          CoffeeDescription="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          CoffeePrice="9,90"
        />

      </GridListCoffeeItens>
  )
}