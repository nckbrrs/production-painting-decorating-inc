import { ArrowRight } from "lucide-react";
import PortfolioGrid from "../../components/PortfolioGrid";
import { Button } from "~/components/ui/button";

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
					<h3 className="w-fit text-center text-md font-semibold">
						Want to be next?
					</h3>
					<Button className="text-lg">
						Get started on a quote <ArrowRight />
					</Button>
				</div>
			</div>
		</div>
	);
}

const pageContainerStyling = `
	flex
	flex-col
	grow
	shrink-0
	min-h-screen
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

const headerTextStyling = `
	text-3xl
	font-bold
	text-left
	w-full
	mt-2
`;

const subHeaderTextStyling = `
	text-md
	text-left
	w-full
	text-slate-700
	mb-4
`;

const portfolioContainerStyling = `
	flex
	flex-col
	mx-12
`;
