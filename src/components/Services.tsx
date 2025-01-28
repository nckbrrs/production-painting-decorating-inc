import {
	PaintbrushIcon as Paint,
	BuildingIcon,
	MapPinIcon,
	StarIcon,
	UsersIcon
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function AboutUs() {
	return (
		<div className="h-full">
			{/* Content Section */}
			<div className="py-8">
				<div className="mb-6">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
						Our Story
					</h2>
					<div className="space-y-4 text-gray-600">
						<p>
							At Production Painting & Decorating, we've been
							transforming spaces with our expert painting
							services for over two decades. Our journey began
							with a simple belief: that every surface tells a
							story, and we're here to make it vibrant and
							lasting.
						</p>
						<p>
							From humble beginnings as a local painting crew,
							we've grown into a trusted name in commercial
							painting across the region. Our team of skilled
							professionals brings creativity, precision, and
							unmatched attention to detail to every project,
							whether it's refreshing an office space,
							revitalizing a retail environment, or adding
							character to an industrial facility.
						</p>
					</div>
				</div>

				{/* Statistics Section */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
					<Card>
						<CardContent className="flex flex-col items-center justify-center p-4 lg:p-6">
							<UsersIcon className="w-8 h-8 lg:w-12 lg:h-12 mb-2 lg:mb-4 text-slate-600" />
							<p className="text-2xl lg:text-3xl font-bold">
								100+
							</p>
							<p className="text-sm lg:text-base text-gray-500 text-center">
								Satisfied Clients
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex flex-col items-center justify-center p-4 lg:p-6">
							<BuildingIcon className="w-8 h-8 lg:w-12 lg:h-12 mb-2 lg:mb-4 text-slate-600" />
							<p className="text-2xl lg:text-3xl font-bold">
								500+
							</p>
							<p className="text-sm lg:text-base text-gray-500 text-center">
								Projects Completed
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
							<p className="text-2xl lg:text-3xl font-bold">
								4.9
							</p>
							<p className="text-sm lg:text-base text-gray-500 text-center">
								Average Rating
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
