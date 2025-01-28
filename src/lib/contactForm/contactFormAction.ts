"use server";

import { contactFormSchema } from "./contactFormSchema";
import { z } from "zod";

export async function contactFormAction(
	_prevState: unknown,
	formData: FormData
) {
	const defaultValues = z
		.record(z.string(), z.string())
		.parse(Object.fromEntries(formData.entries()));

	try {
		const data = contactFormSchema.parse(Object.fromEntries(formData));

		console.log(data);

		return {
			formValues: {
				name: data.name,
				email: data.email,
				phoneNumber: data.phoneNumber,
				inquiryType: data.inquiryType,
				message: data.message
			},
			success: true,
			errors: null
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				formValues: defaultValues,
				success: false,
				errors: Object.fromEntries(
					Object.entries(error.flatten().fieldErrors).map(
						([key, value]) => [key, value?.join(", ")]
					)
				)
			};
		}

		return {
			formValues: defaultValues,
			success: false,
			errors: null
		};
	}
}
