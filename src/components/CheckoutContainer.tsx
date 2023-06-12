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

import { ShopCartContext } from "../contexts/ShopCartContext";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {PropsCoffee} from "./GridListCoffee"

export function CheckoutContainer() {
  const { shopCart, setShopCart }: any = useContext(ShopCartContext);
  const [opcaoSelecionada, setOpcaoSelecionada]: any = useState(null);
  const [dadosFormulario, setDadosFormulario] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const array = shopCart;

    let total = 0;

    array.forEach((item:PropsCoffee) => {
      const quantity = item.CoffeAmout;
      const price = parseFloat(item.CoffeePrice.replace(',', '.'));
      const subtotal = quantity * price;
      total += subtotal;
    });

    setTotalPrice(total);
  }, [shopCart]);

  const selecionarOpcao = (opcao: any) => {
    setOpcaoSelecionada(opcao);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDadosFormulario((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const addCart = (id: string) => {
    const index = shopCart.findIndex((objeto: any) => objeto.id === id);
    if (index !== -1) {
      const novoArray = [...shopCart];
      novoArray[index].CoffeAmout++;
      setShopCart(novoArray);
    }
  };

  const subtractCart = (id: string) => {
    const index = shopCart.findIndex((objeto: any) => objeto.id === id);
    if (index !== -1) {
      const novoArray = [...shopCart];
      novoArray[index].CoffeAmout--;
      setShopCart(novoArray);
    }
  };

  console.log("totalPrice: ", totalPrice);
  console.log("cart checkout: ", shopCart);
  console.log("dadosFormulario: ", dadosFormulario);
  console.log("opcaoSelecionada: ", opcaoSelecionada);

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
            <input
              name="cep"
              className="CEP"
              type="text"
              placeholder="CEP"
              value={dadosFormulario.cep}
              onChange={handleChange}
            />
            <input
              name="rua"
              className="Rua"
              type="text"
              placeholder="Rua"
              value={dadosFormulario.rua}
              onChange={handleChange}
            />
            <div className="infosNumComp">
              <input
                name="numero"
                className="Numero"
                type="text"
                placeholder="Número"
                value={dadosFormulario.numero}
                onChange={handleChange}
              />
              <input
                name="complemento"
                className="Complemento"
                type="text"
                placeholder="Complemento"
                value={dadosFormulario.complemento}
                onChange={handleChange}
              />
            </div>
            <div className="infosBaiCidUf">
              <input
                name="bairro"
                className="Bairro"
                type="text"
                placeholder="Bairro"
                value={dadosFormulario.bairro}
                onChange={handleChange}
              />
              <input
                name="cidade"
                className="Cidade"
                type="text"
                placeholder="Cidade"
                value={dadosFormulario.cidade}
                onChange={handleChange}
              />
              <input name="uf" className="UF" type="text" placeholder="UF" />
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
            <button
              className={opcaoSelecionada === "credito" ? "selecionado" : ""}
              onClick={() => selecionarOpcao("credito")}
            >
              <img src={card} alt="" />
              <p>Cartão de crédito</p>
            </button>
            <button
              className={opcaoSelecionada === "debito" ? "selecionado" : ""}
              onClick={() => selecionarOpcao("debito")}
            >
              <img src={bank} alt="" />
              <p>cartão de débito</p>
            </button>
            <button
              className={opcaoSelecionada === "dinheiro" ? "selecionado" : ""}
              onClick={() => selecionarOpcao("dinheiro")}
            >
              <img src={money} alt="" />
              <p>dinheiro</p>
            </button>
          </div>
        </ContainerPayment>
      </CheckoutLeft>

      <CheckoutRight>
        <h1>Cafés selecionados</h1>
        <ContainerRightCountCoffe>
          <div className="scrollCoffeItens">
            {shopCart.map((props: any) => (
              <div key={props.id}>
                <div key={props.id} className="coffeeItens">
                  <div className="containerImgTitleActions">
                    <div className="divImgCoffeeItens">
                      <img src={props.CoffeeImage} alt="" />
                    </div>
                    <div className="nameAmountDeleteCoffeeItens">
                      <div className="titleCoffeeItens">
                        <p>{props.CoffeeTitle}</p>
                      </div>

                      <div className="actionsCoffeeItens">
                        <div className="actionsCountItensCoffee">
                          <button onClick={() => subtractCart(props.id)}>
                            <img src={iconMenos} alt="" />
                          </button>
                          <div className="countItensCoffee">
                            {" "}
                            {props.CoffeAmout}{" "}
                          </div>
                          <button onClick={() => addCart(props.id)}>
                            <img src={iconeMais} alt="" />
                          </button>
                        </div>

                        <button className="actionsRemove">
                          <img
                            className="imgAndTextActionsRemove"
                            src={trash}
                            alt=""
                          />
                          <span className="imgAndTextActionsRemove">
                            Remover
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="priceCoffeeItens">
                    <p>R$ {props.CoffeePrice}</p>
                  </div>
                </div>

                <hr className="hrCoffeItens" />
              </div>
            ))}
          </div>

          <div className="priceSummary">
            <div>
              <p>Total de itens</p>
              <p>R$ {totalPrice}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="totalPrice">
              <p>Total</p>
              <p>R$ {totalPrice + 3.50}</p>
            </div>
          </div>
          <button className="confirmPurchase">
            <NavLink to="/success">
              <p>Confirmar Pedido</p>
            </NavLink>
          </button>
        </ContainerRightCountCoffe>
      </CheckoutRight>
    </ContainerCheckout>
  );
}
