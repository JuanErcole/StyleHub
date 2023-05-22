import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import { addItem } from "../store/cart/cartSlice";
import { CartItem } from "../models/models";

export const useCartStore = () => {

  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.cart);    

  const onAddItem = (cartItem:CartItem ) => {
    dispatch( addItem(cartItem) )
  }

  return {
    //*Propiedades
    items,


    //*Metodos
    onAddItem

  }
}
