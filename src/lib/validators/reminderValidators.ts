import { z } from "zod";

import { isValid, parseISO } from "date-fns";

export const ReminderStatusEnum = z.enum(['pending', 'sent', 'failed', 'cancelled'])

export const ReminderSchema = z.object({
	sequenceId: z.string().uuid(),
	customerId: z.string().uuid(),
	accountId: z.string().uuid(),
	stepId: z.string().uuid(),
	sendAt: z.string().refine((val) => {
		const parsed = parseISO(val);
		return isValid(parsed);
	}, {
		message: 'Invalid ISO timestamp',
	}),
	status: ReminderStatusEnum,
	channels: z.array(z.string()).optional(),
	message: z.string().optional(),
	title: z.string().optional(),
})

export type CreateReminderInput = z.infer<typeof ReminderSchema>
