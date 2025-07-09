import { redirect } from "next/navigation";
import ShowcaseProjectComponent, {
	ShowcaseProjectComponentProps
} from "./ShowcaseProjectComponent";
import { showcaseConfig } from "~/app/showcase/config";
import fs from "fs";

type ProjectPageProps = {
	params: {
		id: string;
	};
};

// TODO fix/cleanup this since not dynamically getting imgSrcs anymore
export default async function ShowcaseProjectPage({
	params
}: ProjectPageProps) {
	const { id } = await params;
	const showcaseEntry = showcaseConfig.find((project) => project.id === id);

	if (!showcaseEntry) {
		redirect("/");
	}

	if (showcaseEntry.imgSrcs.length === 0) {
		showcaseEntry.imgSrcs.push(
			...Array.from(
				{ length: 5 },
				(_, idx) =>
					`https://placehold.co/600x400/png?text=Placeholder ${idx + 1}`
			)
		);
	}

	const showcaseEntryWithSrcs: ShowcaseProjectComponentProps = {
		...showcaseEntry,
		// imgSrcs: thisEntryImgSrcs,
		posterSrc: `/showcase/${showcaseEntry.id}/images/videoPoster.png`
	};

	return <ShowcaseProjectComponent {...showcaseEntryWithSrcs} />;
}
