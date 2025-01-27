import {
	PaintbrushIcon as Paint,
	BuildingIcon,
	MapPinIcon,
	StarIcon,
	UsersIcon
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import PhoneIcon from "./icons/Phone";
import EmailIcon from "./icons/Email";
import LocaitonIcon from "./icons/Location";

export default function AboutUs() {
	return (
		<div className="h-full mx-12 mt-12">
			{/* Content Section */}
			<div className="mx-auto mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
					Our Story
				</h2>
				<div className="space-y-4 text-gray-700">
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
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
				<Card>
					<CardContent className="flex flex-col items-center justify-center p-4 lg:p-6">
						<UsersIcon className="w-8 h-8 lg:w-12 lg:h-12 mb-2 lg:mb-4 text-slate-600" />
						<p className="text-2xl lg:text-3xl font-bold">100+</p>
						<p className="text-sm lg:text-base text-gray-500 text-center">
							Satisfied Clients
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex flex-col items-center justify-center p-4 lg:p-6">
						<BuildingIcon className="w-8 h-8 lg:w-12 lg:h-12 mb-2 lg:mb-4 text-slate-600" />
						<p className="text-2xl lg:text-3xl font-bold">500+</p>
						<p className="text-sm lg:text-base text-gray-500 text-center">
							Finished Projects
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex flex-col items-center justify-center p-4 lg:p-6">
						<MapPinIcon className="w-8 h-8 lg:w-12 lg:h-12 mb-2 lg:mb-4 text-slate-600" />
						<p className="text-2xl lg:text-3xl font-bold">5+</p>
						<p className="text-sm lg:text-base text-gray-500 text-center">
							Cities Served
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex flex-col items-center justify-center p-4 lg:p-6">
						<StarIcon className="w-8 h-8 lg:w-12 lg:h-12 mb-2 lg:mb-4 text-slate-600" />
						<p className="text-2xl lg:text-3xl font-bold">4.9</p>
						<p className="text-sm lg:text-base text-gray-500 text-center">
							Average Rating
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Services Section */}
			<div className="mx-auto mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-1">
					Our Services
				</h2>
				<h4 className="text-md text-slate-700 mb-5">
					Click to get started on a quote!
				</h4>
				<div className="flex flex-col gap-4">
					<div className="flex w-full h-full drop-shadow-xl">
						<div className="flex aspect-video rounded-xl relative justify-center items-center overflow-hidden">
							<img src="https://placecats.com/neo/1600/900.jpg" />
							<div className="absolute w-full h-full flex flex-col justify-center items-center bg-black/60 hover:bg-red-700/60 rounded-xl">
								<h4 className="text-xl text-white font-semibold text-center">
									Service 1
								</h4>
								<h6 className="text-sm text-white text-center">
									Service 1 Description
								</h6>
							</div>
						</div>
					</div>
					<div className="flex w-full h-full drop-shadow-xl">
						<div className="flex aspect-video rounded-xl relative justify-center items-center overflow-hidden">
							<img src="https://placecats.com/neo_banana/1600/900.jpg" />
							<div className="absolute w-full h-full flex flex-col justify-center items-center bg-black/60 hover:bg-red-700/60 rounded-xl">
								<h4 className="text-xl text-white font-semibold text-center">
									Service 2
								</h4>
								<h6 className="text-sm text-white text-center">
									Service 2 Description
								</h6>
							</div>
						</div>
					</div>
					<div className="flex w-full h-full drop-shadow-xl">
						<div className="flex aspect-video rounded-xl relative justify-center items-center overflow-hidden">
							<img src="https://placecats.com/millie_neo/1600/900.jpg" />
							<div className="absolute w-full h-full flex flex-col justify-center items-center bg-black/60 hover:bg-red-700/60 rounded-xl">
								<h4 className="text-xl text-white font-semibold text-center">
									Service 3
								</h4>
								<h6 className="text-sm text-white text-center">
									Service 3 Description
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="mx-auto mb-12 flex flex-col">
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-1">
					Contact Us
				</h2>
				<h4 className="text-md mb-4 text-slate-700">
					Reach out directly, or{" "}
					<Link
						className="font-semibold hover:cursor-pointer underline underline-offset-2"
						href="/contact"
					>
						fill out a contact form
					</Link>{" "}
					and we'll be in touch!
				</h4>
				<div className="h-6 flex flex-row items-center">
					<PhoneIcon className="h-full py-1 mr-1" />
					<Link
						href="tel:123-4456-7890"
						className="h-full flex flex-col justify-center"
					>
						<p className="text-sm text-slate-700">123-456-7890</p>
					</Link>
				</div>
				<div className="h-6 flex flex-row items-center">
					<EmailIcon className="h-full py-1 mr-1" />
					<Link
						href="mailto:general@productionpaintingonline.com"
						className="h-full flex flex-col justify-center"
					>
						<p className="text-sm text-slate-700">
							general@productionpaintingonline.com
						</p>
					</Link>
				</div>
				<div className="h-6 flex flex-row items-center mb-5">
					<LocaitonIcon className="h-full py-1 mr-1" />
					<Link
						href="https://maps.apple.com/?address=Capital%20Blvd,%20Raleigh,%20NC%20%2027616,%20United%20States&ll=35.861288,-78.581867&q=Capital%20Blvd&t=m"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-sm text-slate-700">
							123 Capital Blvd, Raleigh, NC
						</p>
					</Link>
				</div>

				<Link
					href="https://maps.apple.com/?address=Capital%20Blvd,%20Raleigh,%20NC%20%2027616,%20United%20States&ll=35.861288,-78.581867&q=Capital%20Blvd&t=m"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="w-full drop-shadow-md">
						<div className="w-full aspect-video overflow-hidden rounded-xl">
							<img
								src="/mapsImage.png"
								className="object-contain scale-150"
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
