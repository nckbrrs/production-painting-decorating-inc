import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ShowcaseEntry } from "~/app/showcase/config";

type ShowcasePreviewCardProps = Omit<ShowcaseEntry, "videoSrc" | "imgSrcs" | "longDescription">;

export default function ShowcasePreviewCard({
  id,
  title,
  previewDescription,
  posterSrc,
}: ShowcasePreviewCardProps) {
  return (
    <div className={[
      "bg-white dark:bg-slate-950",
      "border border-slate-200 dark:border-slate-800",
      "rounded-lg shadow-sm overflow-hidden",
      "hover:shadow-md transition-shadow",
    ].join(" ")}>
      <Link href={`/showcase/${id}`}>
        <div className="aspect-video overflow-hidden">
          <Image
            src={posterSrc}
            alt={title}
            width={800}
            height={450}
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
        <div className="flex w-full">
          <div className="flex flex-col p-4 grow">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black dark:text-bone">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-bone/80 text-base font-normal">
              {previewDescription}
            </p>
          </div>
          <div className="flex items-start justify-center mt-5 mr-4 shrink-0">
            <ArrowRight className="w-5 stroke-slate-500 dark:stroke-bone/60" />
          </div>
        </div>
      </Link>
    </div>
  );
}
