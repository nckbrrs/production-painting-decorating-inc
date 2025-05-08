import { z } from "zod";

export const inquiryFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Please enter full name" })
		.max(32, { message: "Name must be at most 32 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	phoneNumber: z
		.string()
		.regex(/^(\+\d{1,3}[- ]?)?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/, {
			message:
				"Please enter a valid phone number (e.g., (123) 456-7890 or 123-456-7890)"
		}),
	message: z
		.string()
		.min(1, { message: "Message cannot be empty" })
		.max(1000, { message: "Message cannot be longer than 1000 characters" })
});
