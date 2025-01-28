import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface VideoCardProps {
	title: string;
	description: string;
	videoSrc: string;
	posterSrc: string;
	href: string;
}

export default function VideoCard({
	title,
	description,
	videoSrc,
	posterSrc,
	href
}: VideoCardProps) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<div className="aspect-video">
				<video
					className="w-full h-full object-cover"
					controls
					poster={posterSrc}
				>
					<source src={videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<Link href={href}>
				<div className="flex w-full ">
					<div className="flex flex-col p-4">
						<h2 className="text-xl md:text-2xl font-semibold mb-2 ">
							{title}
						</h2>
						<p className="text-gray-600 md:text-lg">
							{description}
						</p>
					</div>
					<div className="flex flex-col grow items-center justify-start mt-5 mr-4">
						<ArrowRight className="w-6" />
					</div>
				</div>
			</Link>
		</div>
	);
}
