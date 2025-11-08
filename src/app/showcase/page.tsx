import { ArrowRight } from "lucide-react";
import ShowcaseGrid from "../../components/ShowcaseGrid";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function ShowcasePage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={showcaseContainerStyling}>
				<h1 className={headerTextStyling}>Our Showcase</h1>
				<h2 className={subHeaderTextStyling}>
					See what we're capable of.
				</h2>
				<ShowcaseGrid />
				<div className={"flex flex-col mt-20 mb-20 items-center"}>
					<h3 className="w-fit text-center text-lg font-semibold mb-2 text-black dark:text-bone/90">
						Want to be next?
					</h3>
					<Link href="/inquiry" className="max-w-1/2">
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

const showcaseContainerStyling = `
	flex
	flex-col
	grow
	w-full 
	px-6 md:px-8 lg:px-10
	mb-12
	max-w-2xl md:max-w-6xl
`;
