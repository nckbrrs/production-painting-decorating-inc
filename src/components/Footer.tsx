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
	py-4
    shrink-0
    items-center
    justify-end
    bg-black dark:bg-gray-950
	border-gray-950 dark:border-slate-800 border-t-[1px]
`;

const copyrightTextStyling = `
	text-bone 
	font-thin
	text-xs sm:text-sm md:text-md 
	pr-5
`;

const InstagramIconContainerStyling = `
    w-8
	ml-5
    fill-bone
`;
