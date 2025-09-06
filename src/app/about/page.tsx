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
			imageSrc: "/STOCK/images/people/person-1.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		},
		{
			name: "Matt Cain",
			title: "Executive Vice President",
			email: "matt@brookwood-construction.com",
			imageSrc: "/STOCK/images/people/person-2.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		},
		{
			name: "Matt Cain",
			title: "Executive Vice President",
			email: "matt@brookwood-construction.com",
			imageSrc: "/STOCK/images/people/person-3.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		},
		{
			name: "Matt Cain",
			title: "Executive Vice President",
			email: "matt@brookwood-construction.com",
			imageSrc: "/STOCK/images/people/person-4.jpg",
			bio: "Matt Cain serves as Executive Vice President of Brookwood Construction. Matt joined Brookwood in 2011 and leads the pre-construction and estimating. Matt is married to Allison and has two children. He grew up in North Carolina and attended NC State University where he obtained a degree in Construction Engineering and Management. Prior to joining Brookwood, Matt worked 10 years for another local Raleigh general contracting firm. When he's not working, Matt enjoys playing golf, hunting, fishing, and spending time with his family."
		}
	];

	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={contentContainerStyling}>
				<h1 className={headerTextStyling}>Our Mission</h1>
				<div className="px-0 space-y-4 text-muted-foreground dark:text-bone/80 text-md md:text-lg md:h-max mb-8 md:mb-12">
					<p className="font-timesNewRoman">
						With over 20 years of dedicated service, our mission is
						to transform commercial & industrial spaces into
						vibrant, enduring environments through expert
						craftmanship, innovative techniques and an unwavering
						commitment to quality. We strive to exceed client
						expectations by delivering exceptional painting
						solutions that enhance aesthetics, protect investments,
						and foster lasting partnerships built on trust and
						reliability
					</p>
				</div>
				<h1 className={headerTextStyling}>Our Team</h1>
				<div className="flex flex-col space-y-8 mb-8 md:mb-12">
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
	text-slate-700 dark:text-bone/80
	mb-4 md:mb-4
`;
