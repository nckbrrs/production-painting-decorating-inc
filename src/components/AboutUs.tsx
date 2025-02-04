import { BuildingIcon, MapPinIcon, StarIcon, UsersIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "./ui/carousel";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";
import ContactUs from "./ContactUs";
import StatCardGroup from "./StatCardGroup";

export default function AboutUs() {
	const statsForStatCards = [
		{
			nounDesc: "Satisfied Clients",
			valueDesc: "100+",
			icon: UsersIcon
		},
		{
			nounDesc: "Finished Projects",
			valueDesc: "500+",
			icon: BuildingIcon
		},
		{
			nounDesc: "Cities Served",
			valueDesc: "5+",
			icon: MapPinIcon
		},
		{
			nounDesc: "Average Rating",
			valueDesc: "4.9",
			icon: StarIcon
		}
	];

	const services: {
		name: string;
		imgSrc: string;
		inquiryType: InquiryTypes;
	}[] = [
		{
			name: "Architectural Coatings",
			imgSrc: "/arch-coatings.jpg",
			inquiryType: InquiryTypes.ArchitechturalCoatingsQuote
		},
		{
			name: "Floor Coatings",
			imgSrc: "/floor-coatings.jpg",
			inquiryType: InquiryTypes.FloorCoatingsQuote
		},
		{
			name: "Maintenance Coatings",
			imgSrc: "/maint-coatings.jpg",
			inquiryType: InquiryTypes.MaintenanceCoatingsQuote
		}
	];

	const containerStyling = `
		max-w-6xl	
		h-full
		mt-6 md:mt-20 
	`;

	return (
		<div className={containerStyling}>
			{/* Our Story */}
			<div className="mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-4 dark:text-bone">
					Our Story
				</h2>
				<div className="space-y-4 text-gray-700 dark:text-bone/80 text-md md:text-lg">
					<p>
						At Production Painting & Decorating, we've been
						transforming spaces with our expert painting services
						for over two decades. Our journey began with a simple
						belief: that every surface tells a story, and we're here
						to make it vibrant and lasting.
					</p>
					<p>
						From humble beginnings as a local painting crew, we've
						grown into a trusted name in commercial painting across
						the region. Our team of skilled professionals brings
						creativity, precision, and unmatched attention to detail
						to every project, whether it's refreshing an office
						space, revitalizing a retail environment, or adding
						character to an industrial facility.
					</p>
				</div>
			</div>

			{/* Statistics Section */}
			<StatCardGroup
				className="mb-12 md:mb-20"
				stats={statsForStatCards}
			/>

			{/* Services Section */}
			<div className="mb-12 md:mb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-black dark:text-bone mb-1">
					Our Services
				</h2>
				<h4 className="text-md md:text-lg text-slate-700 dark:text-bone/80 mb-5">
					Click to get started on a quote!
				</h4>
				<div className="flex w-full justify-center items-center ">
					<Carousel className="w-full">
						<CarouselContent>
							{services.map((service) => (
								<CarouselItem
									key={service.name}
									className="md:basis-1/3"
								>
									<Link
										href={{
											pathname: "/inquiry",
											query: {
												inquiryType: service.inquiryType
											}
										}}
									>
										<Card className="rounded-xl overflow-hidden border-0">
											<CardContent className="flex aspect-square justify-center p-0 m-0 relative">
												<img
													src={service.imgSrc}
													className="object-cover"
												/>
												<div className="absolute w-full h-full flex flex-col justify-center items-center bg-black/60">
													<h4 className="text-xl md:text-2xl text-white font-semibold text-center">
														{service.name}
													</h4>
													<h6 className="text-md md:text-lg text-white font-light">
														Service Description
													</h6>
												</div>
											</CardContent>
										</Card>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious
							className={"left-4 md:hidden dark:bg-bone"}
						/>
						<CarouselNext
							className={"right-4 md:hidden dark:bg-bone"}
						/>
					</Carousel>
				</div>
			</div>

			{/* Contact Section */}
			<ContactUs />
		</div>
	);
}
