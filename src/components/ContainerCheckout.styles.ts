import styled from "styled-components";

export const ContainerCheckout = styled.div`
  width: 1120px;
  margin: 100px auto;
  gap: 32px;
  display: flex;
  flex-direction: row;
`;

export const CheckoutLeft = styled.div`
  float: left;
  width: 100%;
  box-sizing: border-box;
  /* padding: 40px; */

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
`;

export const CheckoutRight = styled.div`
  float: right;
  width: 100%;
  box-sizing: border-box;
  /* padding: 40px; */

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
`;

export const ContainerLeftForm = styled.div`
  width: 100%;
  height: 372px;
  background: #f3f2f2;
  border-radius: 6px;
  margin-bottom: 12px;
  box-sizing: border-box;
  padding: 40px;
  min-width: 650px;

  .imgSideTitle {
    display: inline-block;
    top: -14px;
    position: relative;
  }

  .titleAndDesc {
    display: inline-block;
    margin-left: 10px;
    h3 {
      margin: 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 130%;
    }
    p {
      margin: 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }
  .personalInfos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    padding-top: 32px;
    gap: 16px;

    width: 100%;
    height: 216px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    .CEP {
      box-sizing: border-box;

      /* Auto layout */

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      gap: 4px;

      width: 41.5%;
      height: 42px;

      /* Base/Input */

      background: #eeeded;
      /* Base/Button */

      border: 1px solid #e6e5e5;
      border-radius: 4px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    .Rua {
      box-sizing: border-box;

      /* Auto layout */

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      gap: 4px;

      width: 100%;
      height: 42px;

      /* Base/Input */

      background: #eeeded;
      /* Base/Button */

      border: 1px solid #e6e5e5;
      border-radius: 4px;

      /* Inside auto layout */

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }

    .infosNumComp {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 12px;

      width: 100%;
      height: 42px;

      /* Inside auto layout */

      flex: none;
      order: 2;
      align-self: stretch;
      flex-grow: 0;

      .Numero {
        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        width: 41.5%;
        height: 42px;

        /* Base/Input */

        background: #eeeded;
        /* Base/Button */

        border: 1px solid #e6e5e5;
        border-radius: 4px;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
      }

      .Complemento {
        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        width: 50%;
        height: 42px;

        /* Base/Input */

        background: #eeeded;
        /* Base/Button */

        border: 1px solid #e6e5e5;
        border-radius: 4px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 1;
      }
    }

    .infosBaiCidUf {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 12px;

      width: 100%;
      height: 42px;

      /* Inside auto layout */

      flex: none;
      order: 3;
      align-self: stretch;
      flex-grow: 0;

      .Bairro {
        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        width: 41.5%;
        height: 42px;

        /* Base/Input */

        background: #eeeded;
        /* Base/Button */

        border: 1px solid #e6e5e5;
        border-radius: 4px;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
      }

      .Cidade {
        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        width: 10%;
        height: 42px;

        /* Base/Input */

        background: #eeeded;
        /* Base/Button */

        border: 1px solid #e6e5e5;
        border-radius: 4px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 1;
      }

      .UF {
        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        width: 10%;
        height: 42px;

        /* Base/Input */

        background: #eeeded;
        /* Base/Button */

        border: 1px solid #e6e5e5;
        border-radius: 4px;

        /* Inside auto layout */

        flex: none;
        order: 2;
        flex-grow: 0;
      }
    }
  }
`;

export const ContainerPayment = styled.div`
  width: 100%;
  height: 207px;
  background: #f3f2f2;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 40px;
  min-width: 650px;

  .imgSideTitle {
    display: inline-block;
    top: -14px;
    position: relative;
  }

  .titleAndDesc {
    display: inline-block;
    margin-left: 10px;
    h3 {
      margin: 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 130%;
    }
    p {
      margin: 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }

  .paymentButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0px;
    gap: 12px;

    button {
      width: 100%;
      height: 51px;

      cursor: pointer;

      background: #e6e5e5;
      border-radius: 6px;
      border: none;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px;
      gap: 12px;
    }
  }
`;

export const ContainerRightCountCoffe = styled.div`
  width: 100%;
  max-height: 100%;
  background: #f3f2f2;
  border-radius: 6px 44px;
  box-sizing: border-box;
  padding: 40px;
  gap: 24px;
  min-width: 450px;
  display: flex;
  flex-direction: column;

  .scrollCoffeItens {
    
    height: 250px;
    overflow: hidden auto;

    /* Estilizando a barra de rolagem */
    &::-webkit-scrollbar {
      width: 2px; /* Largura da barra de rolagem */
    }

    /* Estilizando o fundo da barra de rolagem */
    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    /* Estilizando o indicador da barra de rolagem */
    &::-webkit-scrollbar-thumb {
      background-color: #dbac2c;
    }

    /* Estilizando o indicador da barra de rolagem quando hover */
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }


    .hrCoffeItens {    
      margin: 20px 0px;
      border: 1px solid #e6e5e5;
      width: 100%;
    }
  }

  /* ---------------------------------- */
  .coffeeItens {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 80px;
    /* background: red; */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    .containerImgTitleActions {
      display: flex;
      flex-direction: row;
      height: 100%;
      gap: 30px;
    }

    .divImgCoffeeItens {
      display: flex;
      width: 64px;
      height: 100%;

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    .nameAmountDeleteCoffeeItens {
      display: flex;
      /* background-color: blue; */
      flex-direction: column;
      gap: 10px;
      display: flex;
      justify-content: center;
      height: 100%;

      .titleCoffeeItens {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        display: flex;
        align-items: center;
        color: #403937;
        p {
          margin: 0;
        }
      }

      .actionsCoffeeItens {
        display: flex;
        flex-direction: row;
        gap: 8px;

        .actionsCountItensCoffee {
          display: flex;
          flex-direction: row;
          background: #e6e5e5;
          border-radius: 6px;
          padding: 8px;

          button {
            background: none;
            border: none;
            align-items: center;
            justify-content: center;
            display: flex;
            cursor: pointer;
          }

          .countItensCoffee {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .actionsRemove {
          display: flex;
          flex-direction: row;
          background: #e6e5e5;
          border-radius: 6px;
          padding: 8px;
          border: none;
          cursor: pointer;

          .imgAndTextActionsRemove {
            position: relative;
            align-items: center;
            justify-content: center;
            display: flex;
            height: 100%;
          }
        }
      }
    }

    .priceCoffeeItens {
      p {
        margin-right: 10px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
        color: #574f4d;
        display: flex;
        align-items: center;
        text-align: right;
      }
    }
  }
  /* ---------------------------------- */

  .priceSummary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 100%;
    height: 92px;

    /* Inside auto layout */

    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 8px;

      width: 100%;
      height: 21px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
      }
    }

    .totalPrice > p {
      height: 26px;

      /* Text/Bold L */

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;
      text-align: right;

      /* Base/Subtitle */

      color: #403937;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }

  .confirmPurchase {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    width: 100%;
    height: 46px;
    margin-top: 24px;

    /* Brand / Yellow */

    background: #dbac2c;
    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 5;
    align-self: stretch;
    flex-grow: 0;
    border: none;
    &:hover{
      cursor: pointer;
    }
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      text-transform: uppercase;

      /* Base/White */

      color: #ffffff;
      font-stretch: 100;
    }
  }
`;
