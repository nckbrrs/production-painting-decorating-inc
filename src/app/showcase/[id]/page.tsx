import { redirect } from "next/navigation";
import ShowcaseProjectComponent from "./ShowcaseProjectComponent";
import { showcaseConfig } from "~/app/showcase/config";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ShowcaseProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const entry = showcaseConfig.find((p) => p.id === id);

  if (!entry) {
    redirect("/showcase");
  }

  const imgSrcs =
    entry.imgSrcs.length > 0
      ? entry.imgSrcs
      : Array.from({ length: 5 }, (_, i) => `https://placehold.co/600x400/png?text=Placeholder+${i + 1}`);

  return (
    <ShowcaseProjectComponent
      {...entry}
      imgSrcs={imgSrcs}
      posterSrc={`/showcase/${entry.id}/images/videoPoster.png`}
    />
  );
}
