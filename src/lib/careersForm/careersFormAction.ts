"use server";

import { careersFormSchema } from "./careersFormSchema";
import { z as zod } from "zod";

export async function careersFormAction(
	_prevState: unknown,
	formData: FormData
) {
	const defaultValues = zod
		.record(zod.string(), zod.string())
		.parse(Object.fromEntries(formData.entries()));

	try {
		const data = careersFormSchema.parse(Object.fromEntries(formData));

		return {
			formValues: {
				name: data.name || "",
				email: data.email || "",
				phoneNumber: data.phoneNumber || "",
				message: data.message || "",
				workAuthorization: data.workAuthorization || "",
				visaSponsorship: data.visaSponsorship || ""
			},
			success: true,
			errors: null
		};
	} catch (error) {
		if (error instanceof zod.ZodError) {
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
