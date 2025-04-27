import { z } from "zod";

export const SequenceTemplateSchema = z.object({
	accountId: z.string().uuid(),
	name: z.string(),
	cancelOnEvent: z.string().optional(),
});
