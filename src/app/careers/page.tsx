import { CareersForm } from "../../components/CareersForm"

export default function CareersPage() {
	return (
		<div className={pageContainerStyling}>
			<div className={spaceBehindHeaderStyling} />
			<div className={careersFormContainerStyling}>
				{/* <CareersForm /> */}
				<div className="w-full h-full flex justify-center items-center">Careers</div>
			</div>
		</div>
	)
}

const pageContainerStyling = `
  flex
  flex-col
  grow
  shrink-0
  min-h-screen
  scroll-smooth
  relative
  justify-start
  items-center
  bg-bone
`

const spaceBehindHeaderStyling = `
  flex
  flex-col
  shrink-0
  w-full
  h-24
`

const careersFormContainerStyling = `
	flex
	flex-col
	grow
	w-full sm:max-w-md
	px-6 sm:px-0
	pt-0 sm:pt-0
	pb-8
	items-center
	justify-start sm:justify-center
`