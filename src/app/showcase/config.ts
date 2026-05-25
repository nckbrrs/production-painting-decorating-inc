export type ShowcaseEntry = {
  id: string;
  title: string;
  previewDescription: string;
  longDescription: string[];
  imgSrcs: string[];
  videoSrc: string;
  posterSrc: string;
};

export const showcaseConfig: Omit<ShowcaseEntry, "posterSrc">[] = [
  {
    id: "4102-S-Miami",
    title: "4102 S Miami",
    previewDescription:
      "Full exterior repaint of large industrial warehouse, including surface preparation, weather-resistant coatings, and safe execution with minimal operational disruption.",
    longDescription: [
      "We recently completed a full exterior repaint of a large industrial warehouse, delivering a durable and visually upgraded finish. The project involved thorough surface preparation, including power washing, scraping, and caulking, followed by the application of high-performance, weather-resistant coatings designed for industrial environments.",
      "Our crew painted all exterior surfaces, including metal siding, structural steel, loading docks, and overhead doors, while safely navigating elevated work areas using lifts and rigging. Throughout the project, we coordinated closely with on-site staff to avoid disrupting operations and adhered to all safety and access protocols.",
    ],
    imgSrcs: [
      "/showcase/4102-S-Miami/images/1.png",
      "/showcase/4102-S-Miami/images/2.png",
      "/showcase/4102-S-Miami/images/3.png",
      "/showcase/4102-S-Miami/images/4.png",
      "/showcase/4102-S-Miami/images/5.png",
    ],
    videoSrc: "https://player.vimeo.com/video/1099069234?h=16046a011f&initial_quality=4K",
  },
  {
    id: "Habitat-Restore-of-Durham",
    title: "Habitat Restore of Durham",
    previewDescription:
      "Exterior repaint and restoration of Habitat ReStore building, including EIFS painting, detailed patchwork, and surface repairs.",
    longDescription: [
      "We completed an exterior repaint and restoration of a Habitat ReStore building, focusing on refreshing its appearance and extending the life of its exterior. The scope included painting the building's EIFS and performing detailed patchwork and surface repairs throughout.",
      "Our team addressed cracks, damaged areas, and weathered sections to restore a smooth, consistent finish before applying high-quality, exterior-grade coatings. The result was a revitalized façade that looked clean, professional, and welcoming.",
    ],
    imgSrcs: [
      "/showcase/Habitat-Restore-of-Durham/images/1.jpg",
      "/showcase/Habitat-Restore-of-Durham/images/2.jpg",
      "/showcase/Habitat-Restore-of-Durham/images/3.jpg",
      "/showcase/Habitat-Restore-of-Durham/images/4.jpg",
      "/showcase/Habitat-Restore-of-Durham/images/5.jpg",
    ],
    videoSrc: "https://player.vimeo.com/video/1099069263?h=80bad9928b&initial_quality=4K",
  },
  {
    id: "Northern-High-School",
    title: "Northern High School",
    previewDescription:
      "Installation of wood wallcovering feature wall in high school café, resulting in a modern, inviting space with enhanced warmth and character.",
    longDescription: [
      "We completed a unique feature wall installation for a high school café, using a wood wallcovering product that added warmth and character to the space. The material was particularly challenging due to its weight, rigidity, and the precision required for a clean, seamless finish.",
      "Our team carefully prepared the wall surface and executed the installation with attention to alignment, spacing, and overall aesthetic impact. The finished product transformed the café environment into a more modern, inviting space for students and staff.",
    ],
    imgSrcs: [
      "/showcase/Northern-High-School/images/1.jpg",
      "/showcase/Northern-High-School/images/2.jpg",
      "/showcase/Northern-High-School/images/3.jpg",
      "/showcase/Northern-High-School/images/4.jpg",
    ],
    videoSrc: "https://player.vimeo.com/video/1099069271?h=bbc315a7e7&initial_quality=4K",
  },
  {
    id: "State-of-Golf",
    title: "State of Golf",
    previewDescription:
      "Custom interior paint project for high-end golf simulation arcade, including ceiling cloud and wall finishes complementing the rustic-industrial design.",
    longDescription: [
      "We completed a custom interior paint project for a high-end golf simulation arcade located in the American Tobacco Campus in Durham. The space featured exposed architecture and a rustic-industrial design, which we complemented with carefully selected paint finishes.",
      "Our scope included painting large ceiling clouds to create depth and definition within the open layout, along with wall surfaces that tied into the building's historic, rustic aesthetic. The project required precision, coordination with other trades, and a keen eye for design consistency.",
    ],
    imgSrcs: [
      "/showcase/State-of-Golf/images/1.jpg",
      "/showcase/State-of-Golf/images/2.jpg",
      "/showcase/State-of-Golf/images/3.jpg",
      "/showcase/State-of-Golf/images/4.jpg",
      "/showcase/State-of-Golf/images/5.jpg",
      "/showcase/State-of-Golf/images/6.jpg",
      "/showcase/State-of-Golf/images/7.jpg",
      "/showcase/State-of-Golf/images/8.jpg",
      "/showcase/State-of-Golf/images/9.jpg",
      "/showcase/State-of-Golf/images/10.jpg",
    ],
    videoSrc: "https://player.vimeo.com/video/1099069244?h=472d4656ab&initial_quality=4K",
  },
  {
    id: "Triangle-Rock-Club",
    title: "Triangle Rock Club 1",
    previewDescription:
      "Vibrant interior and exterior paint project for rock climbing and fitness center, featuring high-ceiling work with bold accent colors.",
    longDescription: [
      "We completed a vibrant and high-impact paint project for a rock climbing and fitness center, focusing on both interior and exterior elements. The interior scope included painting high ceilings, which required extensive lift work and safety planning to access the elevated spaces around climbing walls and equipment.",
      "On the exterior, we added bright, eye-catching accent colors that aligned with the energetic branding of the facility and helped it stand out in its surroundings.",
    ],
    imgSrcs: [
      "/showcase/Triangle-Rock-Club/images/1.jpg",
      "/showcase/Triangle-Rock-Club/images/2.jpg",
      "/showcase/Triangle-Rock-Club/images/3.jpg",
      "/showcase/Triangle-Rock-Club/images/4.jpg",
    ],
    videoSrc: "https://player.vimeo.com/video/1099069249?h=f4768cb74e&initial_quality=4K",
  },
  {
    id: "Triangle-Rock-Club-2",
    title: "Triangle Rock Club 2",
    previewDescription:
      "Detailed interior paint project for rock climbing facility with exceptionally high ceilings and complex architecture.",
    longDescription: [
      "We completed a detailed and technically demanding paint project for a second rock climbing facility, which featured exceptionally high ceilings and intricate architectural elements throughout. This project required precise coordination and skilled lift operation to navigate around climbing structures, rigging systems, and exposed framing.",
      "Our team applied bold, clean finishes to both ceiling and wall surfaces, enhancing the visual impact of the space while maintaining the durability needed for a high-traffic athletic environment.",
    ],
    imgSrcs: [
      "/showcase/Triangle-Rock-Club-2/images/1.jpg",
      "/showcase/Triangle-Rock-Club-2/images/2.jpg",
      "/showcase/Triangle-Rock-Club-2/images/3.jpg",
      "/showcase/Triangle-Rock-Club-2/images/4.jpg",
      "/showcase/Triangle-Rock-Club-2/images/5.jpg",
      "/showcase/Triangle-Rock-Club-2/images/6.jpg",
      "/showcase/Triangle-Rock-Club-2/images/7.jpg",
      "/showcase/Triangle-Rock-Club-2/images/8.jpg",
      "/showcase/Triangle-Rock-Club-2/images/9.jpg",
    ],
    videoSrc: "https://player.vimeo.com/video/1099069257?h=6c52198ced&initial_quality=4K",
  },
  {
    id: "Cary-Soccer-Park",
    title: "Cary Soccer Park",
    previewDescription:
      "Exterior repaint of large metal bleachers and seating areas at major soccer park using industrial-grade coatings.",
    longDescription: [
      "We completed an exterior repaint project for large, exposed metal bleachers and seating areas at a major soccer park, focusing on durability and visual impact. The scope involved prepping and painting structural steel, guardrails, and other exposed elements subject to constant weather exposure and heavy use.",
      "Our team used industrial-grade coatings designed to resist rust, UV damage, and wear, ensuring long-term protection and a clean, professional appearance.",
    ],
    imgSrcs: [
      "/showcase/Cary-Soccer-Park/images/1.jpg",
      "/showcase/Cary-Soccer-Park/images/2.jpg",
      "/showcase/Cary-Soccer-Park/images/3.jpg",
      "/showcase/Cary-Soccer-Park/images/4.jpg",
      "/showcase/Cary-Soccer-Park/images/5.jpg",
      "/showcase/Cary-Soccer-Park/images/6.jpg",
      "/showcase/Cary-Soccer-Park/images/7.jpg",
      "/showcase/Cary-Soccer-Park/images/8.jpg",
      "/showcase/Cary-Soccer-Park/images/9.jpg",
    ],
    videoSrc: "https://player.vimeo.com/video/1112923376?h=5276359576&initial_quality=4K",
  },
];
