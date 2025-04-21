import Link from "next/link";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function ContactUs() {
	return (
		<div className="mb-12 flex flex-col mt-2">
			<h2 className="drop-shadow-sm  text-3xl md:text-4xl font-bold text-black dark:text-bone">
				Contact Us
			</h2>
			<h4 className="text-md md:text-lg mb-4 text-slate-700 dark:text-bone/80">
				Reach out directly, or fill out an inquiry form and we'll be in
				touch!
			</h4>
			<Card className="rounded-2xl dark:border-2 h-fit">
				<CardContent className="pt-6">
					<div className="w-full h-fit flex flex-col">
						<div className="flex flex-col w-full md:flex-row md:space-x-8 ">
							<div className="flex flex-col shrink md:grow md:justify-center md:px-4">
								<div className="h-6 sm:h-10 flex flex-row items-center">
									<Phone className="fill-black h-full py-1 mr-1 sm:mr-3" />
									<Link
										href="tel:123-4456-7890"
										className="h-full flex flex-col justify-center"
									>
										<p className="text-sm sm:text-lg text-slate-700 dark:text-bone/80">
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
										<p className="text-sm sm:text-lg text-slate-700 dark:text-bone/80 text-nowrap">
											General@PPDRaleigh.com
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
										<p className="text-sm sm:text-lg text-slate-700 dark:text-bone/80 text-nowrap">
											123 Capital Blvd, Raleigh, NC
										</p>
									</Link>
								</div>
							</div>

							<div className="flex w-full h-full max-h-96  md:py-4 flex-shrink-0 md:flex-shrink drop-shadow-md overflow-hidden">
								<Link
									href="https://maps.apple.com/?address=Capital%20Blvd,%20Raleigh,%20NC%20%2027616,%20United%20States&ll=35.861288,-78.581867&q=Capital%20Blvd&t=m"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full flex-shrink-0"
								>
									<div className="flex w-full h-full flex-shrink-0 md:flex-shrink aspect-video md:aspect-auto overflow-hidden rounded-xl">
										<img
											src="/mapsImage.png"
											className="object-cover grow scale-150 lg:scale-100"
										/>
									</div>
								</Link>
							</div>
						</div>
						<Link
							href={{
								pathname: "/inquiry",
								query: `inquiryType=${InquiryTypes.GeneralInquiry}`
							}}
							className="w-full mt-4"
						>
							<Button className="flex flex-row w-full grow p-6 items-center text-md md:text-lg">
								Get started on an inquiry
								<ArrowRight />
							</Button>
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
