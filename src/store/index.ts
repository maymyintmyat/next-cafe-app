import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import cartSlice from "./slices/cartSlice";
import companySlice from "./slices/companySlice";
import locationsSlice from "./slices/locationsSlice";
import menuCategoriesSlice from "./slices/menuCategoriesSlice";
import menusMenuCategoriesLocationsSlice from "./slices/menusMenuCategoriesLocationsSlice";
import menusSlice from "./slices/menusSlice";
import orderlinesSlice from "./slices/orderlinesSlice";
import ordersSlice from "./slices/ordersSlice";
import tablesSlice from "./slices/tablesSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    company: companySlice,
    locations: locationsSlice,
    menuCategories: menuCategoriesSlice,
    menusMenuCategoriesLocations: menusMenuCategoriesLocationsSlice,
    menus: menusSlice,
    orderlines: orderlinesSlice,
    orders: ordersSlice,
    tables: tablesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
