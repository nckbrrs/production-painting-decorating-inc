import AboutUs from "~/components/AboutUs";
import FullScreenHeroVideo from "~/components/FullScreenHeroVideo";

export default async function Home() {
	return (
		<main className={homePageContainerStyling}>
			<FullScreenHeroVideo />
			<div className={aboutUsContainer}>
				<AboutUs />
			</div>
		</main>
	);
}

const homePageContainerStyling = `
	antialiased
	pageContainer
	flex
	flex-col
	scroll-smooth
	animate-fadeIn
  	items-center
`;

const aboutUsContainer = `
	flex
	flex-col
	grow
	px-6
`;
