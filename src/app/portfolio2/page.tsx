"use client";

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
import { Card, CardContent } from "~/components/ui/card";
import PortfolioEntry from "~/components/PortfolioEntry";
import { Fragment, useState } from "react";

type Category =
	| "Historical"
	| "Education"
	| "Restaurants"
	| "Healthcare"
	| "Sporting & Entertainment"
	| "Office & Retail";

export default function Portfolio2Page() {
	const categories = [
		{ text: "Historical", icon: Landmark },
		{ text: "Education", icon: School },
		{ text: "Restaurants", icon: Utensils },
		{ text: "Healthcare", icon: Hospital },
		{ text: "Sporting & Entertainment", icon: Trophy },
		{ text: "Office & Retail", icon: Building2 }
	];

	const portfolioEntries = [
		{
			category: "Historical",
			title: "Historical 1",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			title: "Historical 2",
			category: "Historical",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			category: "Education",
			title: "Education 1",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			title: "Education 2",
			category: "Education",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			category: "Restaurants",
			title: "Restaurants 1",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			title: "Restaurants 2",
			category: "Restaurants",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			category: "Healthcare",
			title: "Healthcare 1",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			title: "Healthcare 2",
			category: "Healthcare",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			category: "Sporting & Entertainment",
			title: "Sporting & Entertainment 1",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			title: "Sporting & Entertainment 2",
			category: "Sporting & Entertainment",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			category: "Office & Retail",
			title: "Office & Retail 1",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		},
		{
			title: "Office & Retail 2",
			category: "Office & Retail",
			description: [
				"Minim irure do veniam mollit. Exercitation sit ad nostrud culpa duis commodo proident minim officia officia cupidatat aute anim do. Incididunt sint voluptate aliquip duis reprehenderit id.",
				"Culpa consectetur enim occaecat ullamco occaecat cillum pariatur irure proident. Tempor elit cupidatat consequat ullamco. Dolor proident tempor irure nulla aute. Pariatur qui anim qui culpa esse amet sit nostrud reprehenderit deserunt dolor nisi qui esse. Velit qui ut sint ad aliqua commodo aliquip officia laborum et fugiat commodo."
			],
			images: [
				{
					src: "/stock-vid-1-poster.png"
				},
				{
					src: "/stock-vid-2-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-5-poster.png"
				},
				{
					src: "/stock-vid-4-poster.png"
				},
				{
					src: "/stock-vid-3-poster.png"
				},
				{
					src: "/stock-vid-1-poster.png"
				}
			]
		}
	];

	const [selectedCategory, setSelectedCategory] =
		useState<Category>("Historical");

	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={portfolioContainerStyling}>
				<h1 className={headerTextStyling}>Our Portfolio</h1>
				<h2 className={subHeaderTextStyling}>
					Select a category to see our happy clients.
				</h2>
				<div className="flex flex-row flex-wrap justify-center mb-6">
					<div className="grid grid-cols-2 gap-2 sm:gap-2 w-full sm:grid-cols-3 sm:w-full lg:grid-cols-6 lg:gap-4">
						{categories.map((category) => {
							return (
								<div
									key={category.text}
									className="flex grow-0 shrink duration-100"
									onClick={() =>
										setSelectedCategory(
											category.text as Category
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
				<span className="space-y-6">
					{portfolioEntries
						.filter((pe) => pe.category === selectedCategory)
						.map((pe, idx) => (
							<Card key={idx}>
								<CardContent className="pt-6">
									<PortfolioEntry
										key={pe.title}
										title={pe.title}
										descParagraphs={pe.description}
										images={pe.images}
									/>
								</CardContent>
							</Card>
						))}
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
	h-24 md:h-32 lg:h-40  xl:h-28
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
	w-full max-w-7xl
	px-6 md:px-8 lg:px-10
	mb-12
`;
