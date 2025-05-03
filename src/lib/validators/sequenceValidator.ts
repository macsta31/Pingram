import { z } from "zod";
import { parseISO, isValid } from "date-fns";

export const SequenceStatusEnum = z.enum(["pending", "completed", "failed"])

export const SequenceSchema = z.object({
	accountId: z.string().uuid(),
	sequenceTemplateId: z.string().uuid(),
	startAt: z.string().refine((val) => {
		const parsed = parseISO(val);
		return isValid(parsed)
	}, { message: "Invalid ISO timestamp" }),
	status: SequenceStatusEnum,
	cancelledAt: z.string().optional(),
	customerId: z.string().uuid(),
});
