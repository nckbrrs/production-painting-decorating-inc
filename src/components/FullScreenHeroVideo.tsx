import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { InquiryTypes } from "~/lib/inquiryForm/inquiryFormSchema";

export default function FullScreenHeroVideo({
	children
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return (
		<div className={videoContainerStyling}>
			<video
				className={videoStyling}
				src={"/heroVideo.mov"}
				autoPlay
				muted
				loop
				playsInline
			/>
			<div className={textOverVideoContainerStyling}>
				<div className="flex flex-col grow justify-center mt-16 md:mt-20 px-5">
					<h1 className={textOverVideoStyling}>
						Production Painting & Decorating, Inc.
					</h1>
				</div>
				<Link
					href={{
						pathname: "/inquiry",
						query: {
							inquiryType: InquiryTypes.GeneralInquiry
						}
					}}
				>
					<Button
						className="uppercase font-semibold mb-8 md:mb-12 md:text-lg md:p-6"
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
`;

const videoStyling = `
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
  text-3xl md:text-4xl lg:text-5xl
  text-center
  uppercase
  text-bone
`;
