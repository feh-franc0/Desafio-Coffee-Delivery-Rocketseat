import styled from "styled-components";

export const ContainerSuccess = styled.div`
  width: 1120px;
  margin: 180px auto;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

export const TopMessageContainer = styled.div`
  /* background-color: red; */
  h1 {
    margin: 0;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: #c47f17;
  }

  p {
    margin: 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
  }
`;

export const ContainerShippingProduct = styled.div`
  gap: 102px;
  display: flex;
  flex-direction: row;
`;

export const DescriptionShippingProduct = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 526px;
  height: 270px;
  padding: 40px;
  border: 2px solid rgba(219, 172, 44, 1);
  border-radius: 6px 36px;

  .iconAndDesc {
    display: flex;
    flex-direction: row;
    gap: 12px;

    p {
      margin: 0;

      /* width: 310px; */
      /* height: 42px; */
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #574f4d;
    }
  }
`;

export const ImageDescription = styled.div`
  width: 492px;
  height: 293px;
`;
