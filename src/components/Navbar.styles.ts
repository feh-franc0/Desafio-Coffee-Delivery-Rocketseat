import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;

  position: absolute;
  height: 36px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* Base/Background */

  background: #FAFAFA;
  
  box-sizing: border-box;
  height: 100px;
`;

export const LogoCoffee = styled.div`
  width: 84.95px;
  height: 40px;

  /* Base/Subtitle */

  /* background: #403937; */

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 193px;
  height: 38px;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 143px;
  height: 38px;

  /* Brand/Purple Light */

  background: #EBE5F9;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  position: relative;

  width: 38px;
  height: 38px;

  /* Brand/Yellow Light */

  background: #F1E9C9;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  .cart-count {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #C47F17;
    color: #ffffff;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TextLocation = styled.p`
  width: 101px;
  height: 18px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */


  /* Brand/Purple Dark */

  color: #4B2995;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;