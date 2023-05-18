import styled from "styled-components";

export const ContainerCheckout = styled.div`
  width: 90%;
  margin: 40px auto;
`;

export const CheckoutLeft = styled.div`
  float: left;
  width: 60%;
  box-sizing: border-box;
  padding: 40px;

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
  width: 40%;
  box-sizing: border-box;
  padding: 40px;

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
  /* height: 498px; */
  background: #f3f2f2;
  border-radius: 6px 44px;
  box-sizing: border-box;
  padding: 40px;
  gap: 24px;

  .coffeeItens {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 59px;

    width: 368px;
    height: 80px;

    /* Base/Card */

    background: #f3f2f2;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;

    .infoItenCoffee {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 20px;

      width: 255px;
      /* height: 64px; */

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;

      .imgItenCoffee {
        img {
          width: 80px;
          height: 80px;

          /* Inside auto layout */

          flex: none;
          order: 0;
          flex-grow: 0;
        }
      }

      .detailsItenCoffee {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;

        width: 171px;
        height: 61px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;

        p {
          width: 37px;
          height: 21px;

          /* Text/Regular M */

          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          /* identical to box height, or 21px */

          display: flex;
          align-items: center;

          /* Base/Subtitle */

          color: #403937;

          /* Inside auto layout */

          flex: none;
          order: 0;
          flex-grow: 0;
        }
        .actionsItenCoffee {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px;
          gap: 4px;

          width: 72px;
          height: 32px;

          /* Base/Button */

          background: #e6e5e5;
          border-radius: 6px;

          /* Inside auto layout */

          flex: none;
          order: 0;
          flex-grow: 0;

          .counterItensCoffee {
          }

          .buttonRemoveItenCoffee {
          }
        }
      }
    }

    p {
      width: 55px;
      height: 21px;

      /* Text/Bold M */

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
      /* identical to box height, or 21px */

      display: flex;
      align-items: center;
      text-align: right;

      /* Base/Text */

      color: #574f4d;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }

  .priceSummary {
    margin-top: 24px;
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
