import ImageGallery from "~/components/ImageGallery";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ShowcaseEntry } from "~/app/showcase/config";

export default function ShowcaseProjectComponent({
  title,
  videoSrc,
  longDescription,
  imgSrcs,
}: ShowcaseEntry) {
  return (
    <div className="flex flex-col grow shrink-0 min-h-screen justify-start items-center">
      <div className="flex flex-col shrink-0 w-full h-24 md:h-28 lg:h-36" />
      <div className="flex flex-col w-full items-center px-6 md:px-8 lg:px-16 max-w-6xl">
        <div className="flex w-full h-full grow aspect-video">
          <iframe
            className="flex w-full h-full grow rounded-lg drop-shadow-md bg-black"
            src={videoSrc}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          />
        </div>
        <h1 className="w-full text-left text-3xl md:text-4xl font-bold mt-8 mb-4 text-black dark:text-bone">
          {title}
        </h1>
        <div className="mb-10 space-y-4 md:space-y-6 w-full">
          {longDescription.map((p, idx) => (
            <p key={idx} className="text-slate-700 dark:text-bone/90 text-base md:text-lg font-normal leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <h2 className="w-full text-left text-2xl md:text-3xl font-semibold mb-4 text-black dark:text-bone">
          Project Gallery
        </h2>
        <div className="mb-10 w-full">
          <ImageGallery images={imgSrcs} />
        </div>
        <div className="flex flex-col md:flex-row-reverse w-full justify-center gap-4 items-center mb-16">
          <Link href="/inquiry" className="w-full">
            <Button className="flex flex-row w-full p-6 items-center text-lg">
              Get started on an inquiry
              <ArrowRight />
            </Button>
          </Link>
          <Link href="/showcase" className="w-full">
            <Button
              className="flex flex-row w-full items-center text-base md:text-lg md:p-6 border border-slate-300 bg-white dark:bg-transparent"
              variant="secondary"
            >
              <ArrowLeft />
              See more of our work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
