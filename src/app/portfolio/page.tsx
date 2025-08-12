import PorfolioComponent from "./PortfolioComponent";
import fs from "fs";
import portfolio, { PortfolioEntryWithImageNames } from "./config";

export default async function PortfolioPage() {
	const portfolioWithImages: PortfolioEntryWithImageNames[] = portfolio.map(
		(entry) => {
			return {
				...entry,
				images: fs
					.readdirSync(
						`public/portfolio/${entry.title.replaceAll(",", "")}/images`
					)
					.filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
					.map((image) => ({
						src: `/portfolio/${entry.title.replaceAll(",", "")}/images/${image}`
					}))
			};
		}
	);

	return <PorfolioComponent portfolio={portfolioWithImages} />;
}
