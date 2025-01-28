import { cn } from "~/lib/utils";

export default function VideoPlayer({
	src,
	poster,
	className
}: {
	src: string;
	poster: string;
	className?: string | null;
}) {
	return (
		<div className={cn("w-full h-full grow", className)}>
			<video
				className="w-full h-full grow object-cover rounded-xl hover:cursor-pointer"
				controls
				poster={poster}
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
