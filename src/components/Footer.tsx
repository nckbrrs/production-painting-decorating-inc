import InstagramIcon from "./icons/Instagram";

export default function Footer() {
	return (
		<div className={footerContainerStyling}>
			<p className={copyrightTextStyling}>
				Copyright &copy; {new Date().getFullYear()} PPD, INC
			</p>
		</div>
	);
}

const footerContainerStyling = `
    flex
    flex-row
    w-full
    h-fit
	py-4
    shrink-0
    items-center
    justify-end
    bg-black
`;

const copyrightTextStyling = `
	text-bone 
	font-thin
	text-xs sm:text-sm md:text-md 
	mr-5
`;

const InstagramIconContainerStyling = `
    w-8
	ml-5
    fill-bone
`;
