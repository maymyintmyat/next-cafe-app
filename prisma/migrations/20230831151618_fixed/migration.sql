/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PREPARING', 'COMPLETE', 'REJECTED');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tables" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "assetUrl" TEXT,
    "locationId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "assetUrl" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MenuCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenusMenuCategoriesLocations" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER,
    "menuCategoryId" INTEGER NOT NULL,
    "locationId" INTEGER,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MenusMenuCategoriesLocations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "locationId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orderlines" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,
    "itemId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orderlines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tables" ADD CONSTRAINT "Tables_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenusMenuCategoriesLocations" ADD CONSTRAINT "MenusMenuCategoriesLocations_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenusMenuCategoriesLocations" ADD CONSTRAINT "MenusMenuCategoriesLocations_menuCategoryId_fkey" FOREIGN KEY ("menuCategoryId") REFERENCES "MenuCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenusMenuCategoriesLocations" ADD CONSTRAINT "MenusMenuCategoriesLocations_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Orderlines" ADD CONSTRAINT "Orderlines_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Orderlines" ADD CONSTRAINT "Orderlines_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
