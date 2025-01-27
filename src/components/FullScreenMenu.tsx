import { motion } from "framer-motion";
import Link from 'next/link';

interface FullScreenMenuProps {
	isOpen: boolean,
	links: { linkType: 'external' | 'local', text: string, href: string }[],
}

export default function FullScreenMenu({ isOpen, links }: FullScreenMenuProps) {
	return isOpen ? (
		<motion.div className={fullScreenMenuContainerStyling}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={menuLinksColStyling}>
				{links.map((l) =>
					l.linkType === 'external' ? (
						<a key={l.text} href={l.href} target="_blank" rel="noopener noreferrer">
							<p className={linkTextStyling}>{l.text.toUpperCase()}</p>
						</a>
					) : (
						<Link key={l.text} href={`${l.href}`}>
							<p className={linkTextStyling}>{l.text.toUpperCase()}</p>
						</Link>
					)
				)}
			</div>
		</motion.div>
	) : null
}

const fullScreenMenuContainerStyling = `
    flex
	flex-row 
    w-full
    h-full
    space-y-2 
	bg-bone
	dark:bg-black
    left-0 
    top-0 
    justify-center 
    items-center
    fixed
    z-20
`


const menuLinksColStyling = `
    flex
    flex-col
    flex-wrap
    group
    items-center
    justify-center
    space-y-0 lg:space-y-1
    translate-y-2 
`

const linkTextStyling = `
	w-full
    px-2
    text-3xl md:text-5xl lg:text-7xl
    font-bold
    duration-200
    group-hover:opacity-25
    group-hover:blur-[2px]
	group-hover:scale-[98%]
    hover:!opacity-100
    hover:!blur-0
	hover:!scale-[100%]
`