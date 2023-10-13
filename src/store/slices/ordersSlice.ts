import { Orders as Order } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OrderState {
  isLoading: boolean;
  items: Order[];
  error: Error | null;
}

const initialState: OrderState = {
  isLoading: false,
  items: [],
  error: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.items = action.payload;
    },
    addOrders: (state, action: PayloadAction<Order>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setOrders, addOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
