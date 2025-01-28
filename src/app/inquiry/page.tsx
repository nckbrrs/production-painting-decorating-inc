"use client";

import { Suspense } from "react";
import { InquiryForm } from "../../components/InquiryForm";

export default function InquiryPage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={careersFormContainerStyling}>
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
	bg-bone
`;

const spaceBehindHeaderStyling = `
	flex
	flex-col
	shrink-0
	w-full
	h-24 md:h-32 lg:h-40
`;

const headerTextStyling = `
	text-3xl md:text-4xl
	font-bold
	text-left
	w-full
	mt-2
`;

const subHeaderTextStyling = `
	text-md md:text-lg
	text-left
	w-full
	text-slate-700
	mb-4 md:mb-10
`;

const careersFormContainerStyling = `
	flex
	flex-col
	grow
	w-full max-w-7xl
	px-6
	mb-12
`;
