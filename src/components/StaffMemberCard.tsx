import { MailIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export type StaffMemberCardProps = {
	name: string;
	title: string;
	email: string;
	imageSrc: string;
	bio: string;
};

export default function StaffMemberCard({
	name,
	title,
	email,
	imageSrc,
	bio
}: StaffMemberCardProps) {
	return (
		<Card>
			<CardContent className="pt-6 sm:flex sm:flex-row sm:space-x-6 w-full sm:items-center">
				<img
					src={imageSrc}
					className="w-full bg-red-400 sm:h-full sm:w-1/2  md:w-fit md:h-fit rounded-md md:rounded-lg overflow-hidden mb-4 sm:mb-0 drop-shadow-sm object-cover"
				/>
				<div className="sm:w-2/3 sm:flex sm:flex-col px-0 text-muted-foreground dark:text-bone/80 text-md md:text-lg">
					<p className="font-semibold text-2xl">{name}</p>
					<p className="font-semibold text-lg text-slate-800 dark:text-gray-400">
						{title}
					</p>
					<p className="flex flex-row items-center font-normal text-sm text-slate-500">
						<MailIcon className="w-3 mr-1" />
						<a href={`mailto:${email}`}>{email}</a>
					</p>

					<p className="mt-2 text-md">{bio}</p>
				</div>
			</CardContent>
		</Card>
	);
}
