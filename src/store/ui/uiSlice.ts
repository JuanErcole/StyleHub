import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UISliceState {

  isModalOpen: boolean;
}

const initialState: UISliceState = {
  isModalOpen: false,
};

const uiSlice = createSlice({ 
  name: 'ui',
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isModalOpen = true;
    },
    onCloseModal: (state) => {
      state.isModalOpen = false; 
    },
  },
});

export const { onOpenModal, onCloseModal } = uiSlice.actions;
export default uiSlice.reducer;
