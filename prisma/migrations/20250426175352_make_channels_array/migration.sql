/*
  Warnings:

  - You are about to drop the column `channel` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `channel` on the `SequenceStep` table. All the data in the column will be lost.
  - You are about to drop the column `channel` on the `Template` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "channel",
ADD COLUMN     "channels" TEXT[];

-- AlterTable
ALTER TABLE "SequenceStep" DROP COLUMN "channel",
ADD COLUMN     "channels" TEXT[];

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "channel",
ADD COLUMN     "channels" TEXT[];
