import VideoPlayer from "../../../components/VideoPlayer";
import ImageGallery from "../../../components/ImageGallery";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const project = {
	title: "Office Building Transformation",
	description: [
		`Our team undertook a complete exterior repaint of a 10-story office building in the heart of downtown. This project presented unique challenges due to the building's height and busy urban location. We employed state-of-the-art equipment and safety measures to ensure efficient and safe completion of the project. The new color scheme, chosen in collaboration with the client, has dramatically improved the building's appearance, making it a standout in the city skyline. This transformation not only enhanced the building's aesthetic appeal but also contributed to increased property value and tenant satisfaction.`,
		`Our team undertook a complete exterior repaint of a 10-story office building in the heart of downtown. This project presented unique challenges due to the building's height and busy urban location. We employed state-of-the-art equipment and safety measures to ensure efficient and safe completion of the project. The new color scheme, chosen in collaboration with the client, has dramatically improved the building's appearance, making it a standout in the city skyline. This transformation not only enhanced the building's aesthetic appeal but also contributed to increased property value and tenant satisfaction.`
	],
	videoSrc: "/STOCK/videos/vid-2.mp4",
	posterSrc: "/STOCK/videos/vid-2-poster.png",
	images: [
		"/STOCK/videos/homeHeroVid-poster.png",
		"/STOCK/images/services/floor-coatings.jpg",
		"/STOCK/images/services/commercial-paint.jpg",
		"/STOCK/images/services/vinyl-and-specialty.jpg"
	]
};

export default function ProjectPage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={contentContainerStyling}>
				<VideoPlayer
					src={project.videoSrc}
					poster={project.posterSrc}
					className="drop-shadow-md"
				/>
				<h1 className="w-full text-left text-3xl md:text-4xl font-bold mt-6 md:mt-10 mb-4 text-black dark:text-bone">
					{project.title}
				</h1>
				<div className="mb-8 md:mb-12 space-y-4 md:space-y-8">
					{project.description.map((p, idx) => (
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
				<div className="mb-8">
					<ImageGallery
						images={[
							...project.images,
							...project.images.reverse()
						]}
					/>
				</div>
				<div className="flex flex-col md:flex-row-reverse w-full justify-center space-y-4 md:space-y-0 md:gap-4 items-center mb-12">
					<Link href="/inquiry" className="w-full">
						<Button className="flex flex-row w-full grow p-6 items-center text-lg">
							Get started on an inquiry
							<ArrowRight />
						</Button>
					</Link>
					<Link href="/showcase" className="w-full">
						<Button
							className="flex flex-row w-full items-center sm:text-md md:text-lg md:p-6 border-slate-950 border-[1px]"
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
