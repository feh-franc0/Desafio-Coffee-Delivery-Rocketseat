import { ContainerCheckout, CheckoutLeft, CheckoutRight, ContainerLeftForm, ContainerRightCountCoffe, ContainerPayment } from "./ContainerCheckout.styles";


export function CheckoutContainer() {
  return (
    <ContainerCheckout>
      <CheckoutLeft>
        <h1>Complete seu pedido</h1>
        <ContainerLeftForm>

        </ContainerLeftForm>
        <ContainerPayment>

        </ContainerPayment>
      </CheckoutLeft>
      <CheckoutRight>
        <h1>Cafés selecionados</h1>
        <ContainerRightCountCoffe>

        </ContainerRightCountCoffe>
      </CheckoutRight>
    </ContainerCheckout>
  );
}