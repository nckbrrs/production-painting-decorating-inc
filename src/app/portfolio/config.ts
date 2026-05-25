export enum PortfolioCategory {
  Historical = "Historical",
  Education = "Education",
  Restaurants = "Restaurants",
  Healthcare = "Healthcare",
  SportsEntertainment = "Sports & Entertainment",
  OfficeRetail = "Office & Retail",
}

export type PortfolioEntry = {
  category: PortfolioCategory;
  title: string;
  description: string[];
};

export type PortfolioEntryWithImages = PortfolioEntry & {
  images: { src: string }[];
};

const portfolio: PortfolioEntry[] = [
  {
    category: PortfolioCategory.OfficeRetail,
    title: "CPG Provident Resources",
    description: [
      "This project featured detailed finish work in a high-end office environment, including painting of wood baseboards and the installation of an intricate, hand-painted wallcovering. Our team began by thoroughly prepping and painting all wood base, ensuring a smooth, consistent finish that complemented the overall color scheme of the space.",
      "A key highlight of the project was the installation of a custom, hand-painted wallcovering. Due to the delicate nature and artistic value of the material, the installation required meticulous handling, precise alignment, and a high degree of care to preserve the design integrity.",
    ],
  },
  {
    category: PortfolioCategory.OfficeRetail,
    title: "Elder Research at The Grove",
    description: [
      "This project involved detailed interior finishing work in a professional office space, with a focus on ceiling painting and the installation of wallcovering in intricate architectural areas. Our crew carefully prepped and painted the ceilings, using flat, low-reflective coatings to create a clean, uniform finish.",
      "One of the standout features of this job was the installation of wallcovering within a series of decorative archways. These curved and recessed surfaces required precise measuring, custom cutting, and expert alignment to ensure a seamless application.",
    ],
  },
  {
    category: PortfolioCategory.OfficeRetail,
    title: "Romanoff Capital Blvd",
    description: [
      "This interior repaint project was completed in a large commercial office featuring tall walls and modern black doors with matching frames. The high ceilings required the use of lifts and extension tools to ensure safe, even application across all vertical surfaces.",
      "Our team prepped and painted the walls with a durable, low-VOC finish to create a clean, professional look suitable for a busy work environment.",
    ],
  },
  {
    category: PortfolioCategory.OfficeRetail,
    title: "Carr, Riggs, and Ingram at the Grove",
    description: [
      "We completed a comprehensive interior painting and finishing project for a modern office space featuring open ceilings and wall-to-deck-high surfaces. The project included painting accent walls and carefully matching stains to various wood finishes throughout the space.",
      "Additionally, we installed wallcovering in select areas to add texture and visual interest. Our team navigated the challenges of working with open ceilings and high surfaces.",
    ],
  },
  {
    category: PortfolioCategory.Healthcare,
    title: "RTP Chiropractic",
    description: [
      "We completed a full interior repaint for a chiropractic office, focusing on delivering a clean, calming, and professional environment for both patients and staff. The scope of work included walls, ceilings, trim, and doors throughout the reception area, treatment rooms, offices, and hallways.",
    ],
  },
  {
    category: PortfolioCategory.SportsEntertainment,
    title: "UNC Boshamer Stadium",
    description: [
      "Our team was contracted to complete a full-scale repaint and custom mural project at a local baseball stadium. The scope included detailed preparation and painting of the team dugouts, exposed brickwork, surrounding walls, and handrails throughout the facility.",
      "A standout feature of this project was our custom mural artwork, designed and installed in select fan-focused areas around the stadium. These unique, team-inspired murals added a memorable, community-focused touch.",
    ],
  },
  {
    category: PortfolioCategory.SportsEntertainment,
    title: "UNC Carmichael Arena",
    description: [
      "Our crew was engaged to revitalize a basketball complex with a focus on safety, aesthetics, and accessibility. This project involved detailed surface prep and painting of handrails surrounding the playing area.",
      "We refinished the inside of the press boxes and made key modifications to improve handicap accessibility throughout the venue.",
    ],
  },
  {
    category: PortfolioCategory.Education,
    title: "UNC Rams Village Dorms",
    description: [
      "Our team completed a large-scale interior repaint project for a local college's student housing complex. The scope of work included prepping and painting all dorm room walls, doors, and frames throughout multiple buildings.",
      "Because the work was scheduled during the summer break, we operated on a tight timeline to ensure all dorms were fully refreshed and ready for students' return.",
    ],
  },
  {
    category: PortfolioCategory.Education,
    title: "Vance County High School",
    description: [
      "Our team recently completed a full interior repaint for a local high school, revitalizing the campus with fresh, durable finishes. The scope included painting CMU block walls, interior drywall surfaces, doors, frames, built-in cubbies, libraries, cafeterias, and other common areas.",
      "This large-scale project required careful planning and coordination to ensure minimal disruption and a high-quality result across diverse spaces.",
    ],
  },
  {
    category: PortfolioCategory.Education,
    title: "Pinkston Elementary School",
    description: [
      "We completed a detailed painting project at an elementary school gymnasium, featuring high accent walls and an intricately detailed ceiling. The scope required careful surface preparation and precise application to highlight architectural features.",
      "Working at height with lifts and scaffolding, our team ensured clean lines and consistent coverage throughout the expansive wall and ceiling areas.",
    ],
  },
];

export default portfolio;
