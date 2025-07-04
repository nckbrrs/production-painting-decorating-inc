export type PortfolioCategory =
	| "Historical"
	| "Education"
	| "Restaurants"
	| "Healthcare"
	| "Sporting & Entertainment"
	| "Office & Retail";

export type PortfolioEntry = {
	category: PortfolioCategory;
	title: string;
	description: string[];
};

export type PortfolioEntryWithImageNames = PortfolioEntry & {
	images: { src: string }[];
};

const portfolio: PortfolioEntry[] = [
	{
		category: "Office & Retail",
		title: "CPG Provident Resources",
		description: [
			"This project featured detailed finish work in a high-end office environment, including painting of wood baseboards and the installation of an intricate, hand-painted wallcovering. Our team began by thoroughly prepping and painting all wood base, ensuring a smooth, consistent finish that complemented the overall color scheme of the space. The painted baseboards added a clean, refined border between flooring and walls, enhancing the architectural detail throughout the office.",
			"A key highlight of the project was the installation of a custom, hand-painted wallcovering. Due to the delicate nature and artistic value of the material, the installation required meticulous handling, precise alignment, and a high degree of care to preserve the design integrity."
		]
	},
	{
		category: "Office & Retail",
		title: "Elder Research at The Grove",
		description: [
			"This project involved detailed interior finishing work in a professional office space, with a focus on ceiling painting and the installation of wallcovering in intricate architectural areas. Our crew carefully prepped and painted the ceilings, using flat, low-reflective coatings to create a clean, uniform finish that enhances the space’s openness and lighting. Special attention was given to protecting surrounding surfaces and maintaining clean cut lines where ceilings met tall vertical walls.",
			"One of the standout features of this job was the installation of wallcovering within a series of decorative archways. These curved and recessed surfaces required precise measuring, custom cutting, and expert alignment to ensure a seamless application. The result is a sophisticated, high-end look that adds depth and character to the space."
		]
	},
	{
		category: "Office & Retail",
		title: "Romanoff Capital Blvd",
		description: [
			"This interior repaint project was completed in a large commercial office featuring tall walls and modern black doors with matching frames. The high ceilings required the use of lifts and extension tools to ensure safe, even application across all vertical surfaces.",
			"Our team prepped and painted the walls with a durable, low-VOC finish to create a clean, professional look suitable for a busy work environment. The striking contrast of satin black on the doors and frames added a sleek, modern aesthetic and tied together the overall design."
		]
	},
	{
		category: "Healthcare",
		title: "RTP Chiropractic",
		description: [
			"We completed a full interior repaint for a chiropractic office, focusing on delivering a clean, calming, and professional environment for both patients and staff. The scope of work included walls, ceilings, trim, and doors throughout the reception area, treatment rooms, offices, and hallways."
		]
	},
	{
		category: "Sporting & Entertainment",
		title: "UNC Boshamer Stadium",
		description: [
			"Our team was contracted to complete a full-scale repaint and custom mural project at a local baseball stadium. The scope included detailed preparation and painting of the team dugouts, exposed brickwork, surrounding walls, and handrails throughout the facility. We used durable, weather-resistant coatings to ensure long-lasting protection and a fresh, vibrant look that can stand up to game-day traffic and the elements.",
			"A standout feature of this project was our custom mural artwork, designed and installed in select fan-focused areas around the stadium. These unique, team-inspired murals added a memorable, community-focused touch, enhancing the overall fan experience and bringing new energy to the venue.",
			"This project reflects our commitment to high-quality craftsmanship and our ability to deliver creative finishes that make every space feel special."
		]
	},
	{
		category: "Sporting & Entertainment",
		title: "UNC Carmichael Arena",
		description: [
			"Our crew was engaged to revitalize a basketball complex with a focus on safety, aesthetics, and accessibility. This project involved detailed surface prep and painting of handrails surrounding the playing area to enhance both safety and appearance.",
			"We refinished the inside of the press boxes to create a bright, functional space for staff and media. To top it off, we made key modifications and clearly marked areas to improve handicap accessibility throughout the venue, ensuring compliance and ease of use for all guests."
		]
	},
	{
		category: "Education",
		title: "UNC Rams Village Dorms",
		description: [
			"Our team completed a large-scale interior repaint project for a local college’s student housing complex. The scope of work included prepping and painting all dorm room walls, doors, and frames throughout multiple buildings.",
			"Because the work was scheduled during the summer break, we operated on a tight timeline to ensure all dorms were fully refreshed and ready for students’ return. By coordinating closely with the contractor and following a strict schedule, our crew delivered high-quality finishes ahead of deadline, minimizing disruption and ensuring a clean, welcoming space for students to move into at the start of the new semester.",
			"This project highlights our commitment to efficient project management, detailed surface preparation, and dependable results — even on fast-paced, large-volume jobs."
		]
	},
	{
		category: "Education",
		title: "Vance County High School",
		description: [
			"Our team recently completed a full interior repaint for a local high school, revitalizing the campus with fresh, durable finishes. The scope included painting CMU block walls, interior drywall surfaces, doors, frames, built-in cubbies, libraries, cafeterias, and other common areas.",
			"This large-scale project required careful planning and coordination to ensure minimal disruption and a high-quality result across diverse spaces with heavy daily use. By using long-lasting, low-maintenance coatings, we helped create a bright, clean, and welcoming environment for students, staff, and visitors alike.",
			"This project showcases our experience managing multi-phase, high-volume educational repaints with a focus on craftsmanship, efficiency, and attention to detail."
		]
	}
];

export default portfolio;
