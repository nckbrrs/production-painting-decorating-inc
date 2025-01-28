import * as React from "react";
import { cn } from "../lib/utils";

const LoopingSliderWithFade = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const LoopItemsText = Array(10)
		.fill(null)
		.map((_, i) => ":]");

	return (
		<div className={cn(infiniteSliderContainerStyling, className)}>
			<div className={tagListStyling}>
				<LoopingSlider>
					{LoopItemsText.map((tag) => (
						<LoopItem text={tag} key={tag} />
					))}
				</LoopingSlider>
				<FadeToBoneOnSides />
			</div>
		</div>
	);
});

function LoopingSlider({
	children
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return (
		<div className={loopSliderInnerStyling}>
			{children}
			{children}
		</div>
	);
}

function LoopItem({
	text
}: Readonly<{
	text: string;
}>) {
	return <div className={tagStyling}>{text}</div>;
}

function FadeToBoneOnSides() {
	return <div className={fadeStyling} />;
}

const infiniteSliderContainerStyling = `
  flex
  flex-col
  justify-center
  w-full
`;

const tagListStyling = `
  flex
  flex-col
  flex-shrink-0
  w-full
  relative
  overflow-hidden
`;

const tagStyling = `
  flex
  opacity-80
  items-center
  justify-center
  rounded-sm
  p-1
  mx-8
  w-24
  h-24
  text-5xl
  font-bold
  text-black
  drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]
`;

const fadeStyling = `
  pointer-events-none
  absolute
  inset-0
  bg-fadeToBoneOnSides
`;

const loopSliderInnerStyling = `
  flex
  w-fit
  animate-infiniteSliderLoop
`;

export default LoopingSliderWithFade;
