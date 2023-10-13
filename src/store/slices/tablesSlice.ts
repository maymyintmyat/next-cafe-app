import { Tables as Table } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TablesState {
  isLoading: boolean;
  items: Table[];
  error: Error | null;
}

const initialState: TablesState = {
  isLoading: false,
  items: [],
  error: null,
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTables: (state, action) => {
      state.items = action.payload;
    },
    addTables: (state, action: PayloadAction<Table>) => {
      state.items = [...state.items, action.payload];
    },
    removeTables: (state, action: PayloadAction<Table>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateTables: (state, action: PayloadAction<Table>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const {
  setIsLoading,
  setTables,
  addTables,
  removeTables,
  updateTables,
} = tablesSlice.actions;

export default tablesSlice.reducer;
