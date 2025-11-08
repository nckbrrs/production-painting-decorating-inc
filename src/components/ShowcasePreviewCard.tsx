import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShowcaseProjectComponentProps } from "~/app/showcase/[id]/ShowcaseProjectComponent";
export default function ShowcasePreviewCard({
	id,
	title,
	previewDescription,
	posterSrc
}: Omit<
	ShowcaseProjectComponentProps,
	"videoSrc" | "imgSrcs" | "longDescription"
>) {
	return (
		<div className="bg-white dark:bg-slate-950 dark:border-slate-800 border dark:border-1 rounded-lg shadow-md overflow-hidden">
			<Link href={`/showcase/${id}`}>
				<div className="aspect-video">
					<img
						src={posterSrc}
						className="w-full h-full object-cover hover:cursor-pointer"
					/>
				</div>
				<div className="flex w-full ">
					<div className="flex flex-col p-4">
						<h2 className="text-xl md:text-2xl font-semibold mb-2 text-black dark:text-bone ">
							{title}
						</h2>
						<p className="text-gray-600 dark:text-bone/90 md:text-lg">
							{previewDescription}
						</p>
					</div>
					<div className="flex flex-col grow items-center justify-start mt-5 mr-4">
						<ArrowRight className="w-6 stroke-black dark:stroke-bone" />
					</div>
				</div>
			</Link>
		</div>
	);
}
