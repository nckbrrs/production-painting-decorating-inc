import { LucideIcon, UsersIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "~/lib/utils";

interface StatCardGroupProps {
	stats: StatCardProps[];
	className?: string;
}

export default function StatCardGroup(props: StatCardGroupProps) {
	const containerStyling = `
		grid
		grid-cols-2 lg:grid-cols-4
		gap-4 lg:gap-6
	`;

	return (
		<div className={cn(containerStyling, props.className)}>
			{props.stats.map((s, idx) => {
				return (
					<StatCard
						key={`${s.valueDesc}-statCard`}
						icon={s.icon}
						valueDesc={s.valueDesc}
						nounDesc={s.nounDesc}
					/>
				);
			})}
		</div>
	);
}

type StatCardProps = {
	valueDesc: string;
	nounDesc: string;
	icon: LucideIcon;
};

const StatCard = function (props: StatCardProps) {
	const cardContentStyling = `
		flex
		flex-col
		items-center
		justify-center
		p-4 lg:p-6
	`;

	const iconStyling = `
		w-8 lg:w-12
		h-8 lg:h-12 
		mb-2 lg:mb-4 
		stroke-slate-600
	`;

	const valueDescStyling = `
		text-2xl lg:text-3xl font-bold
	`;

	const nounDescStyling = `
		text-sm lg:text-base
		text-gray-500
		text-center
	`;

	return (
		<Card>
			<CardContent className={cardContentStyling}>
				<props.icon className={iconStyling} />
				<p className={valueDescStyling}>{props.valueDesc}</p>
				<p className={nounDescStyling}>{props.nounDesc}</p>
			</CardContent>
		</Card>
	);
};
