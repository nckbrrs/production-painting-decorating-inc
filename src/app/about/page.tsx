import { Building, Mail, MailIcon, Phone } from "lucide-react";
import Link from "next/link";
import ContactUs from "~/components/ContactUs";
import { Card, CardContent } from "~/components/ui/card";

const contactInfo = [
	{
		title: "Sr. Project Manager/Estimator",
		name: "Donnell L. Rochelle, Jr.",
		email: "donnelljr@productionpaintingonline.com",
		officeExt: "22",
		mobile: "(919) 218-0974"
	},
	{
		title: "Project Manager/Estimator",
		name: "Donnell Rochelle, III (Donnie)",
		email: "donnie@productionpaintingonline.com",
		mobile: "(919) 218-4609"
	},
	{
		title: "Asst. Project Mgr/Estimator",
		name: "Imani Rochelle",
		email: "imani@productionpaintingonline.com",
		mobile: "(919) 215-2425"
	},
	{
		title: "Field Superintendent",
		name: "Federico Hurtado",
		email: "fred@productionpaintingonline.com",
		mobile: "(919) 369-1496"
	},
	{
		title: "Field Superintendent",
		name: "Darryl Earl",
		email: "d.earl@productionpaintingonline.com",
		mobile: "(919) 606-3721"
	},
	{
		title: "Administrative Manager",
		name: "Keisha E. Rochelle",
		email: "keisha@productionpaintingonline.com",
		officeExt: "21"
	},
	{
		title: "Asst. Administrative Manager",
		name: "Michelle Rochelle",
		email: "michelle@productionpaintingonline.com"
	}
];

export default function AboutPage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={contentContainerStyling}>
				<h1 className={headerTextStyling}>About Us</h1>
				<p className="text-xl font-normal">
					Since 2004, Production Painting & Decorating has been
					selected by leading companies and institutions to provide a
					wide range of coatings application solutions to preserve and
					enhance our customers’ architectural assets. Our dedication
					to providing long-lasting solutions from complex, long-term
					projects to single commercial spaces has been the key to our
					enduring success.
				</p>
				<br />
				<p className="text-xl font-normal">
					Our company services include, but are not limited to, the
					following:
				</p>

				<div className="w-full flex mt-2 mb-8">
					<ul className="w-min-fit ml-2">
						{[
							"Commercial & Industrial Painting",
							"Drywall & Plaster Repair",
							"Power Washing",
							"Cleaning & Maintenance",
							"Wall Covering Installation & Removal",
							"Exposed Structure",
							"Schedule Acceleration",
							"Epoxy Coatings",
							"Mutli-Spec Coatings",
							"High Performance Coatings & Finishes"
						].map((item) => (
							<li className="flex items-center pb-1">
								•
								<div className="inline-block ml-2 font-normal text-lg">
									{item}
								</div>
							</li>
						))}
					</ul>
				</div>

				<p className="text-xl font-normal">
					Production Painting’s OSHA-certified team of commercial
					painters is highly-trained in the latest coatings technology
					and safety procedures. We take pride in every project,
					knowing that our success is determined by your overall
					satisfaction. Our mission is to complete your project in a
					safe, efficient manner, on-time and on-budget.
				</p>
				<br />
				<p className="text-xl font-normal">
					We are licensed and insured for up to $5 million per
					project, giving you the peace of mind to focus on what you
					do best---run your business. Production Painting is a HUB
					certified vendor registered with the state of North Carolina
					and with the state of NC E-Procurement System.
				</p>
				<br />
				<p className="text-xl font-normal mb-8">
					From painting high performance coatings in hospitals, to
					applying industrial coatings on stadiums and pharmaceutical
					labs, to installing wallcovering in schools we have the
					experience, manpower and supervision to complete your
					project in the safest, most efficient way possible. We’ve
					completed projects from $10,000 to $1,000,000 plus. For your
					next project, consider Production Painting & Decorating. We
					welcome the chance to respond to your next bid or request
					for pricing. Please contact us if you’d like to request
					additional information or a bid regarding our services. We
					look forward to working with you in the near future.
				</p>

				<h1 className={headerTextStyling}>Staff Contact Info</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
					{contactInfo.map((contact, idx) => (
						<PersonContact
							key={idx}
							title={contact.title}
							name={contact.name}
							email={contact.email}
							officeExt={contact.officeExt}
							mobile={contact.mobile}
						/>
					))}
				</div>

				<ContactUs />
			</div>
		</div>
	);
}

const PersonContact = ({
	title,
	name,
	email,
	officeExt,
	mobile
}: {
	title: string;
	name: string;
	email: string;
	officeExt?: string;
	mobile?: string;
}) => {
	return (
		<Card className="rounded-2xl dark:border-2 h-full w-full">
			<CardContent className="pt-3 md:pt-4 pb-3 md:pb-4 h-full">
				<div className="w-full h-full flex flex-col">
					<div className="flex flex-col w-full md:flex-row md:space-x-0 h-full">
						<div className="flex flex-col shrink gap-1 md:grow md:justify-center md:pr-4 h-full">
							<p className="text-xl">{name}</p>
							<p className="font-bold -translate-y-1">{title}</p>
							<div className="flex flex-col  items-start h-full">
								{officeExt && (
									<div className="h-6 flex flex-row items-center">
										<Building className="h-full py-1 mr-1" />
										<Link
											href={`tel:+19196765505,${officeExt}`}
											className="h-full flex flex-col justify-center"
										>
											<p className="text-sm font-normal text-slate-700 dark:text-bone/90 font-sans">
												Office Extension: {officeExt}
											</p>
										</Link>
									</div>
								)}
								{mobile && (
									<div className="h-6 flex flex-row items-center">
										<Phone className="fill-black h-full py-1 mr-1" />
										<Link
											href={`tel:+${mobile?.replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").replaceAll("-", "")},${officeExt}`}
											className="h-full flex flex-col justify-center"
										>
											<p className="text-sm font-normal text-slate-700 dark:text-bone/90 font-sans">
												{`Mobile: ${mobile}`}
											</p>
										</Link>
									</div>
								)}
								{email && (
									<div className="h-6 flex flex-row items-center w-full">
										<Mail className="h-full fill-black  stroke-bone py-1 mr-1 flex-shrink-0" />
										<Link
											href={`mailto:${email}`}
											className="h-full flex  flex-col justify-center w-full"
										>
											<p className="text-sm w-[97%] font-normal text-slate-700 dark:text-bone/90 text-nowrap overflow-hidden text-ellipsis whitespace-nowrap font-sans">
												{`${email}`}
											</p>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

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
	max-w-2xl md:max-w-6xl
`;

const headerTextStyling = `
	text-3xl md:text-4xl
	font-bold
	text-left
	text-black dark:text-bone
	w-full
	mt-2
	mb-4
`;

const subHeaderTextStyling = `
	text-md md:text-lg
	text-left
	w-full
	text-slate-700 dark:text-bone/90
	mb-4 md:mb-4
`;
