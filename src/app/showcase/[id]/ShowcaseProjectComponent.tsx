import ImageGallery from "../../../components/ImageGallery";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type ShowcaseProjectComponentProps = {
	id: string;
	title: string;
	videoSrc: string;
	posterSrc: string;
	previewDescription: string;
	longDescription: string[];
	imgSrcs: string[];
};

export default function ShowcaseProjectComponent({
	title,
	videoSrc,
	posterSrc,
	longDescription,
	imgSrcs
}: ShowcaseProjectComponentProps) {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={contentContainerStyling}>
				<div className="flex w-full h-full grow aspect-video">
					<iframe
						className="flex w-full h-full grow rounded-md drop-shadow-md bg-black"
						src={videoSrc}
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
					/>
				</div>
				<h1 className="w-full text-left text-3xl md:text-4xl font-bold mt-6 md:mt-10 mb-4 text-black dark:text-bone">
					{title}
				</h1>
				<div className="mb-8 md:mb-12 space-y-4 md:space-y-8">
					{longDescription.map((p, idx) => (
						<p
							key={idx}
							className="text-gray-800 dark:text-bone/80 md:text-lg"
						>
							{p}
						</p>
					))}
				</div>
				<h2 className="w-full text-left text-2xl md:text-3xl font-semibold mb-4 text-black dark:text-bone">
					Project Gallery
				</h2>
				<div className="mb-8 md:mb-12">
					<ImageGallery images={imgSrcs} />
				</div>
				<div className="flex flex-col md:flex-row-reverse w-full justify-center space-y-4 md:space-y-0 md:gap-4 items-center mb-12 md:mb-20">
					<Link href="/inquiry" className="w-full">
						<Button className="flex flex-row w-full grow p-6 items-center text-lg">
							Get started on an inquiry
							<ArrowRight />
						</Button>
					</Link>
					<Link href="/showcase" className="w-full">
						<Button
							className="flex flex-row w-full items-center sm:text-md md:text-lg md:p-6 border-slate-950 border-[1px] bg-white"
							variant={"secondary"}
						>
							<ArrowLeft />
							See more of our work
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
  	grow
  	shrink-0
  	min-h-screen
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

const contentContainerStyling = `
	flex
	flex-col
	w-full 
	items-center
	px-6 md:px-8 lg:px-10
	max-w-6xl
`;
