import { ShowcaseProjectComponentProps } from "~/app/showcase/[id]/ShowcaseProjectComponent";
import ShowcasePreviewCard from "./ShowcasePreviewCard";
import { showcaseConfig } from "~/app/showcase/config";

export default function ShowcaseGrid() {
	const containerStyling = `
		grid
		grid-cols-1 md:grid-cols-2
		gap-8
	`;

	const showcaseEntriesWithSrcs: Omit<
		ShowcaseProjectComponentProps,
		"imgSrcs" | "longDescription"
	>[] = showcaseConfig.map((showcaseEntry) => ({
		...showcaseEntry,
		posterSrc: `/showcase/${showcaseEntry.id}/images/videoPoster.png`
	}));

	return (
		<div className={containerStyling}>
			{showcaseEntriesWithSrcs.map(
				(
					showcaseEntryWithSrcs: Omit<
						ShowcaseProjectComponentProps,
						"imgSrcs" | "longDescription"
					>
				) => (
					<ShowcasePreviewCard
						key={showcaseEntryWithSrcs.id}
						{...showcaseEntryWithSrcs}
					/>
				)
			)}
		</div>
	);
}
