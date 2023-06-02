import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store//store';
import { addProduct, setProducts } from "../store/product/productSilce";
import productsApi from "../api/axios";
import { Product } from "../models/models";


export const useProductStore = () => {
  
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.products);

  const loadingProducts = async() => {
    try {
      const {data} = await productsApi.get('/item');
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }

  const loadingProductsInOffer = async() => {
    try {
      const {data} = await productsApi.get('/item');
      const inOffer = data.filter((product: Product) => product.is_offer === true);
      dispatch(setProducts(inOffer));
    } catch (error) {
      console.log(error);
    }
  }

  const savingProduct = async(item:Product) => {
    try {
      
      await productsApi.post('/item', item)
      dispatch(addProduct(item));
    } catch (error) {
      console.log(error);
      
    }

  }

  
  return {
    //*Propiedades
    products,

    //*Metodos
    loadingProducts,
    loadingProductsInOffer,
    savingProduct
  }
}
