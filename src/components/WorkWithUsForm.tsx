"use client";

import { useState } from "react";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "~/components/ui/select";
import { sendCareersInterestFormEmail } from "~/lib/workWithUsForm/email-actions";
import { Label } from "~/components/ui/label";
import { z } from "zod";
import { workWithUsFormSchema } from "~/lib/workWithUsForm/workWithUsFormSchema";
import { Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Switch } from "~/components/ui/switch";

export function WorkWithUsForm() {
	const [payType, setPayType] = useState<"hourly" | "yearly">("hourly");

	const [state, formAction, isPending] = useActionState(
		async (_prevState: unknown, formData: FormData) => {
			const defaultValues = z
				.record(z.string(), z.string())
				.parse(Object.fromEntries(formData.entries()));

			try {
				const formDataObj = Object.fromEntries(formData);
				console.log("Form data before validation:", formDataObj); // Debug log

				formData.set("payType", payType);
				const data = workWithUsFormSchema.parse(
					Object.fromEntries(formData)
				);

				console.log(data);

				await sendCareersInterestFormEmail(formData);

				return {
					formValues: {
						fullName: data.fullName,
						email: data.email,
						phone: data.phone,
						yearsOfExperience: data.yearsOfExperience,
						experienceType: data.experienceType,
						specialSkills: data.specialSkills,
						reference1Name: data.reference1Name,
						reference1Phone: data.reference1Phone,
						reference2Name: data.reference2Name,
						reference2Phone: data.reference2Phone,
						desiredPay: data.desiredPay,
						payType: data.payType,
						preferredLanguage: data.preferredLanguage
					},
					success: true,
					errors: null
				};
			} catch (error) {
				console.log(error);

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
				phone: "",
				yearsOfExperience: "",
				experienceType: "",
				specialSkills: "",
				reference1Name: "",
				reference1Phone: "",
				reference2Name: "",
				reference2Phone: "",
				desiredPay: "",
				payType: "hourly",
				preferredLanguage: "",
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
		yearsOfExperience: "0-1 years",
		specialSkills: "Spray machine, wallcovering, etc.",
		reference1Name: "Jane Smith",
		reference1Phone: "+1 (555) 987-6543",
		reference2Name: "John Doe",
		reference2Phone: "+1 (555) 123-4567",
		desiredPay: "$",
		preferredLanguage: "English",
		additionalInfo: "Anything else you'd like us to know?"
	};

	const handlePayTypeChange = (checked: boolean) => {
		setPayType(checked ? "yearly" : "hourly");
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
					className="group/field gap-2 flex flex-col"
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
					className="group/field gap-2 flex flex-col"
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
							className="text-destructive text-sm md:text-md w-full"
						>
							{state.errors.phone}
						</p>
					)}
				</div>
			</div>

			<div
				className="group/field gap-2 flex flex-col"
				data-invalid={!!state.errors?.yearsOfExperience}
			>
				<Label htmlFor="yearsOfExperience">
					Years of relevant work experience?
				</Label>
				<Input
					id="yearsOfExperience"
					name="yearsOfExperience"
					placeholder={placeholderVals.yearsOfExperience}
					className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
					disabled={isPending}
					defaultValue={state.formValues.yearsOfExperience}
				/>
				{state.errors?.yearsOfExperience && (
					<p className="text-destructive text-sm md:text-md">
						{state.errors.yearsOfExperience}
					</p>
				)}
			</div>

			{/*
			<div
				className="group/field gap-2 flex flex-col"
				data-invalid={!!state.errors?.yearsOfExperience}
			>
				<Label htmlFor="yearsOfExperience">
					Years of relevant work experience?
				</Label>
				<Select
					name="yearsOfExperience"
					defaultValue={state.formValues.yearsOfExperience}
					required
				>
					<SelectTrigger
						id="yearsOfExperience"
						className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md placeholder:text-slate-500"
						disabled={isPending}
						aria-invalid={!!state.errors?.yearsOfExperience}
					>
						<SelectValue placeholder="Select years of experience" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="0-1">0-1 years</SelectItem>
						<SelectItem value="2-5">2-5 years</SelectItem>
						<SelectItem value="6-9">6-9 years</SelectItem>
						<SelectItem value="10+">10+ years</SelectItem>
					</SelectContent>
				</Select>
				{state.errors?.yearsOfExperience && (
					<p className="text-destructive text-sm md:text-md">
						{state.errors.yearsOfExperience}
					</p>
				)}
			</div>
			*/}

			{/* Experience Type */}
			<div
				className="group/field grid gap-2 pb-3"
				data-invalid={!!state.errors?.experienceType}
			>
				<Label>
					Is a majority of your experience with residential painting,
					commercial painting, or both?
				</Label>
				<RadioGroup
					name="experienceType"
					defaultValue={state.formValues.experienceType}
					className="flex flex-col md:flex-row justify-start mt-2 gap-4"
				>
					<div className="flex items-center gap-1">
						<RadioGroupItem
							value="residential"
							id="residential"
							disabled={isPending}
						/>
						<Label htmlFor="residential" className="cursor-pointer">
							Residential Painting
						</Label>
					</div>
					<div className="flex items-center gap-1">
						<RadioGroupItem
							value="commercial"
							id="commercial"
							disabled={isPending}
						/>
						<Label htmlFor="commercial" className="cursor-pointer">
							Commercial Painting
						</Label>
					</div>
					<div className="flex items-center gap-1">
						<RadioGroupItem
							value="both"
							id="both"
							disabled={isPending}
						/>
						<Label htmlFor="both" className="cursor-pointer">
							Both
						</Label>
					</div>
				</RadioGroup>
				{state.errors?.experienceType && (
					<p className="text-destructive text-sm md:text-md">
						{state.errors.experienceType}
					</p>
				)}
			</div>

			{/* Special Skills */}
			<div
				className="group/field grid gap-2"
				data-invalid={!!state.errors?.specialSkills}
			>
				<Label htmlFor="specialSkills">
					Do you have any special skills worth calling out? (e.g.
					spray machine, wallcovering, etc)
				</Label>
				<Input
					id="specialSkills"
					name="specialSkills"
					placeholder={placeholderVals.specialSkills}
					className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
					disabled={isPending}
					defaultValue={state.formValues.specialSkills}
				/>
				{state.errors?.specialSkills && (
					<p className="text-destructive text-sm md:text-md">
						{state.errors.specialSkills}
					</p>
				)}
			</div>

			{/* References */}
			<div className="space-y-4">
				{/* Reference 1 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div
						className="group/field gap-2 flex flex-col"
						data-invalid={!!state.errors?.reference1Name}
					>
						<Label htmlFor="reference1Name">Reference 1 Name</Label>
						<Input
							id="reference1Name"
							name="reference1Name"
							placeholder={placeholderVals.reference1Name}
							className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
							disabled={isPending}
							aria-invalid={!!state.errors?.reference1Name}
							defaultValue={state.formValues.reference1Name}
						/>
						{state.errors?.reference1Name && (
							<p className="text-destructive text-sm md:text-md">
								{state.errors.reference1Name}
							</p>
						)}
					</div>

					<div
						className="group/field gap-2 flex flex-col"
						data-invalid={!!state.errors?.reference1Phone}
					>
						<Label htmlFor="reference1Phone">
							Reference 1 Phone Number
						</Label>
						<Input
							id="reference1Phone"
							name="reference1Phone"
							placeholder={placeholderVals.reference1Phone}
							className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
							disabled={isPending}
							aria-invalid={!!state.errors?.reference1Phone}
							defaultValue={state.formValues.reference1Phone}
						/>
						{state.errors?.reference1Phone && (
							<p className="text-destructive text-sm md:text-md">
								{state.errors.reference1Phone}
							</p>
						)}
					</div>
				</div>

				{/* Reference 2 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div
						className="group/field gap-2 flex flex-col"
						data-invalid={!!state.errors?.reference2Name}
					>
						<Label htmlFor="reference2Name">Reference 2 Name</Label>
						<Input
							id="reference2Name"
							name="reference2Name"
							placeholder={placeholderVals.reference2Name}
							className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
							disabled={isPending}
							aria-invalid={!!state.errors?.reference2Name}
							defaultValue={state.formValues.reference2Name}
						/>
						{state.errors?.reference2Name && (
							<p className="text-destructive text-sm md:text-md">
								{state.errors.reference2Name}
							</p>
						)}
					</div>

					<div
						className="group/field gap-2 flex flex-col"
						data-invalid={!!state.errors?.reference2Phone}
					>
						<Label htmlFor="reference2Phone">
							Reference 2 Phone Number
						</Label>
						<Input
							id="reference2Phone"
							name="reference2Phone"
							placeholder={placeholderVals.reference2Phone}
							className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
							disabled={isPending}
							aria-invalid={!!state.errors?.reference2Phone}
							defaultValue={state.formValues.reference2Phone}
						/>
						{state.errors?.reference2Phone && (
							<p className="text-destructive text-sm md:text-md">
								{state.errors.reference2Phone}
							</p>
						)}
					</div>
				</div>
			</div>

			{/* Desired Pay with Toggle */}
			<div className="space-y-2">
				<div className="flex items-end gap-4 ">
					<div
						className="group/field grid gap-2 flex-1"
						data-invalid={!!state.errors?.desiredPay}
					>
						<Label htmlFor="desiredPay">Desired Pay</Label>
						<Input
							id="desiredPay"
							name="desiredPay"
							placeholder={placeholderVals.desiredPay}
							className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
							disabled={isPending}
							aria-invalid={!!state.errors?.desiredPay}
							defaultValue={state.formValues.desiredPay}
						/>
					</div>
					<div className="flex items-center space-x-4 mb-2">
						<div className="flex items-center space-x-2 ">
							<Label
								htmlFor="payType"
								id="payType"
								className={
									payType === "hourly" ? "font-medium" : ""
								}
							>
								Hourly
							</Label>
							<Switch
								id="payType"
								name="payType"
								className="data-[state=unchecked]:bg-slate-900 dark:data-[state=unchecked]:bg-gray-50"
								checked={payType === "yearly"}
								onCheckedChange={handlePayTypeChange}
								disabled={isPending}
								value={payType}
							/>
							<Label
								htmlFor="payType"
								className={
									payType === "yearly" ? "font-medium" : ""
								}
							>
								Yearly
							</Label>
						</div>
					</div>
				</div>
				{state.errors?.desiredPay && (
					<p className="text-destructive text-sm md:text-md">
						{state.errors.desiredPay}
					</p>
				)}
			</div>

			{/* Preferred Language */}
			<div
				className="group/field grid gap-2"
				data-invalid={!!state.errors?.preferredLanguage}
			>
				<Label htmlFor="preferredLanguage">Preferred Language</Label>
				<Input
					id="preferredLanguage"
					name="preferredLanguage"
					placeholder={placeholderVals.preferredLanguage}
					className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
					disabled={isPending}
					aria-invalid={!!state.errors?.preferredLanguage}
					defaultValue={state.formValues.preferredLanguage}
				/>
				{state.errors?.preferredLanguage && (
					<p className="text-destructive text-sm md:text-md">
						{state.errors.preferredLanguage}
					</p>
				)}
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
