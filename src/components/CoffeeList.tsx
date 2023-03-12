import {  ContainerCoffeeList, FilterCoffeeList, Tag1, Tag2, Tag3, Tag4, Tag5, TitleCoffeeList, TitleTag1, TitleTag2, TitleTag3, TitleTag4, TitleTag5} from "./CoffeeList.styles";

import { GridListCoffee } from "./GridListCoffee";

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

      <GridListCoffee/>
      

    </ContainerCoffeeList>
  )
}