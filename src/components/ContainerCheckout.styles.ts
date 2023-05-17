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
      width: 178.67px;
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
  height: 498px;
  background: #f3f2f2;
  border-radius: 6px 44px;
  box-sizing: border-box;
  padding: 40px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
  }
`;
