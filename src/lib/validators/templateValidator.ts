import { z } from "zod";

export const TemplateSchema = z.object({
	accountId: z.string().uuid(),
	name: z.string(),
	content: z.string(),
	channels: z.array(z.string()),
	title: z.string(),
});
