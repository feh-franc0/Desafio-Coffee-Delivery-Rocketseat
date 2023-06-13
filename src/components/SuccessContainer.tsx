import {
  ContainerSuccess, TopMessageContainer, ContainerShippingProduct, ImageDescription, DescriptionShippingProduct
} from "./ContainerSuccess.styles";

import imgDelivery from "../public/deliveryManImage.svg"
import iconMoney from "../public/moneyIcon.svg"
import iconTime from "../public/timeIcon.svg"
import iconLocation from "../public/locationIcon.svg"
import { useContext } from "react";
import { DeliveryInfoContext } from "../contexts/ShopCartContext";

export function SuccessContainer() {
  
  const { deliveryInfo, setDeliveryInfo }: any = useContext(DeliveryInfoContext);
  console.log("deliveryInfo: ", deliveryInfo)
  
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
              <p>Entrega em <strong>{deliveryInfo.rua}, {deliveryInfo.numero}</strong></p>
              <p>{deliveryInfo.cidade} - {deliveryInfo.bairro}, {deliveryInfo.uf}</p>
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
              <p><strong>{deliveryInfo.FormaDePagamento}</strong></p>
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
