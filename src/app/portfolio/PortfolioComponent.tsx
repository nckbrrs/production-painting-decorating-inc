"use client";

import {
	ArrowRight,
	Building,
	Building2,
	History,
	Hospital,
	Landmark,
	LucideIcon,
	School,
	Trophy,
	Utensils
} from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import PortfolioEntry from "~/components/PortfolioEntry";
import { useState } from "react";
import portfolio, {
	PortfolioCategory,
	PortfolioEntryWithImageNames
} from "./config";

type PortfolioComponentProps = {
	portfolio: PortfolioEntryWithImageNames[];
};

export default function PortfolioComponent({
	portfolio
}: PortfolioComponentProps) {
	const categories = [
		{ text: "Office & Retail" as PortfolioCategory, icon: Building2 },
		{ text: "Education" as PortfolioCategory, icon: School },
		{ text: "Healthcare" as PortfolioCategory, icon: Hospital },
		{ text: "Sporting & Entertainment" as PortfolioCategory, icon: Trophy }
		// { text: "Historical" as PortfolioCategory, icon: Landmark },
		// { text: "Restaurants" as PortfolioCategory, icon: Utensils }
	];

	const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>(
		categories[0]!.text as PortfolioCategory
	);

	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={portfolioContainerStyling}>
				<h1 className={headerTextStyling}>Our Portfolio</h1>
				<h2 className={subHeaderTextStyling}>
					Select a category to see some of our happy clients.
				</h2>
				<div className="flex flex-row flex-wrap justify-center mb-6">
					<div className="grid grid-cols-2 gap-2 sm:gap-2 w-full md:grid-cols-4 md:w-full lg:grid-cols-4 lg:gap-4">
						{categories.map((category) => {
							return (
								<div
									key={category.text}
									className="flex grow-0 shrink duration-100"
									onClick={() =>
										setSelectedCategory(
											category.text as PortfolioCategory
										)
									}
								>
									<Card
										className={
											"flex w-full group hover:cursor-pointer h-16 p-0" +
											(selectedCategory === category.text
												? " bg-slate-950 dark:bg-white"
												: "  hover:bg-gray-100 dark:hover:bg-slate-900")
										}
									>
										<CardContent className="pb-0 flex flex-row w-full justify-start items-center p-0">
											<category.icon
												className={
													"flex stroke-1 ml-4 mr-2 w-8 py-4 h-full stroke-slate-500 dark:stroke-slate-400 drop-shadow-xs" +
													(selectedCategory ===
													category.text
														? " stroke-white dark:stroke-black"
														: "")
												}
											/>
											<p
												className={
													"flex w-1/2 text-sm flex-col font-semibold dark:text-bone text-slate-700 " +
													(selectedCategory ===
													category.text
														? " text-white dark:text-slate-950"
														: "")
												}
											>
												{category.text}
											</p>
										</CardContent>
									</Card>
								</div>
							);
						})}
					</div>
				</div>
				<span className="flex flex-col space-y-6 justify-center items-center">
					{portfolio
						.filter((entry) => entry.category === selectedCategory)
						.map((pe, idx) => {
							return (
								<Card key={idx} className="w-full">
									<CardContent className="pt-6">
										<PortfolioEntry
											key={pe.title}
											title={pe.title}
											descParagraphs={pe.description}
											images={pe.images}
										/>
									</CardContent>
								</Card>
							);
						})}
				</span>
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
	text-slate-700 dark:text-bone/80
	mb-4 md:mb-4
`;

const portfolioContainerStyling = `
	flex
	flex-col
	grow
	w-full 
	px-6 md:px-8 lg:px-10
	mb-12
	max-w-2xl md:max-w-6xl
`;
