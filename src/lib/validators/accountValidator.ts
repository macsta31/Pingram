import { z } from "zod";

export const AccountSchema = z.object({
	name: z.string(),
	apiKey: z.string(),
});
