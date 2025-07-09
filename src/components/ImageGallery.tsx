"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		null
	);

	if (typeof window !== "undefined") {
		// Add scroll listener to hide modal caused by image selection
		document.addEventListener("scroll", (e: any) => {
			if (selectedImageIndex) {
				setSelectedImageIndex(null);
			}
		});

		window.addEventListener("keydown", function (event) {
			if (event.key == "Escape") {
				setSelectedImageIndex(null);
			}
		});
	}

	return (
		<div onScroll={() => setSelectedImageIndex(null)}>
			<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className="cursor-pointer"
						onClick={() => setSelectedImageIndex(index)}
					>
						<Image
							src={image}
							alt={`Project image ${index + 1}`}
							width={600}
							height={400}
							loading={index < 4 ? "eager" : "lazy"}
							priority={index < 4}
							className="object-cover w-full max-h-48 rounded-lg drop-shadow-sm duration-75 lg:hover:-translate-y-1 grow"
						/>
					</div>
				))}
			</div>

			{selectedImageIndex != null && (
				<div
					className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 backdrop-blur-sm"
					onClick={() => setSelectedImageIndex(null)}
				>
					<div className="max-h-full h-[70%] w-full rounded-md overflow-hidden">
						<Image
							src={
								images[selectedImageIndex] || "/placeholder.svg"
							}
							alt="Full size project image"
							width={2400}
							height={1600}
							className="object-contain w-full h-full"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
