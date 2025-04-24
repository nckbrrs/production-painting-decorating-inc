"use server";

import { inquiryFormSchema } from "./inquiryFormSchema";
import { z } from "zod";

export async function inquiryFormAction(
	_prevState: unknown,
	formData: FormData
) {
	const defaultValues = z
		.record(z.string(), z.string())
		.parse(Object.fromEntries(formData.entries()));

	try {
		const data = inquiryFormSchema.parse(Object.fromEntries(formData));

		console.log(data);

		return {
			formValues: {
				name: data.name,
				email: data.email,
				phoneNumber: data.phoneNumber,
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
