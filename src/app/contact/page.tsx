"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ContactForm } from "../../components/ContactForm";
import { InquiryTypes } from "~/lib/contactForm/contactFormSchema";

export default function ContactPage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={careersFormContainerStyling}>
				<ContactForm />
			</div>
		</div>
	);
}

const pageContainerStyling = `
  flex
  flex-col
  grow
  shrink-0
  scroll-smooth
  relative
  justify-start
  items-center
  bg-bone
`;

const spaceBehindHeaderStyling = `
  flex
  flex-col
  shrink-0
  w-full
  h-24
`;

const careersFormContainerStyling = `
	flex
	flex-col
	w-full sm:max-w-lg
	px-6 sm:px-0
	pt-0 sm:pt-0
	items-center
	justify-start sm:justify-center

`;
