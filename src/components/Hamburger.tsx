import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { useEffect, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig);

interface HamburgerProps {
	isOpen: boolean;
	openColor: "black" | "bone";
	closedColor: "black" | "bone";
	onClick: () => void;
}

export default function Hamburger({
	isOpen,
	openColor,
	closedColor,
	onClick
}: HamburgerProps) {
	const hamburgerBarMotionVariants = {
		top: {
			closed: {
				backgroundColor: fullConfig.theme.colors[closedColor]
			},
			open: {
				rotate: 45,
				translateY: `${((100 - 3 * 10) / 4 + 10) * 10}%`,
				scale: -0.75,
				backgroundColor: fullConfig.theme.colors[openColor]
			}
		},
		middle: {
			closed: {},
			open: {
				translateX: 100,
				opacity: 0
			}
		},
		bottom: {
			closed: {
				backgroundColor: fullConfig.theme.colors[closedColor]
			},
			open: {
				rotate: -45,
				translateY: `-${((100 - 3 * 10) / 4 + 10) * 10}%`,
				scale: -0.75,
				backgroundColor: fullConfig.theme.colors[openColor]
			}
		}
	};

	return (
		<motion.div
			className={hamburgerStyling}
			animate={isOpen ? "open" : "closed"}
			onClick={onClick}
		>
			<motion.div
				className={hamburgerBarStylingVariants[closedColor]}
				variants={hamburgerBarMotionVariants.top}
			/>
			<motion.div
				className={hamburgerBarStylingVariants[closedColor]}
				variants={hamburgerBarMotionVariants.middle}
			/>
			<motion.div
				className={hamburgerBarStylingVariants[closedColor]}
				variants={hamburgerBarMotionVariants.bottom}
			/>
		</motion.div>
	);
}

const hamburgerStyling = `
    flex
    flex-col
    h-full
    w-full
    justify-evenly
    duration-100
    bg-transparent
	rounded-xl
    p-0
`;

const hamburgerBarStylingBase = `
    hamburgerBar
    flex
    flex-row
    w-full
    h-[10%]
`;

const hamburgerBarStylingVariants = {
	black: hamburgerBarStylingBase + "bg-black",
	bone: hamburgerBarStylingBase + "bg-bone"
};
