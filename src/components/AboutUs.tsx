import {
	BicepsFlexedIcon,
	BuildingIcon,
	MapPinIcon,
	StarIcon,
	UsersIcon
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "./ui/carousel";

import ContactUs from "./ContactUs";
import StatCardGroup from "./StatCardGroup";
import OSHAIcon from "./icons/OSHA";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";

export default function AboutUs() {
	const statCardIconStyling = `
		w-8 md:w-12 lg:w-16
		h-8 md:h-12 lg:h-16 
		mb-2 lg:mb-4 
		stroke-slate-600
	`;

	const statsForStatCards = [
		{
			nounDesc: "Satisfied Clients",
			valueDesc: "100+",
			icon: <UsersIcon className={statCardIconStyling} />
		},
		{
			nounDesc: "Finished Projects",
			valueDesc: "1000+",
			icon: <BuildingIcon className={statCardIconStyling} />
		},
		{
			nounDesc: "Years of Experience",
			valueDesc: "20+",
			icon: <BicepsFlexedIcon className={statCardIconStyling} />
		},
		{
			nounDesc: "Certified",
			valueDesc: "OSHA",
			icon: (
				<OSHAIcon
					className={
						statCardIconStyling +
						"w-14 h-14 dark:bg-gray-300 rounded-full p-0.5"
					}
				/>
			)
		},
		{
			nounDesc: "Certified",
			valueDesc: "MBE",
			icon: (
				<img
					src={"/mbe-certification.png"}
					className={
						statCardIconStyling +
						"w-14 h-14 dark:bg-gray-300 rounded-full p-0.5 "
					}
				/>
			)
		}
	];

	const services: {
		name: string;
		imgSrc: string;
		inquiryType: InquiryTypes;
	}[] = [
		{
			name: "Commercial Paint",
			imgSrc: "/commercial-paint.jpg",
			inquiryType: InquiryTypes.CommercialPaintQuote
		},
		{
			name: "Floor Coatings",
			imgSrc: "/floor-coatings.jpg",
			inquiryType: InquiryTypes.FloorCoatingsQuote
		},
		{
			name: "Vinyl Wall Covering and Specialty Coatings",
			imgSrc: "/vinyl-and-specialty.jpg",
			inquiryType: InquiryTypes.VinylAndSpecialtyQuote
		}
	];

	const containerStyling = `
		max-w-6xl	
		h-full
		mt-10 md:mt-20 
	`;

	return (
		<div className={containerStyling}>
			{/* Accolades */}
			<div className="mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-4 dark:text-bone">
					Our Accolades
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
													<h4 className="text-xl lg:text-2xl text-white font-semibold text-center w-4/5">
														{service.name}
													</h4>
													<h6 className="text-md lg:text-lg text-white opacity-80 font-light">
														Service Description
													</h6>
												</div>
											</CardContent>
										</Card>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className={"left-4 md:hidden "} />
						<CarouselNext className={"right-4 md:hidden"} />
					</Carousel>
				</div>
			</div>

			{/* Contact Section */}
			<ContactUs />
		</div>
	);
}
