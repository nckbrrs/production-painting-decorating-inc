export default function VideoPlayer({
	src,
	poster
}: {
	src: string;
	poster: string;
}) {
	return (
		<div className="w-full h-full grow">
			<video
				className="w-full h-full grow object-cover rounded-xl"
				controls
				poster={poster}
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
