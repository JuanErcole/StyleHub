import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store//store';
import { setProducts } from "../store/product/productSilce";
import productsApi from "../api/axios";
import { Product } from "../models/models";



export const useProductStore = () => {
  
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.products);

  const startLoadingProducts = async() => {
    try {
      const {data} = await productsApi.get('/item');
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }

  const startLoadingProductsInOffer = async() => {
    try {
      const {data} = await productsApi.get('/item');
      const inOffer = data.filter((product: Product) => product.is_offer === true);
      dispatch(setProducts(inOffer));
    } catch (error) {
      console.log(error);
    }
  }
  
  return {
    //*Propiedades
    products,

    //*Metodos
    startLoadingProducts,
    startLoadingProductsInOffer
  }
}
