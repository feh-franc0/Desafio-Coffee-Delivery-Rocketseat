import {
  ContainerSuccess, TopMessageContainer, ContainerShippingProduct, ImageDescription, DescriptionShippingProduct
} from "./ContainerSuccess.styles";

import imgDelivery from "../public/deliveryManImage.svg"

export function SuccessContainer() {
  return (
    <ContainerSuccess>

      <TopMessageContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TopMessageContainer>

      <ContainerShippingProduct>
        <DescriptionShippingProduct>x</DescriptionShippingProduct>
        <ImageDescription>
          <img src={imgDelivery} alt="" />
        </ImageDescription>
      </ContainerShippingProduct>

    </ContainerSuccess>
  );
}
