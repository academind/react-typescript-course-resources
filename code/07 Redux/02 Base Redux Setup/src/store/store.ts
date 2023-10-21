import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice.ts';

configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});
