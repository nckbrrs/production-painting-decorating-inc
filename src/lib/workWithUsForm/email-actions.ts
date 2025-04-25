"use server";

import { Resend } from "resend";
import { z } from "zod";
import { workWithUsFormSchema } from "./workWithUsFormSchema";

export async function sendApplicationEmail(formData: FormData) {
	try {
		// Extract and validate the form data
		const rawData = {
			fullName: formData.get("fullName"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			experienceLevel: formData.get("experienceLevel"),
			availableStartDate: formData.get("availableStartDate"),
			resume: formData.get("resume"),
			additionalInfo: formData.get("additionalInfo")
		};

		// Validate the form data
		const validatedData = workWithUsFormSchema.parse(rawData);

		// Initialize Resend (you'll need to add RESEND_API_KEY to your environment variables)
		const resend = new Resend(process.env.RESEND_API_KEY);

		// Format the date
		const formattedDate =
			validatedData.availableStartDate.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric"
			});

		// Map experience level to readable text
		const experienceLevelMap: Record<string, string> = {
			entry: "Entry Level (0-2 years)",
			intermediate: "Intermediate (2-5 years)",
			experienced: "Experienced (5-10 years)",
			expert: "Expert (10+ years)"
		};

		// Create email content
		const emailHtml = `
      <h1>New Job Application</h1>
      <p>You have received a new job application from your website.</p>
      
      <h2>Applicant Details:</h2>
      <ul>
        <li><strong>Name:</strong> ${validatedData.fullName}</li>
        <li><strong>Email:</strong> ${validatedData.email}</li>
        <li><strong>Phone:</strong> ${validatedData.phone}</li>
        <li><strong>Experience Level:</strong> ${experienceLevelMap[validatedData.experienceLevel] || validatedData.experienceLevel}</li>
        <li><strong>Available Start Date:</strong> ${formattedDate}</li>
        ${validatedData.resume ? `<li><strong>Resume/Portfolio:</strong> <a href="${validatedData.resume}">${validatedData.resume}</a></li>` : ""}
      </ul>
      
      ${
			validatedData.additionalInfo
				? `
      <h2>Additional Information:</h2>
      <p>${validatedData.additionalInfo}</p>
      `
				: ""
		}
    `;

		// Send the email
		const { data, error } = await resend.emails.send({
			from: "Job Application <no-reply@nickbarrs.com>",
			to: ["resend@nickbarrs.com"],
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
