

//* MODELO DE PRODUCTO (Item)
export interface Product {
  id?: number;
  name: string;
  imgUrl: string;
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
  productId: number;
  price: number;
  quantity: number;
}

