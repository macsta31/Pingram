import { z } from "zod";

export const CustomerSchema = z.object({
	accountId: z.string().uuid(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	phoneNumber: z.string(),
	externalId: z.string(),
});
