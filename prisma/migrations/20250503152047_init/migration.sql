-- AlterTable
ALTER TABLE "Reminder" ADD COLUMN     "cancelledAt" TIMESTAMP(3),
ADD COLUMN     "failedAt" TIMESTAMP(3);
