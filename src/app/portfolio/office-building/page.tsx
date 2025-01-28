import VideoPlayer from "../../../components/VideoPlayer";
import ImageGallery from "../../../components/ImageGallery";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const project = {
	title: "Office Building Transformation",
	description:
		"Our team undertook a complete exterior repaint of a 10-story office building in the heart of downtown. This project presented unique challenges due to the building's height and busy urban location. We employed state-of-the-art equipment and safety measures to ensure efficient and safe completion of the project. The new color scheme, chosen in collaboration with the client, has dramatically improved the building's appearance, making it a standout in the city skyline. This transformation not only enhanced the building's aesthetic appeal but also contributed to increased property value and tenant satisfaction.",
	videoSrc: "/heroVideo.mov",
	posterSrc: "/heroVideoPoster.png",
	images: [
		"/heroVideoPoster.png",
		"/floor-coatings.jpg",
		"/arch-coatings.jpg",
		"/maint-coatings.jpg"
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
				/>
				<h1 className="w-full text-left text-3xl font-bold mt-6 mb-4">
					{project.title}
				</h1>
				<p className="text-gray-700 mb-8">{project.description}</p>
				<h2 className="w-full text-left text-2xl font-semibold mb-4">
					Project Gallery
				</h2>
				<div className="mb-12">
					<ImageGallery images={project.images} />
				</div>
				<Link href="/portfolio" className="mb-12">
					<Button className="flex flex-row items-center">
						See more of our work <ArrowRight />
					</Button>
				</Link>
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
  	h-24
`;

const contentContainerStyling = `
	flex
	flex-col
	mx-12
	items-center
`;
