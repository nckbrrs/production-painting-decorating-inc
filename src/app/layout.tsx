import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { Viewport, type Metadata } from "next";
import TopNav from "~/components/TopNav";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Config } from "tailwindcss";
import Footer from "~/components/Footer";

const twFullConfig = resolveConfig(
	tailwindConfig as Config & typeof tailwindConfig
);

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV == "development"
			? "http://localhost:3000"
			: "https://production-painting-decorating-inc.vercel.app/"
	),
	title: "Production Painting & Decorating, Inc.",
	description: "Commercial painting and decorating company in Raleigh, NC.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	openGraph: {
		title: "Production Painting & Decorating, Inc.",
		description:
			"Commercial painting and decorating company in Raleigh, NC.",
		siteName: "PPD, Inc.",
		type: "website",
		images: [
			{
				url: "/open-graph-img.png",
				width: 1200,
				height: 630,
				alt: "Preview image for PPD, Inc."
			}
		]
	}
};

export const viewport: Viewport = {
	themeColor: [
		{
			media: "(prefers-color-scheme: light)",
			color: twFullConfig.theme.colors["bone"]
		},
		{
			media: "(prefers-color-scheme: dark)",
			color: twFullConfig.theme.colors["black"]
		}
	]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body className={"flex flex-col h-screen bg-bone dark:bg-gray-950"}>
				<TopNav />
				{children}
				<Footer />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
