import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice.ts';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;