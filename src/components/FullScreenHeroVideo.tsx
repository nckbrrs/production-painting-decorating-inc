import Link from "next/link";
import { Button } from "./ui/button";

export default function FullScreenHeroVideo({
	children
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return (
		<div className={videoContainerStyling}>
			<video
				className={videoStyling}
				src={"/stock-vid-5.mp4"}
				autoPlay
				muted
				loop
				playsInline
			/>
			<div className={textOverVideoContainerStyling}>
				<div className="flex flex-col grow justify-center mt-16 md:mt-20 px-6">
					<h1 className={textOverVideoStyling}>
						Production Painting & Decorating, Inc.
					</h1>
				</div>
				<Link href="/inquiry">
					<Button
						className="uppercase font-semibold mb-8 md:mb-12 md:text-lg md:p-6 dark:bg-bone dark:text-black dark:hover:bg-white/80"
						variant={"secondary"}
					>
						Contact
					</Button>
				</Link>
			</div>
		</div>
	);
}

const videoContainerStyling = `
  flex
  h-screen
  min-h-screen
  relative
  overflow-hidden
  w-full
`;

const videoStyling = `
	h-full
	w-full
  	grow
  	object-cover
`;

const textOverVideoContainerStyling = `
  absolute
  flex
  flex-col
  w-full
  h-full
  space-y-2
  justify-center
  items-center
  bg-[#000]
  bg-opacity-50
`;

const textOverVideoStyling = `
  font-bold
  text-3xl lg:text-5xl
  text-center
  uppercase
  text-bone
`;
