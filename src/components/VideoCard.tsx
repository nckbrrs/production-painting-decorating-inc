import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type VideoCardProps = {
	title: string;
	description: string;
	videoSrc: string;
	posterSrc: string;
	href: string;
};

export default function VideoCard({
	title,
	description,
	videoSrc,
	posterSrc,
	href
}: VideoCardProps) {
	return (
		<div className="bg-white dark:bg-slate-950 dark:border-slate-800 border rounded-lg shadow-md overflow-hidden">
			<div className="aspect-video">
				<video
					className="w-full h-full object-cover hover:cursor-pointer"
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
						<h2 className="text-xl md:text-2xl font-semibold mb-2 text-black dark:text-bone ">
							{title}
						</h2>
						<p className="text-gray-600 dark:text-bone/80 md:text-lg">
							{description}
						</p>
					</div>
					<div className="flex flex-col grow items-center justify-start mt-5 mr-4">
						<ArrowRight className="w-6 stroke-black dark:stroke-bone" />
					</div>
				</div>
			</Link>
		</div>
	);
}
