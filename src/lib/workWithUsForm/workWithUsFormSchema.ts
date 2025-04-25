import { z } from "zod";

export const workWithUsFormSchema = z.object({
	fullName: z
		.string()
		.min(2, { message: "Full name must be at least 2 characters" }),
	email: z.string().email({ message: "Please enter a valid email address" }),
	phone: z.string().min(10, { message: "Please enter a valid phone number" }),
	experienceLevel: z.string().min(1, {
		message: "Please select your experience level"
	}),
	availableStartDate: z
		.string()
		.min(1, { message: "Please select a valid start date" })
		.transform((str) => new Date(str)),
	resume: z
		.string()
		.url({ message: "Please enter a valid URL" })
		.optional()
		.or(z.literal("")),
	additionalInfo: z
		.string()
		.max(500, {
			message: "Additional information must not exceed 500 characters"
		})
		.optional()
		.or(z.literal(""))
});
