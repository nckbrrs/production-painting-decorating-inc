import { LucideIcon, LucideProps, UsersIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "~/lib/utils";

interface StatCardGroupProps {
	stats: StatCardProps[];
	className?: string;
}

export default function StatCardGroup(props: StatCardGroupProps) {
	const containerStyling = `
		flex
		flex-wrap md:flex-nowrap
		w-full
		justify-center
		gap-2
	`;

	return (
		<div className={cn(containerStyling, props.className)}>
			<div
				className={
					"flex flex-row gap-2 w-full grow justify-center basis-3/5"
				}
			>
				{props.stats.map((s, idx) => {
					return (
						idx < 3 && (
							<StatCard
								className={
									"flex flex-col basis-full dark:border-2"
								}
								key={`${s.valueDesc}-statCard`}
								icon={s.icon}
								valueDesc={s.valueDesc}
								nounDesc={s.nounDesc}
							/>
						)
					);
				})}
			</div>
			<div
				className={
					"flex flex-row gap-2 w-full grow justify-center basis-2/5"
				}
			>
				{props.stats.map((s, idx) => {
					return (
						idx >= 3 && (
							<StatCard
								className={
									"flex flex-col  basis-1/3 md:basis-full dark:border-2"
								}
								key={`${s.valueDesc}-statCard`}
								icon={s.icon}
								valueDesc={s.valueDesc}
								nounDesc={s.nounDesc}
							/>
						)
					);
				})}
			</div>
		</div>
	);
}

type StatCardProps = {
	className?: string;
	valueDesc: string;
	nounDesc: string;
	icon: JSX.Element;
};

const StatCard = function (props: StatCardProps) {
	const cardContentStyling = `
		flex
		flex-col
		w-full
		items-center
		p-4 pb-3 lg:p-6 lg:pb-5
	`;

	const valueDescStyling = `
		text-lg md:text-2xl lg:text-3xl font-bold
	`;

	const nounDescStyling = `
		text-sm lg:text-base
		text-slate-700 dark:text-bone/90
		text-center
	`;

	return (
		<Card className={props.className}>
			<CardContent className={cardContentStyling}>
				{props.icon}
				<p className={valueDescStyling}>{props.valueDesc}</p>
				<p className={nounDescStyling}>{props.nounDesc}</p>
			</CardContent>
		</Card>
	);
};
