import { useDispatch, useSelector } from "react-redux"
import { onCloseModal, onOpenModal } from "../store/ui/uiSlice";
import { RootState } from '../store//store';





export const useUiStore = () => {
  
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector( (state:RootState) => state.ui)

  const openModal = () => {
    dispatch(onOpenModal());
  }

  const closeModal = () => {
    dispatch(onCloseModal());
  }
  
  return{

    //*Propiedades
    isModalOpen,
    
    
    //*Metodos
    openModal,
    closeModal,
  }
}
