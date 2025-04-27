import { z } from "zod";

export const SequenceStepSchema = z.object({
	sequenceTemplateId: z.string().uuid(),
	order: z.number().int(),
	delayMinutes: z.number().int(),
	templateId: z.string().uuid().optional(),
	channels: z.array(z.string()),
});
