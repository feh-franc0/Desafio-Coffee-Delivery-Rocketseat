import {
  ContainerCheckout,
  CheckoutLeft,
  CheckoutRight,
  ContainerLeftForm,
  ContainerRightCountCoffe,
  ContainerPayment,
} from "./ContainerCheckout.styles";

import cifrao from "../public/Cifrao.svg";

import money from "../public/Money.svg";
import bank from "../public/Bank.svg";
import card from "../public/Card.svg";
import location from "../public/Location.svg";
import trash from "../public/Trash.svg";

import iconMenos from "../public/iconMenos.svg";
import iconeMais from "../public/iconeMais.svg";

import imageCoffe from "../public/CafecomLeite.png";

export function CheckoutContainer() {
  return (
    <ContainerCheckout>
      <CheckoutLeft>
        <h1>Complete seu pedido</h1>
        <ContainerLeftForm>
          <div className="imgSideTitle">
            <img src={location} alt="" />
          </div>
          <div className="titleAndDesc">
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <div className="personalInfos">
            <input className="CEP" type="text" placeholder="CEP" />
            <input className="Rua" type="text" placeholder="Rua" />
            <div className="infosNumComp">
              <input className="Numero" type="text" placeholder="Número" />
              <input
                className="Complemento"
                type="text"
                placeholder="Complemento"
              />
            </div>
            <div className="infosBaiCidUf">
              <input className="Bairro" type="text" placeholder="Bairro" />
              <input className="Cidade" type="text" placeholder="Cidade" />
              <input className="UF" type="text" placeholder="UF" />
            </div>
          </div>
        </ContainerLeftForm>
        <ContainerPayment>
          <div>
            <div className="imgSideTitle">
              <img src={cifrao} alt="" />
            </div>
            <div className="titleAndDesc">
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="paymentButtons">
            <button>
              <img src={card} alt="" />
              <p>Cartão de crédito</p>
            </button>
            <button>
              <img src={bank} alt="" />
              <p>cartão de débito</p>
            </button>
            <button>
              <img src={money} alt="" />
              <p>dinheiro</p>
            </button>
          </div>
        </ContainerPayment>
      </CheckoutLeft>

      <CheckoutRight>
        <h1>Cafés selecionados</h1>
        <ContainerRightCountCoffe>
          {/* ---------------------------- */}
          <div className="coffeeItens">
            <div className="containerImgTitleActions">
              <div className="divImgCoffeeItens">
                <img src={imageCoffe} alt="" />
              </div>
              <div className="nameAmountDeleteCoffeeItens">
                <div className="titleCoffeeItens">
                  <p>Latte</p>
                </div>

                <div className="actionsCoffeeItens">
                  <div className="actionsCountItensCoffee">
                    <button>
                      <img src={iconMenos} alt="" />
                    </button>
                    <div className="countItensCoffee"> 10 </div>
                    <button>
                      <img src={iconeMais} alt="" />
                    </button>
                  </div>

                  <button className="actionsRemove">
                    <img className="imgAndTextActionsRemove" src={trash} alt="" />
                    <span className="imgAndTextActionsRemove">Remover</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="priceCoffeeItens">
              <p>R$ 9,90</p>
            </div>
          </div>
          {/* ---------------------------- */}

          <hr />
          <div className="priceSummary">
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="totalPrice">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button className="confirmPurchase">
            <p>Confirmar Pedido</p>
          </button>
        </ContainerRightCountCoffe>
      </CheckoutRight>
    </ContainerCheckout>
  );
}
