import { Card, CardContent } from "~/components/ui/card";
import { WorkWithUsForm } from "~/components/WorkWithUsForm";

export default function WorkWithUsPage() {
	const whoWereLookingForBullets = [
		"Experienced painters with 2+ years in commercial painting",
		"Experienced Wall Paper/Covering Hangers with 5+ years experience in the commercial field",
		"Detail-oriented individuals who deliver high-quality finishes",
		"Team players who communicate effectively",
		"Reliable professionals who value punctuality and commitment",
		"Safety-conscious workers who follow proper procedures"
	];

	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={contentContainerStyling}>
				<h1 className={headerTextStyling}>Work With Us</h1>

				<div className="grid gap-10 lg:grid-cols-2">
					<div>
						<h2 className="text-2xl font-semibold mb-4 lg:mt-6">
							Join Our Team
						</h2>

						<div className="prose max-w-none">
							<p className="text-slate-900 dark:text-slate-50">
								At Production Painting & Decorating, we’re
								looking for skilled, reliable professionals who
								take pride in their work and are committed to
								excellence.
							</p>

							<h3 className="text-xl font-medium mt-6 mb-3">
								Who We're Looking For:
							</h3>

							<ul className="space-y-2 text-slate-900 dark:text-slate-50 ml-2">
								{whoWereLookingForBullets.map((bullet) => (
									<li key={bullet}>• {bullet}</li>
								))}
							</ul>

							<p className="mt-6">
								We offer competitive pay, a positive work
								environment, and opportunities for growth. If
								you're passionate about painting and looking to
								build a career with a reputable company, we'd
								love to hear from you.
							</p>
						</div>
					</div>

					<div>
						<Card className="pt-6">
							<CardContent>
								<h2 className="text-2xl font-semibold mb-4">
									Apply Now
								</h2>
								<p className="mb-6">
									Please fill out the form below to express
									interest in joining our team.
								</p>

								<WorkWithUsForm />
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

const pageContainerStyling = `
	flex
	flex-col
	w-full
	grow
	shrink-0
	scroll-smooth
	relative
	justify-start
	items-center
`;

const spaceBehindHeaderStyling = `
	flex
	flex-col
	shrink-0
	w-full
	h-24 md:h-28 lg:h-36 xl:h-40
`;

const contentContainerStyling = `
	flex
	flex-col
	grow
	w-full 
	px-6 md:px-8 lg:px-10
	mb-12
	max-w-6xl
`;

const headerTextStyling = `
	text-3xl md:text-4xl
	font-bold
	text-left
	text-black dark:text-bone
	w-full
	mt-2
	mb-6
`;
