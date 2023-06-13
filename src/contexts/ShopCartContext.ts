import { createContext } from 'react'

// export const ShopCartContext = createContext([])

// export const deliveryInfoContext = createContext({})


export interface Coffee {
  id: string;
  CoffeeImage: string;
  CoffeeType: string;
  CoffeeTitle: string;
  CoffeeDescription: string;
  CoffeePrice: string;
  CoffeAmout: number;
}

interface ShopCartContextType {
  shopCart: Coffee[];
  setShopCart: React.Dispatch<React.SetStateAction<Coffee[]>>;
}

export interface DeliveryInfo {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  valorDaCompra: number;
  FormaDePagamento: string;
}

interface DeliveryInfoContextType {
  deliveryInfo: DeliveryInfo;
  setDeliveryInfo: React.Dispatch<React.SetStateAction<DeliveryInfo>>;
}

export const ShopCartContext = createContext<ShopCartContextType>({
  shopCart: [],
  setShopCart: () => {},
});

export const DeliveryInfoContext = createContext<DeliveryInfoContextType>({
  deliveryInfo: {
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    valorDaCompra: 0,
    FormaDePagamento: "",
  },
  setDeliveryInfo: () => {},
});
