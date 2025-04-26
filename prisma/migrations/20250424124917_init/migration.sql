/*
  Warnings:

  - Added the required column `customerId` to the `Sequence` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reminder" DROP CONSTRAINT "Reminder_templateId_fkey";

-- AlterTable
ALTER TABLE "Reminder" ALTER COLUMN "templateId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sequence" ADD COLUMN     "customerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Sequence" ADD CONSTRAINT "Sequence_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;
