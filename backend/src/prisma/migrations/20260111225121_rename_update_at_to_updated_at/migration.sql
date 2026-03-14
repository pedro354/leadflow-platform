/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Lead` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" RENAME COLUMN "updateAt" TO "updatedAt";
