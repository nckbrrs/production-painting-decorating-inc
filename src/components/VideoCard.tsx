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
			<div className="aspect-w-16 aspect-h-9">
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
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-2 ">{title}</h2>
						<p className="text-gray-600">{description}</p>
					</div>
					<div className="flex flex-col grow items-center justify-center mr-2">
						<ArrowRight className="w-6" />
					</div>
				</div>
			</Link>
		</div>
	);
}
