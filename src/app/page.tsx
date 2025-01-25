import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getImages } from "~/server/queries";

// export const dynamic = "force-dynamic";

export default async function Images() {
	const images = await getImages();

	return (
		<main className="flex flex-col grow justify-center">
			<div className="flex flex-row w-full justify-center items-center gap-4">
				{images.map((image) => (
					<div key={image.id} className="h-48 w-48 flex flex-col relative">
						<Link href={`/image/${image.id}`}>
							<Image
								src={image.url}
								alt={image.name}
								width="0"
								height="0"
								sizes="100%"
								className="w-full rounded-md"
								priority={true}
							/>
						</Link>
						<div>{image.name}</div>
					</div>
				))}
			</div>
		</main>
	);
}
