import { Card, CardContent } from "./ui/card";
import { cn } from "~/lib/utils";

interface StatCardGroupProps {
  stats: StatCardProps[];
  className?: string;
}

export default function StatCardGroup({ stats, className }: StatCardGroupProps) {
  return (
    <div className={cn("flex flex-wrap md:flex-nowrap w-full justify-center gap-2", className)}>
      <div className="flex flex-row gap-2 w-full grow justify-center basis-3/5">
        {stats.map((s, idx) =>
          idx < 3 ? (
            <StatCard key={s.valueDesc} className="flex flex-col basis-full" {...s} />
          ) : null
        )}
      </div>
      <div className="flex flex-row gap-2 w-full grow justify-center basis-2/5">
        {stats.map((s, idx) =>
          idx >= 3 ? (
            <StatCard key={s.valueDesc} className="flex flex-col basis-1/3 md:basis-full" {...s} />
          ) : null
        )}
      </div>
    </div>
  );
}

type StatCardProps = {
  className?: string;
  valueDesc: string;
  nounDesc: string;
  icon: React.ReactNode;
};

function StatCard({ className, valueDesc, nounDesc, icon }: StatCardProps) {
  return (
    <Card className={className}>
      <CardContent className="flex flex-col w-full items-center p-4 pb-3 lg:p-6 lg:pb-5">
        {icon}
        <p className="text-lg md:text-2xl lg:text-3xl font-bold">{valueDesc}</p>
        <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 text-center">{nounDesc}</p>
      </CardContent>
    </Card>
  );
}
