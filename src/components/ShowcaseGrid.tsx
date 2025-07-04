import VideoCard, { VideoCardProps } from "./VideoCard";

const showcaseItems: (VideoCardProps & { id: number })[] = [
	{
		id: 1,
		title: "Office Building Transformation",
		description:
			"Complete exterior repaint of a 10-story office building in downtown, bringing new life to the urban landscape.",
		videoSrc: "/STOCK/videos/vid-1.mp4",
		posterSrc: "/STOCK/videos/vid-1-poster.png",
		href: "/showcase/office-building"
	},
	{
		id: 2,
		title: "Industrial Warehouse Makeover",
		description:
			"Interior and exterior painting of a 50,000 sq ft warehouse, improving work environment and curb appeal.",
		videoSrc: "/STOCK/videos/vid-2.mp4",
		posterSrc: "/STOCK/videos/vid-2-poster.png",
		href: "/showcase/office-building"
	},
	{
		id: 3,
		title: "Retail Store Rebranding",
		description:
			"Helping a chain of retail stores rebrand with a fresh, modern color scheme across 20 locations.",
		videoSrc: "/STOCK/videos/vid-3.mp4",
		posterSrc: "/STOCK/videos/vid-3-poster.png",
		href: "/showcase/office-building"
	},
	{
		id: 4,
		title: "Hotel Renovation Project",
		description:
			"Comprehensive painting work for a luxury hotel renovation, including guest rooms, lobbies, and exterior.",
		videoSrc: "/STOCK/videos/vid-4.mp4",
		posterSrc: "/STOCK/videos/vid-4-poster.png",
		href: "/showcase/office-building"
	}
];

export default function ShowcaseGrid() {
	const containerStyling = `
		grid
		grid-cols-1 md:grid-cols-2
		gap-8
	`;

	return (
		<div className={containerStyling}>
			{showcaseItems.map((item) => (
				<VideoCard key={item.id} {...item} />
			))}
		</div>
	);
}
