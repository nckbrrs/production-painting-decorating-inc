import AboutUs from "~/components/AboutUs";
import FullScreenHeroVideo from "~/components/FullScreenHeroVideo";

export default async function Home() {
	return (
		<main className={homePageContainerStyling}>
			<FullScreenHeroVideo />
			<div className="flex flex-col grow px-6">
				<AboutUs />
			</div>
		</main>
	);
}

const homePageContainerStyling = `
  pageContainer
  flex
  flex-col
  scroll-smooth
  animate-fadeIn
  items-center
`;
