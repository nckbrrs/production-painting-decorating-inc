import * as React from "react";
import { cn } from "../lib/utils";

const LoopingSliderWithFade = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className }) => {
	const LoopItemsText = Array(10)
		.fill(null)
		.map((_, i) => ":]");

	const containerStyling = `
		flex
		flex-col
		justify-center
		w-full
	`;

	const loopItemListStyling = `
		flex
		flex-col
		flex-shrink-0
		w-full
		relative
		overflow-hidden
	`;

	return (
		<div className={cn(containerStyling, className)}>
			<div className={loopItemListStyling}>
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
	const loopSliderInnerStyling = `
		flex
		w-fit
		animate-infiniteSliderLoop
	`;

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
	const loopItemStyling = `
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

	return <div className={loopItemStyling}>{text}</div>;
}

function FadeToBoneOnSides() {
	const fadeStyling = `
		pointer-events-none
		absolute
		inset-0
		bg-fadeToBoneOnSides
	`;

	return <div className={fadeStyling} />;
}

export default LoopingSliderWithFade;
