import {
	ArrowRight,
	Building,
	Building2,
	History,
	Hospital,
	Landmark,
	School,
	Trophy,
	Utensils
} from "lucide-react";
import ShowcaseGrid from "../../components/ShowcaseGrid";
import { Button } from "~/components/ui/button";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";

export default function PortfolioPage() {
	const categories = [
		{ text: "Historical", icon: Landmark },
		{ text: "Education", icon: School },
		{ text: "Restaurants", icon: Utensils },
		{ text: "Healthcare", icon: Hospital },
		{ text: "Sporting & Entertainment", icon: Trophy },
		{ text: "Office & Retail", icon: Building2 }
	];

	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={portfolioContainerStyling}>
				<h1 className={headerTextStyling}>Our Portfolio</h1>
				<h2 className={subHeaderTextStyling}>
					Select a category to see our happy clients.
				</h2>
				{/* <div className="flex flex-wrap w-full bg-red-400"> */}
				<div className="flex flex-row justify-center">
					<div className="grid grid-cols-2 gap-4 sm:gap-6 w-96 sm:grid-cols-3 sm:w-full xl:grid-cols-6 lg:gap-4">
						{categories.map((category) => {
							return (
								<Link
									key={category.text}
									className="flex grow-0 shrink"
									href={`/portfolio/${category.text}`}
								>
									<Card className="flex w-full aspect-square sm:aspect-video  sm:py-6 group hover:cursor-pointer	">
										<CardContent className="pb-0 flex flex-col w-full justify-center items-center ">
											<category.icon className="flex h-12 w-10 sm:h-14 sm:w-14 mb-1 sm:mb-2 stroke-slate-500 dark:stroke-slate-400 drop-shadow-xs" />
											<p className="flex text-lg sm:text-xl flex-col font-semibold dark:text-bone text-center text-slate-700 group-hover:underline underline-offset-2">
												{category.text}
											</p>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>
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
