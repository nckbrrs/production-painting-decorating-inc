import PortfolioComponent from "./PortfolioComponent";
import fs from "fs";
import portfolio, { type PortfolioEntryWithImages } from "./config";

export default async function PortfolioPage() {
  const portfolioWithImages: PortfolioEntryWithImages[] = portfolio.map((entry) => {
    const dir = `public/portfolio/${entry.title.replaceAll(",", "")}/images`;
    let images: { src: string }[] = [];
    try {
      images = fs
        .readdirSync(dir)
        .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map((image) => ({
          src: `/portfolio/${entry.title.replaceAll(",", "")}/images/${image}`,
        }));
    } catch {
      // portfolio images not yet available
    }
    return { ...entry, images };
  });

  return <PortfolioComponent portfolio={portfolioWithImages} />;
}
