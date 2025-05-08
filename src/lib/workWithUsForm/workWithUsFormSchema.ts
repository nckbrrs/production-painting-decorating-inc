import { z } from "zod";

export const workWithUsFormSchema = z.object({
	fullName: z.string().min(2, { message: "Please enter full name" }),
	email: z.string().email({ message: "Please enter a valid email address" }),
	phone: z
		.string()
		.regex(/^(\+\d{1,3}[- ]?)?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/, {
			message:
				"Please enter a valid phone number (e.g., (123) 456-7890 or 123-456-7890)"
		}),
	yearsOfExperience: z.string().min(1, {
		message: "Please enter your years of experience"
	}),
	experienceType: z.string({
		required_error: "Please select your experience type"
	}),
	specialSkills: z
		.string()
		.max(500, {
			message: "Special skills must not exceed 500 characters"
		})
		.optional()
		.or(z.literal("")),
	reference1Name: z.string().min(2, { message: "Please enter full name" }),
	reference1Phone: z
		.string()
		.regex(/^(\+\d{1,3}[- ]?)?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/, {
			message:
				"Please enter a valid phone number (e.g., (123) 456-7890 or 123-456-7890)"
		}),
	reference2Name: z.string().min(2, { message: "Please enter full name" }),
	reference2Phone: z
		.string()
		.regex(/^(\+\d{1,3}[- ]?)?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/, {
			message:
				"Please enter a valid phone number (e.g., (123) 456-7890 or 123-456-7890)"
		}),
	desiredPay: z.string().min(1, {
		message: "Please enter your desired pay"
	}),
	payType: z.enum(["hourly", "yearly"], {
		required_error: "Please select pay type"
	}),
	preferredLanguage: z.string().min(1, {
		message: "Please enter your preferred language"
	})
});
