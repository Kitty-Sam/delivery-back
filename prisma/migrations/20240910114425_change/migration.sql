/*
  Warnings:

  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `_FoodToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "_FoodToUser" DROP CONSTRAINT "_FoodToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FoodToUser" DROP CONSTRAINT "_FoodToUser_B_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "userId",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "_FoodToUser";
