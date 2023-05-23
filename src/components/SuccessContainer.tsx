import {
  ContainerSuccess, TopMessageContainer, ContainerShippingProduct, ImageDescription, DescriptionShippingProduct
} from "./ContainerSuccess.styles";

import imgDelivery from "../public/deliveryManImage.svg"
import iconMoney from "../public/moneyIcon.svg"
import iconTime from "../public/timeIcon.svg"
import iconLocation from "../public/locationIcon.svg"

export function SuccessContainer() {
  return (
    <ContainerSuccess>

      <TopMessageContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TopMessageContainer>

      <ContainerShippingProduct>
        <DescriptionShippingProduct>
          <div className="iconAndDesc">
            <img src={iconLocation} alt="" />
            <div>
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div className="iconAndDesc">
            <img src={iconTime} alt="" />
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </div>
          <div className="iconAndDesc">
            <img src={iconMoney} alt="" />
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>Cartão de Crédito</strong></p>
            </div>
          </div>
        </DescriptionShippingProduct>
        <ImageDescription>
          <img src={imgDelivery} alt="" />
        </ImageDescription>
      </ContainerShippingProduct>

    </ContainerSuccess>
  );
}
