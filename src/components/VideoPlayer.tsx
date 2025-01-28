export default function VideoPlayer({
	src,
	poster
}: {
	src: string;
	poster: string;
}) {
	return (
		<div className="aspect-w-16 aspect-h-9">
			<video
				className="w-full h-full object-cover rounded-xl"
				controls
				poster={poster}
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
