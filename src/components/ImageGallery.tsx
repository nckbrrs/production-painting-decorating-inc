"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className="cursor-pointer"
						onClick={() => setSelectedImage(image)}
					>
						<Image
							src={image || "/placeholder.svg"}
							alt={`Project image ${index + 1}`}
							width={300}
							height={200}
							className="object-cover w-full h-48 rounded-lg"
						/>
					</div>
				))}
			</div>

			{selectedImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
					onClick={() => setSelectedImage(null)}
				>
					<div className="max-w-4xl max-h-full p-4">
						<Image
							src={selectedImage || "/placeholder.svg"}
							alt="Full size project image"
							width={1200}
							height={800}
							className="object-contain w-full h-full"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
