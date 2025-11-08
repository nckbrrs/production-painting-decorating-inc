import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function ContactUs() {
	return (
		<div className="mb-12 flex flex-col mt-2">
			<h2 className="drop-shadow-sm text-3xl md:text-4xl text-black dark:text-bone">
				Contact Us
			</h2>
			<h4 className="text-md md:text-lg mb-4 text-slate-700 dark:text-bone/90">
				Reach out directly, or fill out an inquiry form and we'll be in
				touch!
			</h4>
			<Card className="rounded-2xl dark:border-2 h-fit">
				<CardContent className="pt-6 md:pt-3">
					<div className="w-full h-fit flex flex-col">
						<div className="flex flex-col w-full md:flex-row md:space-x-0 ">
							<div className="flex flex-col shrink gap-1 md:grow md:justify-center md:pr-4">
								<div className="h-6 sm:h-10 flex flex-row items-center">
									<Phone className="fill-black h-full py-1 mr-1 sm:mr-3" />
									<Link
										href="tel:+19196765505,25"
										className="h-full flex flex-col justify-center"
									>
										<p className="text-sm sm:text-lg font-normal text-slate-700 dark:text-bone/90 font-sans">
											(919) 676-5505 ext. 25
										</p>
									</Link>
								</div>
								<div className="h-6 sm:h-10 flex flex-row items-center">
									<Mail className="h-full fill-black stroke-bone py-1 mr-1 sm:mr-3" />
									<Link
										href="mailto:general@productionpaintingonline.com"
										className="h-full flex flex-col justify-center"
									>
										<p className="text-sm sm:text-lg font-normal text-slate-700 dark:text-bone/90 text-nowrap font-sans">
											General@productionpaintingonline.com
										</p>
									</Link>
								</div>
								<div className="h-6 sm:h-10 flex flex-row items-start mb-8">
									<MapPin className="fill-black stroke-bone h-full py-1 mr-1 flex sm:mr-3" />
									<Link
										href="https://maps.apple.com/?address=Capital%20Blvd,%20Raleigh,%20NC%20%2027616,%20United%20States&ll=35.861288,-78.581867&q=Capital%20Blvd&t=m"
										target="_blank"
										rel="noopener noreferrer"
										className="sm:translate-y-1"
									>
										<p className="text-sm sm:text-lg font-normal text-slate-700 dark:text-bone/90 text-nowrap font-sans">
											8411 Garvey Drive, Suite 105
											<br />
											Raleigh, NC
										</p>
									</Link>
								</div>
							</div>

							<div className="flex w-full h-full md:h-96 md:max-h-96 md:py-4 drop-shadow-md overflow-hidden">
								<div className="flex w-full h-full flex-grow bg-red-400 overflow-hidden rounded-lg">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.167256058847!2d-78.57135208255609!3d35.89437430000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac57547ab9ada1%3A0xf789b203a73238bf!2sProduction%20Painting%20%26%20Decorating!5e1!3m2!1sen!2sus!4v1757026837546!5m2!1sen!2sus"
										width="100%"
										height="100%"
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									/>
								</div>
							</div>
						</div>
						<Link
							href={{
								pathname: "/inquiry"
							}}
							className="w-full mt-4"
						>
							<Button className="flex flex-row w-full grow p-6 items-center text-md md:text-lg rounded-lg">
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
