"use client";
import { useEffect, useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
	const pathname = usePathname();
	const [isInDarkMode, setIsInDarkMode] = useState<boolean>(false);

	const [fullScreenMenuIsOpen, setFullScreenMenuIsOpen] =
		useState<boolean>(false);
	const [isScrolledDownSome, setIsScrolledDownSome] =
		useState<boolean>(false);

	const [topNavFillColor, setTopNavFillColor] = useState<"black" | "bone">(
		pathname === "/" ? "bone" : isInDarkMode ? "bone" : "black"
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

		if (pathname === "/") {
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
			pathname === "/" ? "bone" : isInDarkMode ? "bone" : "black"
		);
		setHamburgerOpenColor(isInDarkMode ? "bone" : "black");
	}, [isInDarkMode]);

	useEffect(() => {
		setTopNavFillColor(
			pathname === "/" ? "bone" : isInDarkMode ? "bone" : "black"
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
			text: "Showcase",
			href: "/showcase"
		},
		{
			linkType: "local",
			text: "Portfolio",
			href: "/portfolio"
		},
		{
			linkType: "local",
			text: "About Us",
			href: "/about"
		},
		{
			linkType: "local",
			text: "Careers",
			href: "/careers"
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
							<img
								className="h-full"
								src={"OGLogo.png"}
								style={{ filter: "invert(1)" }}
							/>
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
    py-4 xl:py-0
    z-10
    h-24 md:h-28 lg:h-36 xl:h-40
`;

const logoContainerStyling = `
	h-full
    hover:cursor-pointer
    ml-6 md:ml-8 xl:ml-8
	pt-1 md:pt-4 xl:py-6
`;

const logoStylingBase = `
    flex
    flex-row
    aspect-square
    h-full
`;

const logoStylingVariants = {
	black: logoStylingBase + "invert",
	bone: logoStylingBase + "invert-0"
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
	tracking-wide
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
