

//* MODELO DE PRODUCTO (Item)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  is_offer: boolean;
  // stock: number;
}


//* MODELO DE CARRITO
export interface CartState {
  items: CartItem[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}


//* MODELO DE CARD
export interface CardItemProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  isOffer: boolean;
}