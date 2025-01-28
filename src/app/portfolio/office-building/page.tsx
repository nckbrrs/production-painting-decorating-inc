import VideoPlayer from "../../../components/VideoPlayer";
import ImageGallery from "../../../components/ImageGallery";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";

const project = {
	title: "Office Building Transformation",
	description: [
		`Our team undertook a complete exterior repaint of a 10-story office building in the heart of downtown. This project presented unique challenges due to the building's height and busy urban location. We employed state-of-the-art equipment and safety measures to ensure efficient and safe completion of the project. The new color scheme, chosen in collaboration with the client, has dramatically improved the building's appearance, making it a standout in the city skyline. This transformation not only enhanced the building's aesthetic appeal but also contributed to increased property value and tenant satisfaction.`,
		`Our team undertook a complete exterior repaint of a 10-story office building in the heart of downtown. This project presented unique challenges due to the building's height and busy urban location. We employed state-of-the-art equipment and safety measures to ensure efficient and safe completion of the project. The new color scheme, chosen in collaboration with the client, has dramatically improved the building's appearance, making it a standout in the city skyline. This transformation not only enhanced the building's aesthetic appeal but also contributed to increased property value and tenant satisfaction.`
	],
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
				<h1 className="w-full text-left text-3xl md:text-4xl font-bold mt-6 md:mt-10 mb-4">
					{project.title}
				</h1>
				<div className="mb-8 md:mb-12 space-y-4 md:space-y-8">
					{project.description.map((p) => (
						<p className="text-gray-800 md:text-lg">
							{project.description}
						</p>
					))}
				</div>
				<h2 className="w-full text-left text-2xl md:text-3xl font-semibold mb-4">
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
					<Link
						href={{
							pathname: "/inquiry",
							query: `inquiryType=${InquiryTypes.GeneralInquiry}`
						}}
						className="w-full"
					>
						<Button className="flex flex-row w-full grow p-6 items-center text-lg">
							Get started on an inquiry
							<ArrowRight />
						</Button>
					</Link>
					<Link href="/portfolio" className="w-full">
						<Button
							className="flex flex-row w-full items-center sm:text-md md:text-lg md:p-6"
							variant={"outline"}
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
	h-24 md:h-32 lg:h-40
`;

const contentContainerStyling = `
	flex
	flex-col
	w-full max-w-7xl
	px-12
	items-center
`;
