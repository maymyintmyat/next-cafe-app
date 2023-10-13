import { CartItem } from "@/store/slices/cartSlice";
import {
  Locations as Location,
  Menus as Menu,
  MenusMenuCategoriesLocations,
  Orderlines as Orderline,
} from "@prisma/client";

export const getSelectedLocationId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("selectedLocationId");
  }
  return "";
};

export const getMenusByMenuCategoryId = (
  menus: Menu[],
  menuCategoryId: string,
  menusMenuCategoriesLocations: MenusMenuCategoriesLocations[],
  selectedLocationId: string
) => {
  const validMenuIds = menusMenuCategoriesLocations
    .filter(
      (item) =>
        item.menuId &&
        item.menuCategoryId === Number(menuCategoryId) &&
        item.locationId === Number(selectedLocationId)
    )
    .map((item) => item.menuId);
  return menus.filter((item) => validMenuIds.includes(item.id));
};

export const getLocationsByMenuCategoryId = (
  locations: Location[],
  menuCategoryId: string,
  menusMenuCategoriesLocations: MenusMenuCategoriesLocations[]
) => {
  const validLocationIds = menusMenuCategoriesLocations
    .filter((item) => item.menuCategoryId === Number(menuCategoryId))
    .map((item) => item.locationId);
  return locations.filter((item) => validLocationIds.includes(item.id));
};

export const getQrCodeUrl = (locationId: number, tableId: number) => {
  return `https://cafe-pos.s3.us-east-005.backblazeb2.com/cafe-pos-/stella/qrcode/locationId-${locationId}-tableId-${tableId}.png`;
};

export const getNumberOfMenusByOrderId = (
  orderlines: Orderline[],
  orderId: number
): number => {
  const validOrderlines = orderlines.filter((item) => item.orderId === orderId);
  const menuIds: number[] = [];
  validOrderlines.forEach((item) => {
    const hasAdded = menuIds.find((menuId) => menuId === item.menuId);
    if (!hasAdded) menuIds.push(item.menuId);
  });
  return menuIds.length;
};

// export const getCartTotalPrice = (cart: CartItem[]) => {
//   const totalPrice = cart.reduce((prev, curr) => {
//     const menuPrice = curr.menu.price;
//     prev += menuPrice * curr.quantity;
//     return prev;
//   }, 0);
//   return totalPrice;
// };

export const getCartTotalPrice = (cart: CartItem[]) => {
  const totalPrice = cart.reduce((total, cart) => {
    const menuPrice = cart.menu.price;
    total += menuPrice * cart.quantity;
    return total;
  }, 0);
  return totalPrice;
};

export const generateRandomId = () =>
  (Math.random() + 1).toString(36).substring(7);

export const getMenuByMenuId = (menus: Menu[], menuId: number) =>
  menus.find((item) => item.id === menuId);
