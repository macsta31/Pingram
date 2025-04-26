-- DropForeignKey
ALTER TABLE "SequenceStep" DROP CONSTRAINT "SequenceStep_templateId_fkey";

-- AlterTable
ALTER TABLE "SequenceStep" ALTER COLUMN "templateId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SequenceStep" ADD CONSTRAINT "SequenceStep_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;
