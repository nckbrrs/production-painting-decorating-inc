"use client";

import { useState } from "react";
import { useActionState } from "react";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "~/components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "~/components/ui/popover";
import { toast } from "~/components/ui/use-toast";
import { sendApplicationEmail } from "~/lib/workWithUsForm/email-actions";
import { Label } from "~/components/ui/label";
import { z } from "zod";
import { workWithUsFormSchema } from "~/lib/workWithUsForm/workWithUsFormSchema";
import { Check } from "lucide-react";

export function WorkWithUsForm() {
	const [state, formAction, isPending] = useActionState(
		async (_prevState: unknown, formData: FormData) => {
			const defaultValues = z
				.record(z.string(), z.string())
				.parse(Object.fromEntries(formData.entries()));

			try {
				const data = workWithUsFormSchema.parse(
					Object.fromEntries(formData)
				);

				console.log(data);

				await sendApplicationEmail(formData);

				return {
					formValues: {
						fullName: data.fullName,
						email: data.email,
						phone: data.phone,
						additionalInfo: data.additionalInfo
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
		},
		{
			formValues: {
				fullName: "",
				email: "",
				phoneNumber: "",
				additionalInfo: ""
			},
			success: false,
			errors: null
		}
	);

	const placeholderVals = {
		fullName: "John Doe",
		email: "hello@ppd_online.com",
		phoneNumber: "+1 (555) 123-4567",
		additionalInfo: "Anything else you'd like us to know?"
	};

	return state.success ? (
		<p className="text-green-600 font-semibold p-6 md:p-12 flex justify-center items-center gap-2 text-lg">
			<Check className="size-8 md:size-10" />
			Your message has been sent. Thank you.
		</p>
	) : (
		<form action={formAction} className="space-y-6">
			<div
				className="group/field grid gap-2"
				data-invalid={!!state.errors?.fullName}
			>
				<Label htmlFor="fullName">Full Name</Label>
				<Input
					id="fullName"
					name="fullName"
					placeholder={placeholderVals.fullName}
					className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
					disabled={isPending}
					aria-invalid={!!state.errors?.fullName}
					aria-errormessage="error-name"
					defaultValue={state.formValues.fullName}
				/>
				{state.errors?.fullName && (
					<p
						id="error-name"
						className="text-destructive text-sm md:text-md"
					>
						{state.errors.fullName}
					</p>
				)}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div
					className="group/field grid gap-2"
					data-invalid={!!state.errors?.email}
				>
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder={placeholderVals.email}
						className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
						disabled={isPending}
						aria-invalid={!!state.errors?.email}
						aria-errormessage="error-email"
						defaultValue={state.formValues.email}
					/>
					{state.errors?.email && (
						<p
							id="error-email"
							className="text-destructive text-sm md:text-md"
						>
							{state.errors.email}
						</p>
					)}
				</div>

				<div
					className="group/field grid gap-2"
					data-invalid={!!state.errors?.phone}
				>
					<Label htmlFor="phone">Phone Number</Label>
					<Input
						id="phone"
						name="phone"
						placeholder={placeholderVals.phoneNumber}
						className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
						disabled={isPending}
						aria-invalid={!!state.errors?.phone}
						aria-errormessage="error-phoneNumber"
						defaultValue={state.formValues.phone}
					/>
					{state.errors?.phone && (
						<p
							id="error-phoneNumber"
							className="text-destructive text-sm md:text-md"
						>
							{state.errors.phone}
						</p>
					)}
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="additionalInfo">
					Additional Information (Optional)
				</Label>
				<Textarea
					id="additionalInfo"
					name="additionalInfo"
					placeholder={placeholderVals.additionalInfo}
					className="min-h-[120px]"
				/>
				<p className="text-sm text-muted-foreground">
					Max 500 characters
				</p>
			</div>

			<Button type="submit" className="w-full" disabled={isPending}>
				{isPending ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Submitting...
					</>
				) : (
					"Submit"
				)}
			</Button>
		</form>
	);
}
