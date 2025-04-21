"use client";

import { Card, CardContent } from "~/components/ui/card";
import PortfolioEntry from "~/components/PortfolioEntry";

export default function EducationPortfolio() {
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

	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={portfolioContainerStyling}>
				<h1 className={headerTextStyling}>Our Portfolio | Education</h1>
				<h2 className={subHeaderTextStyling}>
					Take a look at our satisfied clients.
				</h2>
				<span className="space-y-6">
					{portfolioEntries
						.filter((pe) => pe.category === "Education")
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
