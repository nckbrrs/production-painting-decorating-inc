"use client";

import { Suspense } from "react";
import { InquiryForm } from "../../components/InquiryForm";

export default function InquiryPage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={inquiryFormContainerStyling}>
				<h1 className={headerTextStyling}>Inquiries</h1>
				<h2 className={subHeaderTextStyling}>How can we help you?</h2>
				<Suspense>
					<InquiryForm />
				</Suspense>
			</div>
		</div>
	);
}

const pageContainerStyling = `
	flex
	flex-col
	w-full
	grow
	shrink-0
	scroll-smooth
	relative
	justify-start
	items-center
`;

const spaceBehindHeaderStyling = `
	flex
	flex-col
	shrink-0
	w-full
	h-24 md:h-28 lg:h-36 xl:h-40
`;

const headerTextStyling = `
	text-3xl md:text-4xl
	font-bold
	text-left
	text-black dark:text-bone
	w-full
	mt-2
`;

const subHeaderTextStyling = `
	text-md md:text-lg
	text-left
	w-full
	text-slate-700 dark:text-bone/90
	mb-4 md:mb-10
`;

const inquiryFormContainerStyling = `
	flex
	flex-col
	grow
	w-full 
	px-6 md:px-8 lg:px-10
	mb-12
	max-w-2xl md:max-w-6xl
`;
