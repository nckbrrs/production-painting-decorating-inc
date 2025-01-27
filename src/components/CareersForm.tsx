'use client'

import * as React from 'react'
import {
	Card,
	CardTitle,
	CardHeader,
	CardDescription,
	CardContent,
	CardFooter,
} from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { cn } from '../lib/utils'

import { careersFormAction } from '../lib/careersForm/careersFormAction'
import { Check } from 'lucide-react'
import { useFormState } from 'react-dom'

const defaultValues = {
	name: '',
	email: '',
	phoneNumber: '',
	message: '',
	workAuthorization: '',
	visaSponsorship: '',
}

const placeholderValues = {
	name: 'Nick Barrs',
	email: 'placeholder@nickbarrs.com',
	phoneNumber: '+1 (555) 123-4567',
	message: 'Type your message here (optional)...',
	workAuthorization: '',
	visaSponsorship: '',
}

export function CareersForm({ className }: React.ComponentProps<typeof Card>) {
	const [state, formAction, pending] = useFormState(careersFormAction, {
		formValues: defaultValues,
		success: false,
		errors: null,
	})

	return (
		<Card className={cn('w-full', className)}>
			{state.success ? null :
				<CardHeader>
					<CardTitle>Want to work with us?</CardTitle>
					<CardDescription>
						Submit the form below and we'll be in touch.
					</CardDescription>
				</CardHeader>
			}
			<form action={formAction}>
				<CardContent className="flex flex-col gap-8">
					{state.success ? (
						<p className="text-green-600 flex justify-center items-center gap-2 mt-12">
							<Check className="size-6 mr-2" />
							{/* Thanks, {state.formValues.name}! We'll be in touch. */}
							Thanks! We'll be in touch.
						</p>
					) : <>
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
								placeholder={placeholderValues.name}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
								disabled={pending}
								aria-invalid={!!state.errors?.name}
								aria-errormessage="error-name"
								defaultValue={state.formValues.name}
							/>
							{state.errors?.name && (
								<p id="error-name" className="text-destructive text-sm">
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
								placeholder={placeholderValues.email}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
								disabled={pending}
								aria-invalid={!!state.errors?.email}
								aria-errormessage="error-email"
								defaultValue={state.formValues.email}
							/>
							{state.errors?.email && (
								<p id="error-email" className="text-destructive text-sm">
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
								Phone Number <span aria-hidden="true">*</span>
							</Label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								placeholder={placeholderValues.phoneNumber}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
								disabled={pending}
								aria-invalid={!!state.errors?.phoneNumber}
								aria-errormessage="error-phoneNumber"
								defaultValue={state.formValues.phoneNumber}
							/>
							{state.errors?.phoneNumber && (
								<p id="error-phoneNumber" className="text-destructive text-sm">
									{state.errors.phoneNumber}
								</p>
							)}
						</div>
						<div
							className="group/field grid gap-2"
							data-invalid={!!state.errors?.workAuthorization}
						>
							<Label
								className="group-data-[invalid=true]/field:text-destructive leading-2"
							>
								Are you legally authorized to work in the United States? <span aria-hidden="true">*</span>
							</Label>
							<RadioGroup
								name="workAuthorization"
								className="flex space-x-4"
								defaultValue={state.formValues.workAuthorization}
							>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="Yes" id="workAuthYes" disabled={pending} />
									<Label htmlFor="workAuthYes">Yes</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="No" id="workAuthNo" disabled={pending} />
									<Label htmlFor="workAuthNo">No</Label>
								</div>
							</RadioGroup>
							{state.errors?.workAuthorization && (
								<p id="error-workAuthorization" className="text-destructive text-sm">
									{state.errors.workAuthorization}
								</p>
							)}
						</div>
						<div
							className="group/field grid gap-2"
							data-invalid={!!state.errors?.visaSponsorship}
						>
							<Label
								className="group-data-[invalid=true]/field:text-destructive leading-2"
							>
								Will you now, or in the future, require sponsorship for employment visa status (eg. H-1B visa status)? <span aria-hidden="true">*</span>
							</Label>
							<RadioGroup
								name="visaSponsorship"
								className="flex space-x-4"
								defaultValue={state.formValues.visaSponsorship}
							>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="Yes" id="visaSponsorshipYes" disabled={pending} />
									<Label htmlFor="visaSponsorshipYes">Yes</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="No" id="visaSponsorshipNo" disabled={pending} />
									<Label htmlFor="visaSponsorshipNo">No</Label>
								</div>
							</RadioGroup>
							{state.errors?.visaSponsorship && (
								<p id="error-visaSponsorship" className="text-destructive text-sm">
									{state.errors.visaSponsorship}
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
								placeholder={placeholderValues.message}
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
								disabled={pending}
								aria-invalid={!!state.errors?.message}
								aria-errormessage="error-message"
								defaultValue={state.formValues.message}
							/>
							{state.errors?.message && (
								<p id="error-message" className="text-destructive text-sm">
									{state.errors.message}
								</p>
							)}
						</div>
					</>}
				</CardContent>
				<CardFooter>
					{state.success ? null :
						<Button type="submit" size="sm" disabled={pending} className={"bg-black text-bone"}>
							{pending ? 'Submitting...' : 'Submit'}
						</Button>
					}
				</CardFooter>
			</form>
		</Card>
	)
}

