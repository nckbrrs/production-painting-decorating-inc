"use client";
import { useEffect, useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import Link from "next/link";
import LogoSVG from "./icons/Logo";
import { usePathname } from "next/navigation";

const topNavFillColorsByPage: {
	[key: string]: "black" | "bone";
} = {
	"/": "bone",
	"/portfolio": "black",
	"/portfolio/office-building": "black",
	"/contact": "black",
	"/careers": "black"
};

export default function TopNav() {
	const [fullScreenMenuIsOpen, setFullScreenMenuIsOpen] =
		useState<boolean>(false);
	const [isScrolledDownSome, setIsScrolledDownSome] =
		useState<boolean>(false);
	const [topNavFillColor, setTopNavFillColor] = useState<"black" | "bone">(
		"bone"
	);
	const [hamburgerOpenColor, setHamburgerOpenColor] = useState<
		"black" | "bone"
	>("black");
	const pathname = usePathname();

	const disableScroll = () => {
		document.body.style.overflowY = "hidden";
	};

	const enableScroll = () => {
		document.body.style.overflowY = "auto";
	};

	const onClickHamburger = () => {
		fullScreenMenuIsOpen ? closeFullScreenMenu() : openFullScreenMenu();
	};

	const openFullScreenMenu = () => {
		setFullScreenMenuIsOpen(true);
		disableScroll();
	};

	const closeFullScreenMenu = () => {
		enableScroll();
		setFullScreenMenuIsOpen(false);
	};

	const addBlurToHamburgerContainer = () => {
		const hamburgerContainer = document.querySelector<HTMLElement>(
			"#hamburgerContainer"
		)!;
		hamburgerContainer.className = hamburgerContainer.className.replaceAll(
			"backdrop-blur-none",
			"backdrop-blur-3xl"
		);

		setTopNavFillColor("black");
	};

	const removeBlurFromHamburgerContainer = () => {
		const hamburgerContainer = document.querySelector<HTMLElement>(
			"#hamburgerContainer"
		)!;
		hamburgerContainer.className = hamburgerContainer.className.replaceAll(
			"backdrop-blur-3xl",
			"backdrop-blur-none"
		);

		if (topNavFillColorsByPage[pathname] == "bone") {
			setTopNavFillColor("bone");
		}
	};

	// First-render things
	useEffect(() => {
		// Handler to call on window resize
		const handleResize = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};

		// Add event listener for resize
		window.addEventListener("resize", handleResize);

		// Call resize handler right away so state gets updated with initial window size
		handleResize();

		// Add event listener for dark mode
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (e) => {
				// If dark mode, set hamburger bars' open color to bone
				setHamburgerOpenColor(e.matches ? "bone" : "black");
			});

		// Add listener to make esc key to close full-screen menu
		document.onkeydown = (event) => {
			if (event.key === "Escape") {
				closeFullScreenMenu();
			}
		};

		// Add scroll listener to add styling to hamburger menu when scrolled down
		document.addEventListener("scroll", (e: any) => {
			if (e.srcElement.scrollingElement.scrollTop > 60) {
				setIsScrolledDownSome(true);
			} else {
				setIsScrolledDownSome(false);
			}
		});

		// Remove resize event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (isScrolledDownSome) {
			addBlurToHamburgerContainer();
		} else {
			removeBlurFromHamburgerContainer();
		}
	}, [isScrolledDownSome]);

	useEffect(() => {
		setTopNavFillColor(topNavFillColorsByPage[pathname] ?? "bone");
		setFullScreenMenuIsOpen(false);
		enableScroll();
	}, [pathname]);

	const links: {
		linkType: "external" | "local";
		text: string;
		href: string;
	}[] = [
		{
			linkType: "local",
			text: "Portfolio",
			href: "/portfolio"
		},
		{
			linkType: "local",
			text: "Contact",
			href: "/contact"
		}
	];

	return (
		<>
			<FullScreenMenu isOpen={fullScreenMenuIsOpen} links={links} />
			<div
				id="hamburgerContainer"
				className={hamburgerContainerStyling}
				onClick={onClickHamburger}
			>
				<Hamburger
					isOpen={fullScreenMenuIsOpen}
					onClick={onClickHamburger}
					openColor={hamburgerOpenColor}
					closedColor={topNavFillColor}
				/>
			</div>
			<div className={topNavContainerStyling}>
				<div className={logoContainerStyling}>
					<div className={logoStylingVariants[topNavFillColor]}>
						<Link href={"/"}>
							<LogoSVG className="w-full h-full" />
						</Link>
					</div>
				</div>
				<div className={textLinksRowStyling}>
					{links.map((l) =>
						l.linkType === "external" ? (
							<Link
								key={`${l.text}-link`}
								className={
									textLinkStylingVariants[topNavFillColor]
								}
								href={l.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{l.text}
							</Link>
						) : (
							<Link
								key={`${l.text}-link`}
								className={
									textLinkStylingVariants[topNavFillColor]
								}
								href={l.href}
							>
								{l.text}
							</Link>
						)
					)}
				</div>
			</div>
		</>
	);
}

const topNavContainerStyling = `
	absolute    
    w-full
    flex
    flex-row
    justify-between
    items-center
    py-4
    z-10
    h-20
`;

const logoContainerStyling = `
	h-full
    hover:cursor-pointer
    ml-5
	mt-1
`;

const logoStylingBase = `
    flex
    flex-row
    aspect-square
    h-full
`;

const logoStylingVariants = {
	black: logoStylingBase + "fill-black",
	bone: logoStylingBase + "fill-bone"
};

const textLinksRowStyling = `
    flex
    flex-row
    w-full
    justify-end
    items-center
    hidden xl:flex
    group
    mr-3
    gap-4
`;

const textLinkStylingBase = `
	font-bold
	hover:-translate-y-[1px]
	hover:cursor-pointer
	duration-100
	uppercase
	hover:drop-shadow-sm
	group-hover:opacity-55
	group-hover:blur-[1px]
	hover:!opacity-100
	hover:!blur-0
	text-center
	text-black
`;

const textLinkStylingVariants = {
	black: textLinkStylingBase + "text-black",
	bone: textLinkStylingBase + "text-bone"
};

const hamburgerContainerStyling = `
	flex
	flex-col
	w-12
	h-12
	block xl:hidden
	cursor-pointer
	duration-75
	hover:scale-110
	mr-3
	fixed
	right-0
	top-5
	z-20
	backdrop-blur-none
	p-2
	rounded-md
`;
