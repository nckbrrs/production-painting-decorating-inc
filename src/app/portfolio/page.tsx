import { ArrowRight } from "lucide-react";
import PortfolioGrid from "../../components/PortfolioGrid";
import { Button } from "~/components/ui/button";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";
import Link from "next/link";

export default function PortfolioPage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={portfolioContainerStyling}>
				<h1 className={headerTextStyling}>Our Portfolio</h1>
				<h2 className={subHeaderTextStyling}>
					See what we're capable of.
				</h2>
				<PortfolioGrid />
				<div className={"flex flex-col mt-20 mb-28 items-center"}>
					<h3 className="w-fit text-center text-lg font-semibold mb-2 text-black dark:text-bone/80">
						Want to be next?
					</h3>
					<Link
						href={{
							pathname: "/inquiry",
							query: `inquiryType=${InquiryTypes.GeneralInquiry}`
						}}
						className="max-w-1/2"
					>
						<Button className="flex flex-row w-full grow p-6 items-center text-lg">
							Get started on an inquiry
							<ArrowRight />
						</Button>
					</Link>
				</div>
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
	h-24 md:h-32 lg:h-40
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
	text-slate-700 dark:text-bone/80
	mb-4 md:mb-10
`;

const portfolioContainerStyling = `
	flex
	flex-col
	grow
	w-full max-w-7xl
	px-6 md:px-8 lg:px-10
	mb-12
`;
