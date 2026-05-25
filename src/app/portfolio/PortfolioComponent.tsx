"use client";

import { Building2, Hospital, School, Trophy, Utensils, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import PortfolioEntry from "~/components/PortfolioEntry";
import { useState } from "react";
import { PortfolioCategory, type PortfolioEntryWithImages } from "./config";

type PortfolioComponentProps = {
  portfolio: PortfolioEntryWithImages[];
};

const categories: { text: PortfolioCategory; icon: LucideIcon }[] = [
  { text: PortfolioCategory.OfficeRetail, icon: Building2 },
  { text: PortfolioCategory.Education, icon: School },
  { text: PortfolioCategory.Healthcare, icon: Hospital },
  { text: PortfolioCategory.SportsEntertainment, icon: Trophy },
  { text: PortfolioCategory.Restaurants, icon: Utensils },
];

export default function PortfolioComponent({ portfolio }: PortfolioComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>(categories[0]!.text);
  const filtered = portfolio.filter((e) => e.category === selectedCategory);

  return (
    <div className="flex flex-col w-full grow shrink-0 justify-start items-center">
      <div className="flex flex-col shrink-0 w-full h-24 md:h-28 lg:h-36" />
      <div className="flex flex-col grow w-full px-6 md:px-8 lg:px-16 mb-12 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-left text-black dark:text-bone w-full mt-2">
          Our Portfolio
        </h1>
        <h2 className="text-base md:text-lg text-left w-full text-slate-600 dark:text-bone/80 mb-4">
          Select a category to see some of our happy clients.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full mb-6 lg:gap-3">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.text;
            return (
              <button
                key={category.text}
                onClick={() => setSelectedCategory(category.text)}
                className="flex grow"
              >
                <Card
                  className={`flex w-full group hover:cursor-pointer h-14 p-0 transition-colors ${
                    isSelected
                      ? "bg-slate-900 dark:bg-white border-slate-900"
                      : "hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  <CardContent className="flex flex-row w-full justify-start items-center p-0">
                    <category.icon
                      className={`ml-3 mr-2 w-7 h-7 stroke-1 shrink-0 ${
                        isSelected ? "stroke-white dark:stroke-black" : "stroke-slate-400"
                      }`}
                    />
                    <p
                      className={`text-xs lg:text-sm font-semibold text-left leading-tight ${
                        isSelected ? "text-white dark:text-slate-950" : "text-slate-600 dark:text-bone"
                      }`}
                    >
                      {category.text}
                    </p>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-6 items-center">
          {filtered.length === 0 ? (
            <p className="flex flex-grow h-full items-center text-2xl py-16">Coming soon!</p>
          ) : (
            filtered.map((pe, idx) => (
              <Card key={idx} className="w-full">
                <CardContent className="pt-6">
                  <PortfolioEntry title={pe.title} descParagraphs={pe.description} images={pe.images} />
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
