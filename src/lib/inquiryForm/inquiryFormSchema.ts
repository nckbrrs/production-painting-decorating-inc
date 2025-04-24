import { z } from "zod";

export const inquiryFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name must be at least 2 characters" })
		.max(32, { message: "Name must be at most 32 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	phoneNumber: z
		.string()
		.min(10, { message: "Phone number must be at least 10 digits" })
		.max(15, { message: "Phone number must be at most 15 digits" })
		.regex(/^[0-9+\-\s()]+$/, { message: "Invalid phone number format" }),
	message: z
		.string()
		.min(1, { message: "Message cannot be empty" })
		.max(1000, { message: "Message cannot be longer than 1000 characters" })
});
