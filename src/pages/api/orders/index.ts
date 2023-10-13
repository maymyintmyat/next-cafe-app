// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    const locationId = Number(req.query.locationId);
    if (!locationId) return res.status(400).send("Bad request");
    const location = await prisma.locations.findFirst({
      where: { id: locationId, isArchived: false },
    });

    const menusMenuCategoriesLocations =
      await prisma.menusMenuCategoriesLocations.findMany({
        where: {
          locationId: locationId,
          isArchived: false,
        },
      });
    const menuIds = menusMenuCategoriesLocations
      .map((item) => item.menuId)
      .filter((item) => item !== null) as number[];
    const menuCategoryIds = menusMenuCategoriesLocations.map(
      (item) => item.menuCategoryId
    );
    const menus = await prisma.menus.findMany({
      where: { id: { in: menuIds }, isArchived: false },
    });
    const menuCategories = await prisma.menuCategories.findMany({
      where: { id: { in: menuCategoryIds }, isArchived: false },
    });

    const orders = await prisma.orders.findMany({
      where: { locationId },
    });
    const orderIds = orders.map((item) => item.id);
    const orderlines = await prisma.orderlines.findMany({
      where: { orderId: { in: orderIds } },
    });
    res.send({
      location: [location],
      menus,
      menuCategories,
      menusMenuCategoriesLocations,
      orders,
      orderlines,
    });
  }
  res.status(405).send("Method not allowed");
}
