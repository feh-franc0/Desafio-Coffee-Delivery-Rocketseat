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

          <div>
            <input type="text" placeholder="digite algo..." />
            <input type="text" placeholder="digite algo..." />
            <input type="text" placeholder="digite algo..." />
            <input type="text" placeholder="digite algo..." />
            <input type="text" placeholder="digite algo..." />
            <input type="text" placeholder="digite algo..." />
            <input type="text" placeholder="digite algo..." />
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
          <div>
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
      //? Componente ao lado
      <CheckoutRight>
        <h1>Cafés selecionados</h1>
        <ContainerRightCountCoffe>
          <div>
            <div>
              <img src={imageCoffe} alt="" />
            </div>
            <div>
              <p>Expresso Tradicional</p>
              <div>
                <div>
                  <button>
                    <img src={iconMenos} alt="" />
                  </button>
                  <p> 2 </p>
                  <button>
                    <img src={iconeMais} alt="" />
                  </button>
                </div>
                <div>
                  <button>
                    <img src={trash} alt="" />
                    Remover
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>R$ 20,00</p>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button>Confirmar Pedido</button>
        </ContainerRightCountCoffe>
      </CheckoutRight>
    </ContainerCheckout>
  );
}
