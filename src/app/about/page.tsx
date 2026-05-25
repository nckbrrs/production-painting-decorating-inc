import { Building, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import ContactUs from "~/components/ContactUs";
import PageContainer from "~/components/PageContainer";
import { Card, CardContent } from "~/components/ui/card";

const contactInfo = [
  {
    title: "Sr. Project Manager/Estimator",
    name: "Donnell L. Rochelle, Jr.",
    email: "donnelljr@productionpaintingonline.com",
    officeExt: "22",
    mobile: "(919) 218-0974",
  },
  {
    title: "Project Manager/Estimator",
    name: "Donnell Rochelle, III (Donnie)",
    email: "donnie@productionpaintingonline.com",
    mobile: "(919) 218-4609",
  },
  {
    title: "Asst. Project Mgr/Estimator",
    name: "Imani Rochelle",
    email: "imani@productionpaintingonline.com",
    mobile: "(919) 215-2425",
  },
  {
    title: "Field Superintendent",
    name: "Federico Hurtado",
    email: "fred@productionpaintingonline.com",
    mobile: "(919) 369-1496",
  },
  {
    title: "Field Superintendent",
    name: "Darryl Earl",
    email: "d.earl@productionpaintingonline.com",
    mobile: "(919) 606-3721",
  },
  {
    title: "Administrative Manager",
    name: "Keisha E. Rochelle",
    email: "keisha@productionpaintingonline.com",
    officeExt: "21",
  },
  {
    title: "Asst. Administrative Manager",
    name: "Michelle Rochelle",
    email: "michelle@productionpaintingonline.com",
  },
];

const services = [
  "Commercial & Industrial Painting",
  "Drywall & Plaster Repair",
  "Power Washing",
  "Cleaning & Maintenance",
  "Wall Covering Installation & Removal",
  "Exposed Structure",
  "Schedule Acceleration",
  "Epoxy Coatings",
  "Multi-Spec Coatings",
  "High Performance Coatings & Finishes",
];

const pageHeading = "text-3xl md:text-4xl font-bold text-left text-black dark:text-bone w-full mt-2 mb-4";
const bodyText = "text-base md:text-lg font-normal text-slate-700 dark:text-bone/90 leading-relaxed";

export default function AboutPage() {
  return (
    <PageContainer>
        <h1 className={pageHeading}>
          About Us
        </h1>

        <div className="space-y-4 mb-8">
          <p className={bodyText}>
            Since 2004, Production Painting &amp; Decorating has been selected by leading companies and
            institutions to provide a wide range of coatings application solutions to preserve and enhance
            our customers&apos; architectural assets. Our dedication to providing long-lasting solutions from
            complex, long-term projects to single commercial spaces has been the key to our enduring success.
          </p>

          <p className={bodyText}>
            Our company services include, but are not limited to, the following:
          </p>

          <ul className="ml-2 space-y-1">
            {services.map((item) => (
              <li key={item} className={cn("flex items-center gap-2", bodyText)}>
                <span className="shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className={bodyText}>
            Production Painting&apos;s OSHA-certified team of commercial painters is highly-trained in the
            latest coatings technology and safety procedures. We take pride in every project, knowing that
            our success is determined by your overall satisfaction. Our mission is to complete your project
            in a safe, efficient manner, on-time and on-budget.
          </p>

          <p className={bodyText}>
            We are licensed and insured for up to $5 million per project, giving you the peace of mind to
            focus on what you do best — run your business. Production Painting is a HUB certified vendor
            registered with the state of North Carolina and with the state of NC E-Procurement System.
          </p>

          <p className={cn(bodyText, "mb-8")}>
            From painting high performance coatings in hospitals, to applying industrial coatings on stadiums
            and pharmaceutical labs, to installing wallcovering in schools we have the experience, manpower
            and supervision to complete your project in the safest, most efficient way possible. We&apos;ve
            completed projects from $10,000 to $1,000,000 plus. For your next project, consider Production
            Painting &amp; Decorating. We welcome the chance to respond to your next bid or request for
            pricing. Please contact us if you&apos;d like to request additional information or a bid
            regarding our services. We look forward to working with you in the near future.
          </p>
        </div>

        <h1 className={pageHeading}>
          Staff Contact Info
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {contactInfo.map((contact, idx) => (
            <PersonContact key={idx} {...contact} />
          ))}
        </div>

        <ContactUs />
    </PageContainer>
  );
}

function PersonContact({
  title,
  name,
  email,
  officeExt,
  mobile,
}: {
  title: string;
  name: string;
  email: string;
  officeExt?: string;
  mobile?: string;
}) {
  return (
    <Card className="rounded-2xl h-full w-full">
      <CardContent className="pt-3 md:pt-4 pb-3 md:pb-4 h-full">
        <div className="flex flex-col gap-1 h-full">
          <p className="text-lg font-semibold text-black dark:text-bone">{name}</p>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300 -mt-0.5 mb-1">{title}</p>
          {officeExt && (
            <div className="flex flex-row items-center gap-1.5">
              <Building className="h-3.5 w-3.5 shrink-0 text-slate-500" />
              <Link href={`tel:+19196765505,${officeExt}`}>
                <p className="text-sm font-normal text-slate-600 dark:text-bone/80">
                  Office Extension: {officeExt}
                </p>
              </Link>
            </div>
          )}
          {mobile && (
            <div className="flex flex-row items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 shrink-0 fill-slate-500 stroke-bone dark:fill-slate-400" />
              <Link href={`tel:+${mobile.replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").replaceAll("-", "")}`}>
                <p className="text-sm font-normal text-slate-600 dark:text-bone/80">Mobile: {mobile}</p>
              </Link>
            </div>
          )}
          {email && (
            <div className="flex flex-row items-center gap-1.5 min-w-0">
              <Mail className="h-3.5 w-3.5 shrink-0 fill-slate-500 stroke-bone dark:fill-slate-400" />
              <Link href={`mailto:${email}`} className="min-w-0">
                <p className="text-sm font-normal text-slate-600 dark:text-bone/80 overflow-hidden text-ellipsis whitespace-nowrap">
                  {email}
                </p>
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
