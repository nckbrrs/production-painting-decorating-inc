"use server";

import { Resend } from "resend";
import { workWithUsFormSchema } from "./workWithUsFormSchema";
import { inquiryFormSchema } from "../inquiryForm/inquiryFormSchema";

export async function sendGeneralInquiryEmail(formData: FormData) {
	try {
		// Extract and validate the form data
		const rawData = {
			name: formData.get("name"),
			email: formData.get("email"),
			phoneNumber: formData.get("phoneNumber"),
			message: formData.get("message")
		};

		// Validate the form data
		const validatedData = inquiryFormSchema.parse(rawData);

		// Initialize Resend (you'll need to add RESEND_API_KEY to your environment variables)
		const resend = new Resend(process.env.RESEND_API_KEY);
		// Create email content
		const emailHtml = `
      <h1>New "General Inquiry" Form Submission</h1>
      <p>You have received a new inquiry form submission from your website!</p>
      
      <h2>Applicant Details:</h2>
      <ul>
        <li><strong>Name:</strong> ${validatedData.name}</li>
        <li><strong>Email:</strong> ${validatedData.email}</li>
        <li><strong>Phone:</strong>&nbsp;<a href="tel:${validatedData.phoneNumber}">${validatedData.phoneNumber}</a></li>
      </ul>
      <h2>Message:</h2>
	  <ul>
        <li>${validatedData.message}</li>
      </ul>
    `;

		// Send the email
		const { data, error } = await resend.emails.send({
			from: "General Inquiry <no-reply@nickbarrs.com>",
			to: ["resend@nickbarrs.com", "resend2@nickbarrs.com"],
			subject: `New General Inquiry`,
			html: emailHtml,
			replyTo: validatedData.email
		});

		if (error) {
			console.error("Email sending failed:", error);
			throw new Error("Failed to send application email");
		}

		return { success: true };
	} catch (error) {
		console.error("Email action error:", error);
		throw new Error(
			error instanceof Error
				? error.message
				: "Failed to process application"
		);
	}
}

export async function sendCareersInterestFormEmail(formData: FormData) {
	try {
		// Extract and validate the form data
		const rawData = {
			fullName: formData.get("fullName"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			yearsOfExperience: formData.get("yearsOfExperience"),
			experienceType: formData.get("experienceType"),
			specialSkills: formData.get("specialSkills"),
			reference1Name: formData.get("reference1Name"),
			reference1Phone: formData.get("reference1Phone"),
			reference2Name: formData.get("reference2Name"),
			reference2Phone: formData.get("reference2Phone"),
			desiredPay: formData.get("desiredPay"),
			payType: formData.get("payType"),
			preferredLanguage: formData.get("preferredLanguage")
		};

		// Validate the form data
		const validatedData = workWithUsFormSchema.parse(rawData);

		// Initialize Resend (you'll need to add RESEND_API_KEY to your environment variables)
		const resend = new Resend(process.env.RESEND_API_KEY);
		// Create email content
		const emailHtml = `
      <h1>New "Work With Us" Interest Form Submission</h1>
      <p>You have received a new interest form submission from your website!</p>
      
      <h2>Applicant Details:</h2>
      <ul>
        <li><strong>Name:</strong> ${validatedData.fullName}</li>
        <li><strong>Email:</strong> ${validatedData.email}</li>
        <li><strong>Phone:</strong>&nbsp;<a href="tel:${validatedData.phone}">${validatedData.phone}</a></li>
      </ul>
      <h2>Experience Details:</h2>
      <ul>
        <li><strong>Years of Experience:</strong> ${validatedData.yearsOfExperience}</li>
        <li><strong>Experience Type:</strong> ${validatedData.experienceType}</li>
        <li><strong>Special Skills:</strong> ${validatedData.specialSkills}</li>
      </ul>
      <h2>References:</h2>
      <ul>
        <li><strong>Reference 1:</strong> ${validatedData.reference1Name} (<a href="tel:${validatedData.reference1Phone}">${validatedData.reference1Phone}</a>)</li>
        <li><strong>Reference 2:</strong> ${validatedData.reference2Name} (<a href="tel:${validatedData.reference2Phone}">${validatedData.reference2Phone}</a>)</li>
      </ul>
      <h2>Pay Details:</h2>
      <ul>
        <li><strong>Desired Pay:</strong> ${validatedData.desiredPay}/${validatedData.payType === "hourly" ? "hour" : "year"}</li>
        <li><strong>Preferred Language:</strong> ${validatedData.preferredLanguage}</li>
      </ul>
    `;

		// Send the email
		const { data, error } = await resend.emails.send({
			from: "Job Application <no-reply@nickbarrs.com>",
			to: ["resend@nickbarrs.com", "resend2@nickbarrs.com"],
			subject: `New Job Application: ${validatedData.fullName}`,
			html: emailHtml,
			replyTo: validatedData.email
		});

		if (error) {
			console.error("Email sending failed:", error);
			throw new Error("Failed to send application email");
		}

		return { success: true };
	} catch (error) {
		console.error("Email action error:", error);
		throw new Error(
			error instanceof Error
				? error.message
				: "Failed to process application"
		);
	}
}
