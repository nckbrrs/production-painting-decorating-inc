import VideoCard from "./VideoCard";

const portfolioItems = [
	{
		id: 1,
		title: "Office Building Transformation",
		description:
			"Complete exterior repaint of a 10-story office building in downtown, bringing new life to the urban landscape.",
		videoSrc: "/stock-vid-1.mp4",
		posterSrc: "",
		href: "/portfolio/office-building"
	},
	{
		id: 2,
		title: "Industrial Warehouse Makeover",
		description:
			"Interior and exterior painting of a 50,000 sq ft warehouse, improving work environment and curb appeal.",
		videoSrc: "/stock-vid-2.mp4",
		posterSrc: "",
		href: "/portfolio/office-building"
	},
	{
		id: 3,
		title: "Retail Store Rebranding",
		description:
			"Helping a chain of retail stores rebrand with a fresh, modern color scheme across 20 locations.",
		videoSrc: "/stock-vid-3.mp4",
		posterSrc: "",
		href: "/portfolio/office-building"
	},
	{
		id: 4,
		title: "Hotel Renovation Project",
		description:
			"Comprehensive painting work for a luxury hotel renovation, including guest rooms, lobbies, and exterior.",
		videoSrc: "/stock-vid-4.mp4",
		posterSrc: "",
		href: "/portfolio/office-building"
	}
];

export default function PortfolioGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{portfolioItems.map((item) => (
				<VideoCard key={item.id} {...item} />
			))}
		</div>
	);
}
