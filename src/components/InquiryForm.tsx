"use client";

import * as React from "react";
import {
	Card,
	CardTitle,
	CardHeader,
	CardDescription,
	CardContent,
	CardFooter
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "./ui/select";
import { cn } from "../lib/utils";

import { inquiryFormAction } from "../lib/inquiryForm/inquiryFormAction";
import { Check } from "lucide-react";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function InquiryForm({ className }: React.ComponentProps<typeof Card>) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	let inquiryType = searchParams.get("inquiryType") as InquiryTypes;

	React.useEffect(() => {
		if (!Object.values(InquiryTypes).includes(inquiryType)) {
			router.push(
				`${pathname}?inquiryType=${InquiryTypes.GeneralInquiry}`
			);
		}
	}, [searchParams]);

	const [state, formAction, pending] = React.useActionState(
		inquiryFormAction,
		{
			formValues: {
				name: "",
				email: "",
				phoneNumber: "",
				inquiryType: Object.values(InquiryTypes).includes(inquiryType)
					? inquiryType
					: InquiryTypes.GeneralInquiry,
				message: ""
			},
			success: false,
			errors: null
		}
	);

	const placeholderVals = {
		name: "Nick Barrs",
		email: "ppd-inc@nickbarrs.com",
		phoneNumber: "+1 (555) 123-4567",
		message: "Type your message here (optional)..."
	};

	return (
		<Card className={cn("w-full", className)}>
			{state.success ? (
				<p className="text-green-600 font-semibold m-6 md:m-12 flex justify-center items-center gap-2 text-lg">
					<Check className="size-8 md:size-10" />
					Your message has been sent. Thank you.
				</p>
			) : (
				<form action={formAction}>
					<CardContent className="flex flex-col gap-6 pt-6">
						<div
							className="group/field grid gap-2"
							data-invalid={!!state.errors?.name}
						>
							<Label
								htmlFor="name"
								className="group-data-[invalid=true]/field:text-destructive md:text-lg"
							>
								Name <span aria-hidden="true">*</span>
							</Label>
							<Input
								id="name"
								name="name"
								placeholder={placeholderVals.name}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
								disabled={pending}
								aria-invalid={!!state.errors?.name}
								aria-errormessage="error-name"
								defaultValue={state.formValues.name}
							/>
							{state.errors?.name && (
								<p
									id="error-name"
									className="text-destructive text-sm md:text-md"
								>
									{state.errors.name}
								</p>
							)}
						</div>
						<div
							className="group/field grid gap-2"
							data-invalid={!!state.errors?.email}
						>
							<Label
								htmlFor="email"
								className="group-data-[invalid=true]/field:text-destructive md:text-lg"
							>
								Email <span aria-hidden="true">*</span>
							</Label>
							<Input
								id="email"
								name="email"
								placeholder={placeholderVals.email}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
								disabled={pending}
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
							data-invalid={!!state.errors?.phoneNumber}
						>
							<Label
								htmlFor="phoneNumber"
								className="group-data-[invalid=true]/field:text-destructive md:text-lg"
							>
								Phone Number <span aria-hidden="true">*</span>
							</Label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								placeholder={placeholderVals.phoneNumber}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-md"
								disabled={pending}
								aria-invalid={!!state.errors?.phoneNumber}
								aria-errormessage="error-phoneNumber"
								defaultValue={state.formValues.phoneNumber}
							/>
							{state.errors?.phoneNumber && (
								<p
									id="error-phoneNumber"
									className="text-destructive text-sm md:text-md"
								>
									{state.errors.phoneNumber}
								</p>
							)}
						</div>
						<div
							className="group/field grid gap-2"
							data-invalid={!!state.errors?.inquiryType}
						>
							<Label
								htmlFor="inquiryType"
								className="group-data-[invalid=true]/field:text-destructive md:text-lg"
							>
								Inquiry Type <span aria-hidden="true">*</span>
							</Label>
							<Select
								name="inquiryType"
								defaultValue={state.formValues.inquiryType}
								disabled={pending}
							>
								<SelectTrigger
									className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-lg"
									aria-invalid={!!state.errors?.inquiryType}
									aria-errormessage="error-inquiryType"
								>
									<SelectValue
										placeholder={
											state.formValues.inquiryType
										}
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										value={
											InquiryTypes.ArchitechturalCoatingsQuote
										}
										className="md:text-lg"
									>
										{
											InquiryTypes.ArchitechturalCoatingsQuote
										}
									</SelectItem>
									<SelectItem
										value={InquiryTypes.FloorCoatingsQuote}
										className="md:text-lg"
									>
										{InquiryTypes.FloorCoatingsQuote}
									</SelectItem>
									<SelectItem
										value={
											InquiryTypes.MaintenanceCoatingsQuote
										}
										className="md:text-lg"
									>
										{InquiryTypes.MaintenanceCoatingsQuote}
									</SelectItem>
									<SelectItem
										value={InquiryTypes.JobOpportunities}
										className="md:text-lg"
									>
										{InquiryTypes.JobOpportunities}
									</SelectItem>
									<SelectItem
										value={InquiryTypes.GeneralInquiry}
										className="md:text-lg"
									>
										{InquiryTypes.GeneralInquiry}
									</SelectItem>
								</SelectContent>
							</Select>
							{state.errors?.inquiryType && (
								<p
									id="error-inquiryType"
									className="text-destructive text-sm md:text-md"
								>
									{state.errors.inquiryType}
								</p>
							)}
						</div>
						<div
							className="group/field grid gap-2"
							data-invalid={!!state.errors?.message}
						>
							<Label
								htmlFor="message"
								className="group-data-[invalid=true]/field:text-destructive md:text-lg"
							>
								Message
							</Label>
							<Textarea
								id="message"
								name="message"
								placeholder={placeholderVals.message}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive md:text-lg"
								disabled={pending}
								aria-invalid={!!state.errors?.message}
								aria-errormessage="error-message"
								defaultValue={state.formValues.message}
							/>
							{state.errors?.message && (
								<p
									id="error-message"
									className="text-destructive text-sm md:text-lg"
								>
									{state.errors.message}
								</p>
							)}
						</div>
					</CardContent>
					<CardFooter>
						<Button
							type="submit"
							disabled={pending}
							className="md:text-lg md:p-6"
						>
							{pending ? "Submitting..." : "Submit"}
						</Button>
					</CardFooter>
				</form>
			)}
		</Card>
	);
}
