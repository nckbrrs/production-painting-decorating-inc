"use client";
import { useEffect, useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import Link from "next/link";
import Logo from "./icons/Logo";
import { usePathname } from "next/navigation";

const topNavFillColorsByPage: {
	[key: string]: { light: "black" | "bone"; dark: "black" | "bone" };
} = {
	"/": {
		light: "bone",
		dark: "bone"
	},
	"/portfolio": { light: "black", dark: "bone" },
	"/portfolio/office-building": { light: "black", dark: "bone" },
	"/inquiry": { light: "black", dark: "bone" },
	"/contact": { light: "black", dark: "bone" }
};

export default function TopNav() {
	const pathname = usePathname();
	const [isInDarkMode, setIsInDarkMode] = useState<boolean>(false);

	const [fullScreenMenuIsOpen, setFullScreenMenuIsOpen] =
		useState<boolean>(false);
	const [isScrolledDownSome, setIsScrolledDownSome] =
		useState<boolean>(false);

	const [topNavFillColor, setTopNavFillColor] = useState<"black" | "bone">(
		topNavFillColorsByPage[pathname]
			? isInDarkMode
				? topNavFillColorsByPage[pathname].dark
				: topNavFillColorsByPage[pathname].light
			: "bone"
	);
	const [hamburgerOpenColor, setHamburgerOpenColor] = useState<
		"black" | "bone"
	>(isInDarkMode ? "bone" : "black");

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
		setTimeout(() => {
			setFullScreenMenuIsOpen(false);
		}, 200);
	};

	const addBlurToHamburgerContainer = () => {
		const hamburgerContainer = document.querySelector<HTMLElement>(
			"#hamburgerContainer"
		)!;
		hamburgerContainer.className = hamburgerContainer.className.replaceAll(
			"backdrop-blur-none",
			"backdrop-blur-lg"
		);

		setTopNavFillColor(isInDarkMode ? "bone" : "black");
	};

	const removeBlurFromHamburgerContainer = () => {
		const hamburgerContainer = document.querySelector<HTMLElement>(
			"#hamburgerContainer"
		)!;
		hamburgerContainer.className = hamburgerContainer.className.replaceAll(
			"backdrop-blur-lg",
			"backdrop-blur-none"
		);

		if (
			topNavFillColorsByPage[pathname] &&
			((isInDarkMode &&
				topNavFillColorsByPage[pathname].dark == "bone") ||
				(!isInDarkMode &&
					topNavFillColorsByPage[pathname].light == "bone"))
		) {
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

		// Set initial dark mode truthiness
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			setIsInDarkMode(true);
		}

		// Add event listener for changes between dark and light mode
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (e) => {
				setIsInDarkMode(e.matches);
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
		setTopNavFillColor(
			topNavFillColorsByPage[pathname]
				? isInDarkMode
					? topNavFillColorsByPage[pathname].dark
					: topNavFillColorsByPage[pathname].light
				: "bone"
		);
		setHamburgerOpenColor(isInDarkMode ? "bone" : "black");
	}, [isInDarkMode]);

	useEffect(() => {
		setTopNavFillColor(
			topNavFillColorsByPage[pathname]
				? isInDarkMode
					? topNavFillColorsByPage[pathname].dark
					: topNavFillColorsByPage[pathname].light
				: "bone"
		);

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
			text: "Home",
			href: "/"
		},
		{
			linkType: "local",
			text: "Portfolio",
			href: "/portfolio"
		},
		{
			linkType: "local",
			text: "Inquiries",
			href: "/inquiry"
		},
		{
			linkType: "local",
			text: "Contact",
			href: "/contact"
		}
	];

	const onClickMenuLink = () => {
		closeFullScreenMenu();
	};

	return (
		<>
			<FullScreenMenu
				isOpen={fullScreenMenuIsOpen}
				links={links}
				onClickLink={onClickMenuLink}
			/>
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
							<Logo className="w-full h-full" />
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
    h-20 md:h-28 lg:h-36
`;

const logoContainerStyling = `
	h-full
    hover:cursor-pointer
    ml-6 md:ml-8 lg:ml-10
	pt-1 md:py-4 lg:py-6
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
	pr-3 md:pr-6 lg:pr-8
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
	text-black dark:text-bone
	text-xl
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
	fixed
	right-4 md:right-6 lg:right-8
	top-6 md:top-10 lg:top-14
	z-20
	backdrop-blur-none
	p-2
	rounded-md
`;
