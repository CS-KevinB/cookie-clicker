/*
  Warnings:

  - You are about to drop the column `cookiesPerSecond` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "cookiesPerSecond";

-- CreateTable
CREATE TABLE "Building" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "basePrice" INTEGER NOT NULL,
    "baseRate" DOUBLE PRECISION NOT NULL,
    "purchased" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Building_userId_type_key" ON "Building"("userId", "type");

-- AddForeignKey
ALTER TABLE "Building" ADD CONSTRAINT "Building_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
