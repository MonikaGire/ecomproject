import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  cart: []
};

const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    resetCart(state) {
      state.cart = [];
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { setCart, resetCart } = slice.actions;

// ----------------------------------------------------------------------
