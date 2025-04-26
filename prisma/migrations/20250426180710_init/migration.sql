/*
  Warnings:

  - You are about to drop the column `channels` on the `Reminder` table. All the data in the column will be lost.
  - Added the required column `title` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "channels",
ADD COLUMN     "message" TEXT,
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "title" TEXT NOT NULL;
