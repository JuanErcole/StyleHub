import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import { addItem } from "../store/cart/cartSlice";
import { CartItem } from "../models/models";
import axios from "../api/axios";

export const useCartStore = () => {

  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.cart);    

  const onAddItem = (cartItem:CartItem ) => {
    dispatch( addItem(cartItem) )
  }

  const loadCart = async(id: number) => {

    try {
      const { data } = await axios.get(`/cart/${id}`);
      
      console.log(data);

    } catch (error) {
      
    }

    
  }

  return {
    //*Propiedades
    items,


    //*Metodos
    onAddItem,
    loadCart

  }
}
