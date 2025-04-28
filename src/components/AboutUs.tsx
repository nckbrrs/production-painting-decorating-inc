import {
	BicepsFlexedIcon,
	BuildingIcon,
	FactoryIcon,
	HardHatIcon,
	HotelIcon,
	LucideIcon,
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
import { cn } from "~/lib/utils";

export default function AboutUs() {
	const statCardIconStyling = `
		w-8 md:w-12 lg:w-14
		h-8 md:h-12 lg:h-14
		mb-2 lg:mb-4 
		stroke-slate-600
		dark:stroke-slate-400
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
					className={cn(
						statCardIconStyling,
						"w-14 h-14 dark:bg-gray-300 rounded-full p-0.5"
					)}
				/>
			)
		},
		{
			nounDesc: "Certified",
			valueDesc: "MBE",
			icon: (
				<img
					src={"/mbe-certification.png"}
					className={cn(
						statCardIconStyling,
						"w-14 h-14 dark:bg-gray-300 rounded-full p-0.5 "
					)}
				/>
			)
		}
	];

	const services: {
		name: string;
		imgSrc: string;
	}[] = [
		{
			name: "Commercial Paint",
			imgSrc: "/commercial-paint.jpg"
		},
		{
			name: "Floor Coatings",
			imgSrc: "/floor-coatings.jpg"
		},
		{
			name: "Vinyl Wall Covering and Specialty Coatings",
			imgSrc: "/vinyl-and-specialty.jpg"
		}
	];

	const containerStyling = `
		max-w-4xl	
		h-full
		mt-10 md:mt-20 
	`;

	const ourCustomersData: {
		title: string;
		subtitle: string;
		icon: LucideIcon;
	}[] = [
		{
			title: "General Contractors",
			subtitle:
				"A trade partner you can rely on — from estimating to closeout.",
			icon: HardHatIcon
		},
		{
			title: "Commercial Property Managers",
			subtitle:
				"Keep tenants happy and attract new ones with a good-looking building.",
			icon: HotelIcon
		},
		{
			title: "Facility Managers",
			subtitle:
				"Maintain your facility in top shape with minimal interference to your customers.",
			icon: FactoryIcon
		},
		{
			title: "Direct Owners",
			subtitle:
				"Commodo eu aliqua pariatur occaecat esse ad excepteur quis sint incididunt.",
			icon: BuildingIcon
		}
	];

	return (
		<div className={containerStyling}>
			<div className="mb-12 md:mb-20">
				<h2 className="drop-shadow-sm text-3xl md:text-4xl font-bold text-black dark:text-bone mb-3">
					Our Mission
				</h2>
				{/* <h4 className="text-md  text-slate-700 dark:text-bone/80 mb-4">
					Some subtext here
				</h4> */}
				<div className="space-y-4 text-gray-900 dark:text-bone/80 text-md md:text-lg">
					<p>
						With over 20 years of dedicated service, our mission is
						to transform commercial & industrial spaces into
						vibrant, enduring environments through expert
						craftmanship, innovative techniques and an unwavering
						commitment to quality. We strive to exceed client
						expectations by delivering exceptional painting
						solutions that enhance aesthetics, protect investments,
						and foster lasting partnerships built on trust and
						reliability
					</p>
				</div>
			</div>

			{/* Accolades */}
			<div className="mb-12 md:mb-20">
				<h2 className="drop-shadow-sm  text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">
					Our Accolades
				</h2>
				{/* <h4 className="text-md  text-slate-700 dark:text-bone/80 mb-4">
					Some subtext here.
				</h4> */}
				<StatCardGroup stats={statsForStatCards} />
			</div>

			{/* Services Section */}
			<div className="mb-12 md:mb-20">
				<h2 className="drop-shadow-sm  text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">
					Our Services
				</h2>
				{/* <h4 className="text-md md:text-lg text-slate-700 dark:text-bone/80 mb-4">
					Some subtext here.
				</h4> */}
				<div className="flex w-full justify-center items-center ">
					<Carousel className="w-full">
						<CarouselContent>
							{services.map((service) => (
								<CarouselItem
									key={service.name}
									className="md:basis-1/3"
								>
									{/* <Link href="/inquiry"> */}
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
									{/* </Link> */}
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className={"left-4 md:hidden "} />
						<CarouselNext className={"right-4 md:hidden"} />
					</Carousel>
				</div>
			</div>

			{/* Our Customers */}
			<div className="mb-12 md:mb-20">
				<h2 className="drop-shadow-sm  text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">
					Our Customers
				</h2>
				{/* <h4 className="text-md md:text-lg text-slate-700 dark:text-bone/80 mb-4">
					Some subtext here.
				</h4> */}
				<div className="flex-col space-y-4">
					{ourCustomersData.map((cust) => {
						return (
							<Card key={cust.title} className="dark:border-2">
								<CardContent className="flex flex-row items-center py-4 md:py-8">
									<cust.icon className="w-10 h-10 md:w-14 md:h-14 shrink-0 -ml-2 mr-4 md:ml-2 md:mr-6 stroke-1 dark:stroke-slate-100"></cust.icon>
									<div className="flex-col ">
										<p className="text-xl md:text-2xl font-semibold">
											{cust.title}
										</p>
										<p className="text-sm md:text-lg dark:text-gray-300">
											{cust.subtitle}
										</p>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>

			{/* Contact Section */}
			<ContactUs />
		</div>
	);
}
