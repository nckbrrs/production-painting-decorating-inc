import ShowcasePreviewCard from "./ShowcasePreviewCard";
import { showcaseConfig } from "~/app/showcase/config";

export default function ShowcaseGrid() {
  const entries = showcaseConfig.map((entry) => ({
    ...entry,
    posterSrc: `/showcase/${entry.id}/images/videoPoster.png`,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {entries.map((entry) => (
        <ShowcasePreviewCard key={entry.id} {...entry} />
      ))}
    </div>
  );
}
