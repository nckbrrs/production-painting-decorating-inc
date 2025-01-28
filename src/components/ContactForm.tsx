"use client";

import * as React from "react";
import {
	Card,
	CardTitle,
	CardHeader,
	CardDescription,
	CardContent,
	CardFooter
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "../components/ui/select";
import { cn } from "../lib/utils";

import { contactFormAction } from "../lib/contactForm/contactFormAction";
import { Check } from "lucide-react";
import { InquiryTypes } from "~/lib/contactForm/contactFormSchema";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
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
		contactFormAction,
		{
			formValues: {
				name: "",
				email: "",
				phoneNumber: "",
				inquiryType: inquiryType,
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
				<p className="text-green-600 font-semibold my-12 flex justify-center items-center gap-2 text-lg">
					<Check className="size-6" />
					Your message has been sent. Thank you.
				</p>
			) : (
				<>
					<CardHeader>
						<CardTitle>How can we help?</CardTitle>
						<CardDescription>
							Give us just a bit of info and we'll be in touch.
						</CardDescription>
					</CardHeader>
					<form action={formAction}>
						<CardContent className="flex flex-col gap-6">
							<div
								className="group/field grid gap-2"
								data-invalid={!!state.errors?.name}
							>
								<Label
									htmlFor="name"
									className="group-data-[invalid=true]/field:text-destructive"
								>
									Name <span aria-hidden="true">*</span>
								</Label>
								<Input
									id="name"
									name="name"
									placeholder={placeholderVals.name}
									className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
									disabled={pending}
									aria-invalid={!!state.errors?.name}
									aria-errormessage="error-name"
									defaultValue={state.formValues.name}
								/>
								{state.errors?.name && (
									<p
										id="error-name"
										className="text-destructive text-sm"
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
									className="group-data-[invalid=true]/field:text-destructive"
								>
									Email <span aria-hidden="true">*</span>
								</Label>
								<Input
									id="email"
									name="email"
									placeholder={placeholderVals.email}
									className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
									disabled={pending}
									aria-invalid={!!state.errors?.email}
									aria-errormessage="error-email"
									defaultValue={state.formValues.email}
								/>
								{state.errors?.email && (
									<p
										id="error-email"
										className="text-destructive text-sm"
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
									className="group-data-[invalid=true]/field:text-destructive"
								>
									Phone Number{" "}
									<span aria-hidden="true">*</span>
								</Label>
								<Input
									id="phoneNumber"
									name="phoneNumber"
									placeholder={placeholderVals.phoneNumber}
									className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
									disabled={pending}
									aria-invalid={!!state.errors?.phoneNumber}
									aria-errormessage="error-phoneNumber"
									defaultValue={state.formValues.phoneNumber}
								/>
								{state.errors?.phoneNumber && (
									<p
										id="error-phoneNumber"
										className="text-destructive text-sm"
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
									className="group-data-[invalid=true]/field:text-destructive"
								>
									Inquiry Type{" "}
									<span aria-hidden="true">*</span>
								</Label>
								<Select
									name="inquiryType"
									defaultValue={state.formValues.inquiryType}
									disabled={pending}
								>
									<SelectTrigger
										className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
										aria-invalid={
											!!state.errors?.inquiryType
										}
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
										>
											{
												InquiryTypes.ArchitechturalCoatingsQuote
											}
										</SelectItem>
										<SelectItem
											value={
												InquiryTypes.FloorCoatingsQuote
											}
										>
											{InquiryTypes.FloorCoatingsQuote}
										</SelectItem>
										<SelectItem
											value={
												InquiryTypes.MaintenanceCoatingsQuote
											}
										>
											{
												InquiryTypes.MaintenanceCoatingsQuote
											}
										</SelectItem>
										<SelectItem
											value={
												InquiryTypes.JobOpportunities
											}
										>
											{InquiryTypes.JobOpportunities}
										</SelectItem>
										<SelectItem
											value={InquiryTypes.GeneralInquiry}
										>
											{InquiryTypes.GeneralInquiry}
										</SelectItem>
									</SelectContent>
								</Select>
								{state.errors?.inquiryType && (
									<p
										id="error-inquiryType"
										className="text-destructive text-sm"
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
									className="group-data-[invalid=true]/field:text-destructive"
								>
									Message
								</Label>
								<Textarea
									id="message"
									name="message"
									placeholder={placeholderVals.message}
									className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
									disabled={pending}
									aria-invalid={!!state.errors?.message}
									aria-errormessage="error-message"
									defaultValue={state.formValues.message}
								/>
								{state.errors?.message && (
									<p
										id="error-message"
										className="text-destructive text-sm"
									>
										{state.errors.message}
									</p>
								)}
							</div>
						</CardContent>
						<CardFooter>
							<Button type="submit" size="sm" disabled={pending}>
								{pending ? "Submitting..." : "Submit"}
							</Button>
						</CardFooter>
					</form>
				</>
			)}
		</Card>
	);
}
