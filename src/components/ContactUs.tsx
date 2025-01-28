import Link from "next/link";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function ContactUs() {
	return (
		<div className="mx-auto mb-12 flex flex-col">
			<h2 className="text-3xl md:text-4xl font-bold text-black mb-1">
				Contact Us
			</h2>
			<h4 className="text-md md:text-lg mb-4 text-slate-700">
				Reach out directly, or{" "}
				<Link
					className="font-semibold hover:cursor-pointer underline underline-offset-2"
					href={{
						pathname: "/inquiry",
						query: `inquryType=${InquiryTypes.GeneralInquiry}`
					}}
				>
					fill out an inquiry form
				</Link>{" "}
				and we'll be in touch!
			</h4>

			<Card>
				<CardContent className="pt-6">
					<div className="flex flex-col w-full md:flex-row md:h-96 md:space-x-8 ">
						<div className="flex flex-col shrink md:grow md:justify-center md:px-4">
							<div className="h-6 sm:h-10 flex flex-row items-center">
								<Phone className="fill-black h-full py-1 mr-1 sm:mr-3" />
								<Link
									href="tel:123-4456-7890"
									className="h-full flex flex-col justify-center"
								>
									<p className="text-sm sm:text-lg text-slate-700">
										123-456-7890
									</p>
								</Link>
							</div>
							<div className="h-6 sm:h-10 flex flex-row items-center">
								<Mail className="h-full fill-black stroke-bone py-1 mr-1 sm:mr-3" />
								<Link
									href="mailto:general@productionpaintingonline.com"
									className="h-full flex flex-col justify-center"
								>
									<p className="text-sm sm:text-lg text-slate-700">
										General@productionpaintingonline.com
									</p>
								</Link>
							</div>
							<div className="h-6 sm:h-10 flex flex-row items-center mb-4">
								<MapPin className="fill-black stroke-bone h-full py-1 mr-1 sm:mr-3" />
								<Link
									href="https://maps.apple.com/?address=Capital%20Blvd,%20Raleigh,%20NC%20%2027616,%20United%20States&ll=35.861288,-78.581867&q=Capital%20Blvd&t=m"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-sm sm:text-lg text-slate-700">
										123 Capital Blvd, Raleigh, NC
									</p>
								</Link>
							</div>
						</div>

						<div className="flex w-full h-full grow md:py-4 drop-shadow-md overflow-hidden">
							<Link
								href="https://maps.apple.com/?address=Capital%20Blvd,%20Raleigh,%20NC%20%2027616,%20United%20States&ll=35.861288,-78.581867&q=Capital%20Blvd&t=m"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex w-full h-full aspect-video md:aspect-auto overflow-hidden rounded-lg">
									<img
										src="/mapsImage.png"
										className="object-cover grow scale-150 lg:scale-100"
									/>
								</div>
							</Link>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
