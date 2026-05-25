import { ArrowRight } from "lucide-react";
import ShowcaseGrid from "~/components/ShowcaseGrid";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import PageContainer from "~/components/PageContainer";

export default function ShowcasePage() {
  return (
    <PageContainer>
      <h1 className="text-3xl md:text-4xl font-bold text-left text-black dark:text-bone w-full mt-2">
        Our Showcase
      </h1>
      <h2 className="text-base md:text-lg text-left w-full text-slate-600 dark:text-bone/80 mb-6 md:mb-10">
        See what we&apos;re capable of.
      </h2>
      <ShowcaseGrid />
      <div className="flex flex-col mt-20 mb-20 items-center">
        <h3 className="w-fit text-center text-lg font-semibold mb-3 text-black dark:text-bone/90">
          Want to be next?
        </h3>
        <Link href="/inquiry">
          <Button className="flex flex-row p-6 items-center text-lg">
            Get started on an inquiry
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
}
