"use server";

import { sendGeneralInquiryEmail } from "../workWithUsForm/email-actions";
import { inquiryFormSchema } from "./inquiryFormSchema";
import { z } from "zod";

export async function inquiryFormAction(_prevState: unknown, formData: FormData) {
  const defaultValues = Object.fromEntries(formData.entries()) as Record<string, string>;

  try {
    const data = inquiryFormSchema.parse(Object.fromEntries(formData));

    await sendGeneralInquiryEmail(formData);

    return {
      formValues: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message,
      },
      success: true,
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        formValues: defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            Array.isArray(value) ? value.join(", ") : value,
          ])
        ),
      };
    }

    return { formValues: defaultValues, success: false, errors: null };
  }
}
