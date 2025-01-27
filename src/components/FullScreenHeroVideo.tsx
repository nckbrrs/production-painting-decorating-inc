export default function FullScreenHeroVideo({
	children,
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return (
		<div className={videoContainerStyling}>
			<video className={videoStyling} src={"/heroVideo.mov"} autoPlay muted loop playsInline />
			<div className={textOverVideoContainerStyling}>
				<h1 className={textOverVideoStyling}>
					lorem ipsum
				</h1>
			</div>
		</div>
	)
}

const videoContainerStyling = `
  flex
  h-screen
  min-h-screen
  relative
  overflow-hidden
`

const videoStyling = `
  grow
  object-cover
`

const textOverVideoContainerStyling = `
  absolute
  flex
  w-full
  h-full
  justify-center
  items-center
  bg-[#000]
  bg-opacity-50
`

const textOverVideoStyling = `
  font-bold
  text-4xl
  text-center
  uppercase
  tracking-widest
  text-bone
`