import { z } from "zod";

export const careersFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name must be at least 2 characters" })
		.max(32, { message: "Name must be at most 32 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	message: z
		.string()
		.max(1000, { message: "Message must be at most 1000 characters" })
		.optional(),
	phoneNumber: z
		.string()
		.min(10, { message: "Phone number must be at least 10 digits" })
		.max(15, { message: "Phone number must be at most 15 digits" })
		.regex(/^[0-9+\-\s()]+$/, { message: "Invalid phone number format" }),
	workAuthorization: z.enum(["Yes", "No"], {
		required_error: "Please select your work authorization status"
	}),
	visaSponsorship: z.enum(["Yes", "No"], {
		required_error: "Please select your visa sponsorship requirement"
	})
});
