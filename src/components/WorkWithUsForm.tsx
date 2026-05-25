"use client";

import { useState, useActionState } from "react";
import { Loader2, Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Switch } from "~/components/ui/switch";
import { sendCareersInterestFormEmail } from "~/lib/workWithUsForm/email-actions";
import { z } from "zod";
import { workWithUsFormSchema } from "~/lib/workWithUsForm/workWithUsFormSchema";

export function WorkWithUsForm() {
  const [payType, setPayType] = useState<"hourly" | "yearly">("hourly");

  const [state, formAction, isPending] = useActionState(
    async (_prevState: unknown, formData: FormData) => {
      const defaultValues = Object.fromEntries(formData.entries()) as Record<string, string>;
      try {
        formData.set("payType", payType);
        const data = workWithUsFormSchema.parse(Object.fromEntries(formData));
        await sendCareersInterestFormEmail(formData);
        return { formValues: data, success: true, errors: null };
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
    },
    {
      formValues: {
        fullName: "", email: "", phone: "", yearsOfExperience: "",
        experienceType: "", specialSkills: "", reference1Name: "",
        reference1Phone: "", reference2Name: "", reference2Phone: "",
        desiredPay: "", payType: "hourly", preferredLanguage: "",
      },
      success: false,
      errors: null,
    }
  );

  if (state.success) {
    return (
      <p className="text-green-600 font-semibold p-1 md:p-8 flex justify-center items-center gap-2 text-lg">
        <Check className="size-8 md:size-10" />
        Your message has been sent. Thank you.
      </p>
    );
  }

  const errors = state.errors as Record<string, string> | null;
  const vals = state.formValues as Record<string, string>;

  return (
    <form action={formAction} className="space-y-6">
      <div className="group/field grid gap-2" data-invalid={!!errors?.fullName}>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="John Doe"
          className="group-data-[invalid=true]/field:border-red-500"
          disabled={isPending}
          defaultValue={vals.fullName}
        />
        {errors?.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group/field grid gap-2" data-invalid={!!errors?.email}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="hello@example.com"
            className="group-data-[invalid=true]/field:border-red-500"
            disabled={isPending}
            defaultValue={vals.email}
          />
          {errors?.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="group/field grid gap-2" data-invalid={!!errors?.phone}>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            className="group-data-[invalid=true]/field:border-red-500"
            disabled={isPending}
            defaultValue={vals.phone}
          />
          {errors?.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>

      <div className="group/field grid gap-2" data-invalid={!!errors?.yearsOfExperience}>
        <Label htmlFor="yearsOfExperience">Years of relevant work experience?</Label>
        <Input
          id="yearsOfExperience"
          name="yearsOfExperience"
          placeholder="e.g. 0-1 years"
          className="group-data-[invalid=true]/field:border-red-500"
          disabled={isPending}
          defaultValue={vals.yearsOfExperience}
        />
        {errors?.yearsOfExperience && <p className="text-red-500 text-sm">{errors.yearsOfExperience}</p>}
      </div>

      <div className="group/field grid gap-2 pb-2" data-invalid={!!errors?.experienceType}>
        <Label>Is a majority of your experience residential, commercial, or both?</Label>
        <RadioGroup
          name="experienceType"
          defaultValue={vals.experienceType}
          className="flex flex-col md:flex-row gap-4 mt-1"
        >
          {(["residential", "commercial", "both"] as const).map((val) => (
            <div key={val} className="flex items-center gap-2">
              <RadioGroupItem value={val} id={val} disabled={isPending} />
              <Label htmlFor={val} className="cursor-pointer capitalize font-normal">
                {val === "both" ? "Both" : `${val.charAt(0).toUpperCase() + val.slice(1)} Painting`}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors?.experienceType && <p className="text-red-500 text-sm">{errors.experienceType}</p>}
      </div>

      <div className="group/field grid gap-2" data-invalid={!!errors?.specialSkills}>
        <Label htmlFor="specialSkills">Special skills? (e.g. spray machine, wallcovering)</Label>
        <Input
          id="specialSkills"
          name="specialSkills"
          placeholder="Spray machine, wallcovering, etc."
          className="group-data-[invalid=true]/field:border-red-500"
          disabled={isPending}
          defaultValue={vals.specialSkills}
        />
        {errors?.specialSkills && <p className="text-red-500 text-sm">{errors.specialSkills}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group/field grid gap-2" data-invalid={!!errors?.reference1Name}>
          <Label htmlFor="reference1Name">Reference 1 Name</Label>
          <Input
            id="reference1Name"
            name="reference1Name"
            placeholder="Jane Smith"
            className="group-data-[invalid=true]/field:border-red-500"
            disabled={isPending}
            defaultValue={vals.reference1Name}
          />
          {errors?.reference1Name && <p className="text-red-500 text-sm">{errors.reference1Name}</p>}
        </div>
        <div className="group/field grid gap-2" data-invalid={!!errors?.reference1Phone}>
          <Label htmlFor="reference1Phone">Reference 1 Phone</Label>
          <Input
            id="reference1Phone"
            name="reference1Phone"
            placeholder="+1 (555) 987-6543"
            className="group-data-[invalid=true]/field:border-red-500"
            disabled={isPending}
            defaultValue={vals.reference1Phone}
          />
          {errors?.reference1Phone && <p className="text-red-500 text-sm">{errors.reference1Phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group/field grid gap-2" data-invalid={!!errors?.reference2Name}>
          <Label htmlFor="reference2Name">Reference 2 Name</Label>
          <Input
            id="reference2Name"
            name="reference2Name"
            placeholder="John Doe"
            className="group-data-[invalid=true]/field:border-red-500"
            disabled={isPending}
            defaultValue={vals.reference2Name}
          />
          {errors?.reference2Name && <p className="text-red-500 text-sm">{errors.reference2Name}</p>}
        </div>
        <div className="group/field grid gap-2" data-invalid={!!errors?.reference2Phone}>
          <Label htmlFor="reference2Phone">Reference 2 Phone</Label>
          <Input
            id="reference2Phone"
            name="reference2Phone"
            placeholder="+1 (555) 123-4567"
            className="group-data-[invalid=true]/field:border-red-500"
            disabled={isPending}
            defaultValue={vals.reference2Phone}
          />
          {errors?.reference2Phone && <p className="text-red-500 text-sm">{errors.reference2Phone}</p>}
        </div>
      </div>

      <div className="flex items-end gap-4">
        <div className="group/field grid gap-2 flex-1" data-invalid={!!errors?.desiredPay}>
          <Label htmlFor="desiredPay">Desired Pay</Label>
          <Input
            id="desiredPay"
            name="desiredPay"
            placeholder="$"
            className="group-data-[invalid=true]/field:border-red-500"
            disabled={isPending}
            defaultValue={vals.desiredPay}
          />
          {errors?.desiredPay && <p className="text-red-500 text-sm">{errors.desiredPay}</p>}
        </div>
        <div className="flex items-center gap-3 mb-2">
          <Label className={payType === "hourly" ? "font-medium" : "font-normal text-slate-500"}>Hourly</Label>
          <Switch
            checked={payType === "yearly"}
            onCheckedChange={(checked) => setPayType(checked ? "yearly" : "hourly")}
            disabled={isPending}
          />
          <Label className={payType === "yearly" ? "font-medium" : "font-normal text-slate-500"}>Yearly</Label>
        </div>
      </div>

      <div className="group/field grid gap-2" data-invalid={!!errors?.preferredLanguage}>
        <Label htmlFor="preferredLanguage">Preferred Language</Label>
        <Input
          id="preferredLanguage"
          name="preferredLanguage"
          placeholder="English"
          className="group-data-[invalid=true]/field:border-red-500"
          disabled={isPending}
          defaultValue={vals.preferredLanguage}
        />
        {errors?.preferredLanguage && <p className="text-red-500 text-sm">{errors.preferredLanguage}</p>}
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
