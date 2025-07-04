"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "./ui/carousel";

type PortfolioEntryProps = {
	title: string;
	descParagraphs: string[];
	images: {
		src: string;
	}[];
};

export default function PortfolioEntry({
	title,
	descParagraphs,
	images
}: PortfolioEntryProps) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(1);

	useEffect(() => {
		if (!api) {
			return;
		}

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="flex flex-col w-full">
			{/* Main large image */}
			<div className="relative w-full bg-muted rounded-lg md:aspect-video">
				<Carousel
					className="flex h-full justify-center"
					setApi={setApi}
				>
					<CarouselContent className="h-full">
						{images.map((image, idx) => (
							<CarouselItem
								key={idx}
								className="flex h-full w-full justify-center"
							>
								<div className="flex h-full rounded-lg overflow-hidden">
									<img
										src={image.src || "/placeholder.svg"}
										className="object-contain h-full"
										loading={idx === 0 ? "eager" : "lazy"}
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className={"left-4"} />
					<CarouselNext className={"right-4"} />
				</Carousel>
			</div>

			{/* Thumbnails row */}
			<div className="flex py-4 overflow-x-auto">
				<div className="flex gap-2 w-fit px-4">
					{images.map((image, index) => (
						<button
							key={index}
							onClick={() => api?.scrollTo(index)}
							className={cn(
								"relative flex-shrink-0 aspect-video h-12 md:h-24 overflow-hidden rounded-md transition-all",
								current - 1 === index
									? "ring-2 ring-primary ring-offset-2"
									: "opacity-70 hover:opacity-100"
							)}
						>
							<Image
								src={image.src || "/placeholder.svg"}
								alt="TODO"
								fill
								className="object-cover"
								loading="eager"
							/>
						</button>
					))}
				</div>
			</div>

			{/* Title and description */}
			<div className="px-4 py-6 space-y-4">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
					{title}
				</h2>
				<p className="text-muted-foreground">
					{descParagraphs.map((p, idx) => {
						return (
							<Fragment key={idx}>
								{p}
								{idx !== descParagraphs.length - 1 && (
									<>
										<br />
										<br />
									</>
								)}
							</Fragment>
						);
					})}
				</p>
			</div>
		</div>
	);
}
