import {
  Actions,
  Cart,
  DivContainer,
  Location,
  LogoCoffee,
  TextLocation,
} from "./Navbar.styles";
import LogoCoffeeIcon from "../public/LogoCoffee.svg";
import IconCartIcon from "../public/IconCart.svg";
import IconLocationIcon from "../public/IconLocation.svg";
import { ShopCartContext } from "../contexts/ShopCartContext";
import { useContext } from "react";

export function Navbar() {
  
  const {shopCart, setShopCart}: any = useContext(ShopCartContext)
  console.log(shopCart.length)

  return (
    <DivContainer>
      <LogoCoffee>
        <img src={LogoCoffeeIcon} alt="" />
      </LogoCoffee>
      <Actions>
        <Location>
          <img src={IconLocationIcon} alt="" />
          <TextLocation>Porto Alegre, RS</TextLocation>
        </Location>
        <Cart>
          <img src={IconCartIcon} alt="" />
          <span className="cart-count">{shopCart.length}</span>
        </Cart>
      </Actions>
    </DivContainer>
  );
}
