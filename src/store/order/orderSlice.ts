import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  items: { productId: string; quantity: number }[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: []
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder:(state, action: PayloadAction<Order[]> ) => {
      state.orders = action.payload;
    }
  }
});





