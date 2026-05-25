import { Card, CardContent } from "~/components/ui/card";
import { WorkWithUsForm } from "~/components/WorkWithUsForm";
import PageContainer from "~/components/PageContainer";

const whoWereLookingFor = [
  "Experienced painters with 2+ years in commercial painting",
  "Experienced Wall Paper/Covering Hangers with 5+ years experience in the commercial field",
  "Detail-oriented individuals who deliver high-quality finishes",
  "Team players who communicate effectively",
  "Reliable professionals who value punctuality and commitment",
  "Safety-conscious workers who follow proper procedures",
];

export default function CareersPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl md:text-4xl font-bold text-left text-black dark:text-bone w-full mt-2 mb-6">
        Work With Us
      </h1>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold mb-4 lg:mt-6">Join Our Team</h3>
          <p className="text-slate-700 dark:text-slate-200 font-normal mb-6 text-base md:text-lg leading-relaxed">
            At Production Painting &amp; Decorating, we&apos;re looking for skilled, reliable
            professionals who take pride in their work and are committed to excellence.
          </p>

          <h4 className="text-xl font-semibold mb-3">Who We&apos;re Looking For:</h4>
          <ul className="space-y-2 mb-6">
            {whoWereLookingFor.map((bullet) => (
              <li key={bullet} className="font-normal text-slate-700 dark:text-slate-300 text-base flex gap-2">
                <span className="shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-700 dark:text-slate-200 font-normal text-base md:text-lg leading-relaxed">
            We offer competitive pay, a positive work environment, and opportunities for growth. If
            you&apos;re passionate about painting and looking to build a career with a reputable company,
            we&apos;d love to hear from you.
          </p>
        </div>

        <div>
          <Card className="pt-6">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-3">Apply Now</h3>
              <p className="mb-6 font-normal text-slate-600 dark:text-slate-300">
                Please fill out the form below to express interest in joining our team.
              </p>
              <WorkWithUsForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
