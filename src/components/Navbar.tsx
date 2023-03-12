import { Actions, Cart, DivContainer, Location, LogoCoffee, TextLocation } from "./Navbar.styles";
import LogoCoffeeIcon from "../public/LogoCoffee.svg";
import IconCartIcon from "../public/IconCart.svg";
import IconLocationIcon from "../public/IconLocation.svg";

export function Navbar() {
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
        </Cart>
      </Actions>
    </DivContainer>
  )
}