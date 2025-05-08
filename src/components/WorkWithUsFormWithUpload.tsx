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
import { sendCareersInterestFormEmail } from "~/lib/workWithUsForm/email-actions";
import { Label } from "~/components/ui/label";
import { z } from "zod";
import { workWithUsFormSchema } from "~/lib/workWithUsForm/workWithUsFormSchema";
import { Check } from "lucide-react";
import { UploadButton } from "~/utils/uploadthing";

export function WorkWithUsFormWithUpload() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [uploadState, setUploadState] = useState<
		"idle" | "success" | "error"
	>("idle");

	const placeholderVals = {
		fullName: "John Doe",
		email: "hello@ppdonline.com",
		phoneNumber: "+1 (555) 123-4567"
	};

	// Helper function to format phone number
	const formatPhoneNumber = (value: string) => {
		// Remove all non-digits
		const numbers = value.replace(/\D/g, "");

		// Format the number as (###)-###-####
		if (numbers.length <= 3) {
			return numbers;
		} else if (numbers.length <= 6) {
			return `(${numbers.slice(0, 3)})-${numbers.slice(3)}`;
		} else {
			return `(${numbers.slice(0, 3)})-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
		}
	};

	return uploadState == "success" ? (
		<p className="text-green-600 font-semibold m-6 md:m-12 flex justify-center items-center gap-2 text-lg">
			<Check className="size-8 md:size-10" />
			Your form has been uploaded and sent. Thank you. We will be in
			touch!
		</p>
	) : (
		<form action={() => {}} className="space-y-6">
			<div className="grid gap-2">
				<Label htmlFor="fullName">Full Name</Label>
				<Input
					id="fullName"
					name="fullName"
					placeholder={placeholderVals.fullName}
					className="md:text-md"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder={placeholderVals.email}
						className="md:text-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="phone">Phone Number</Label>
					<Input
						id="phone"
						name="phone"
						type="tel"
						placeholder={placeholderVals.phoneNumber}
						className="md:text-md"
						value={phone}
						onChange={(e) => {
							const formattedNumber = formatPhoneNumber(
								e.target.value
							);
							if (
								formattedNumber.replace(/\D/g, "").length <= 10
							) {
								setPhone(formattedNumber);
							}
						}}
					/>
				</div>
			</div>

			<UploadButton
				disabled={!(name && email && phone?.length === 14)}
				endpoint="imageUploader"
				input={{
					name: name,
					email: email,
					phone: phone
				}}
				onClientUploadComplete={(res) => {
					// Do something with the response
					console.log("Files: ", res);
					alert("Upload Completed");
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
				className="ut-button:w-full ut-allowed-content:uppercase"
			/>
		</form>
	);
}
