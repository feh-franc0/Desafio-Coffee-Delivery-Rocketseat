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
import { NavLink, Navigate } from "react-router-dom";

export function Navbar() {
  const { shopCart, setShopCart }: any = useContext(ShopCartContext);
  console.log(shopCart);

  const totalCoffeAmount = shopCart.reduce(
    (acc: any, item: any) => acc + item.CoffeAmout,
    0
  );
  console.log("totalCoffeAmount: ", totalCoffeAmount);

  // console.log("shopCart: ", shopCart)

  // let totalAmount = shopCart.reduce((acc:any, curr:any) => acc + curr.CoffeAmout, 0);
  // console.log("totalAmount: ",totalAmount); // output: 6

  return (
    <DivContainer>
      <div className="headerCentering">
      <NavLink to="/">
      <LogoCoffee>
        <img src={LogoCoffeeIcon} alt="" />
      </LogoCoffee>
      </NavLink>
      <Actions>
        <Location>
          <img src={IconLocationIcon} alt="" />
          <TextLocation>Porto Alegre, RS</TextLocation>
        </Location>
        <NavLink to="/checkout">
          <Cart>
            <img src={IconCartIcon} alt="" />
            <span className="cart-count">{totalCoffeAmount}</span>
          </Cart>
        </NavLink>
      </Actions>
      </div>
    </DivContainer>
  );
}
