"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { cn } from "~/lib/utils";
import { inquiryFormAction } from "~/lib/inquiryForm/inquiryFormAction";
import { Check } from "lucide-react";

type InquiryState = {
  formValues: { name: string; email: string; phoneNumber: string; message: string };
  success: boolean;
  errors: Record<string, string> | null;
};

const initialState: InquiryState = {
  formValues: { name: "", email: "", phoneNumber: "", message: "" },
  success: false,
  errors: null,
};

export function InquiryForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction, pending] = React.useActionState<InquiryState, FormData>(
    inquiryFormAction as (state: InquiryState, formData: FormData) => Promise<InquiryState>,
    initialState
  );

  return (
    <Card className={cn("w-full", className)}>
      {state.success ? (
        <p className="text-green-600 font-semibold m-6 md:m-12 flex justify-center items-center gap-2 text-lg">
          <Check className="size-8 md:size-10" />
          Your message has been sent. Thank you!
        </p>
      ) : (
        <form action={formAction}>
          <CardContent className="flex flex-col gap-6 pt-6">
            <div className="group/field grid gap-2" data-invalid={!!state.errors?.name}>
              <Label htmlFor="name" className="group-data-[invalid=true]/field:text-red-500 text-base">
                Name <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                className="group-data-[invalid=true]/field:border-red-500"
                disabled={pending}
                aria-invalid={!!state.errors?.name}
                defaultValue={state.formValues.name}
              />
              {state.errors?.name && <p className="text-red-500 text-sm">{state.errors.name}</p>}
            </div>

            <div className="group/field grid gap-2" data-invalid={!!state.errors?.email}>
              <Label htmlFor="email" className="group-data-[invalid=true]/field:text-red-500 text-base">
                Email <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="john@youremaildomain.com"
                className="group-data-[invalid=true]/field:border-red-500"
                disabled={pending}
                aria-invalid={!!state.errors?.email}
                defaultValue={state.formValues.email}
              />
              {state.errors?.email && <p className="text-red-500 text-sm">{state.errors.email}</p>}
            </div>

            <div className="group/field grid gap-2" data-invalid={!!state.errors?.phoneNumber}>
              <Label htmlFor="phoneNumber" className="group-data-[invalid=true]/field:text-red-500 text-base">
                Phone Number <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+1 (555) 123-4567"
                className="group-data-[invalid=true]/field:border-red-500"
                disabled={pending}
                aria-invalid={!!state.errors?.phoneNumber}
                defaultValue={state.formValues.phoneNumber}
              />
              {state.errors?.phoneNumber && <p className="text-red-500 text-sm">{state.errors.phoneNumber}</p>}
            </div>

            <div className="group/field grid gap-2" data-invalid={!!state.errors?.message}>
              <Label htmlFor="message" className="group-data-[invalid=true]/field:text-red-500 text-base">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                className="group-data-[invalid=true]/field:border-red-500 min-h-[120px]"
                disabled={pending}
                aria-invalid={!!state.errors?.message}
                defaultValue={state.formValues.message}
              />
              {state.errors?.message && <p className="text-red-500 text-sm">{state.errors.message}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={pending} className="text-base md:p-6">
              {pending ? "Submitting..." : "Submit"}
            </Button>
          </CardFooter>
        </form>
      )}
    </Card>
  );
}
