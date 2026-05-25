import { Suspense } from "react";
import { InquiryForm } from "~/components/InquiryForm";
import PageContainer from "~/components/PageContainer";

export default function InquiryPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl md:text-4xl font-bold text-left text-black dark:text-bone w-full mt-2">
        Inquiries
      </h1>
      <h2 className="text-base md:text-lg text-left w-full text-slate-600 dark:text-bone/80 mb-6 md:mb-10">
        How can we help you?
      </h2>
      <Suspense>
        <InquiryForm />
      </Suspense>
    </PageContainer>
  );
}
