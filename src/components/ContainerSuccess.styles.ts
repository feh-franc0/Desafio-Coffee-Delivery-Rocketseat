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
  width: 100%;
  width: 526px;
  height: 270px;
  border-radius: 6px 36px;
  padding: 40px;
  /* background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%); */
`;

export const ImageDescription = styled.div`
  width: 100%;
`;
