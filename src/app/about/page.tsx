import { Mail, MailIcon } from "lucide-react";
import AboutUs from "~/components/AboutUs";
import ContactUs from "~/components/ContactUs";
import StaffMemberCard, {
	StaffMemberCardProps
} from "~/components/StaffMemberCard";
import { Card, CardContent } from "~/components/ui/card";

export default function AboutPage() {
	const staffMembers: StaffMemberCardProps[] = [
		{
			name: "Matt Cain",
			title: "Executive Vice President",
			email: "matt@brookwood-construction.com",
			imageSrc: "/people/person-1.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		},
		{
			name: "Matt Cain",
			title: "Executive Vice President",
			email: "matt@brookwood-construction.com",
			imageSrc: "/people/person-2.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		},
		{
			name: "Matt Cain",
			title: "Executive Vice President",
			email: "matt@brookwood-construction.com",
			imageSrc: "/people/person-3.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		},
		{
			name: "Matt Cain",
			title: "Executive Vice President",
			email: "matt@brookwood-construction.com",
			imageSrc: "/people/person-4.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		}
	];

	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={contentContainerStyling}>
				<h1 className={headerTextStyling}>Our Story</h1>
				<div className="px-0 space-y-4 text-muted-foreground dark:text-bone/80 text-md md:text-lg md:h-max mb-12">
					<p>
						At Production Painting & Decorating , we've been
						transforming spaces with our expert painting services
						for over two decades. Our journey began with a simple
						belief: that every surface tells a story, and we're here
						to make it vibrant and lasting.
					</p>
					<p>
						From humble beginnings as a local painting crew, we've
						grown into a trusted name in commercial painting across
						the region. Our team of skilled professionals brings
						creativity, precision, and unmatched attention to detail
						to every project, whether it's refreshing an office
						space, revitalizing a retail environment, or adding
						character to an industrial facility.
					</p>
				</div>
				<h1 className={headerTextStyling}>Our Team</h1>
				<div className="flex flex-col space-y-8 mb-12">
					{staffMembers.map((staffMember, idx) => (
						<StaffMemberCard
							key={idx}
							name={staffMember.name}
							title={staffMember.title}
							email={staffMember.email}
							imageSrc={staffMember.imageSrc}
							bio={staffMember.bio}
						/>
					))}
				</div>
				<ContactUs />
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
	h-24 md:h-32 lg:h-40  xl:h-28
`;

const contentContainerStyling = `
	flex
	flex-col
	grow
	w-full max-w-7xl
	px-6 md:px-8 lg:px-10
	mb-12
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
	text-slate-700 dark:text-bone/80
	mb-4 md:mb-4
`;
