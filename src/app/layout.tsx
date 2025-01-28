import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { Viewport, type Metadata } from "next";
import TopNav from "~/components/TopNav";
import { CSPostHogProvider } from "./_analytics/provider";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Config } from "tailwindcss";
import Footer from "~/components/Footer";

const twFullConfig = resolveConfig(
	tailwindConfig as Config & typeof tailwindConfig
);

export const metadata: Metadata = {
	title: "Production Painting & Decorating, Inc.",
	description: "Commercial painting and decorating company in Raleigh, NC.",
	icons: [{ rel: "icon", url: "/favicon.ico" }]
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
		<ClerkProvider>
			<CSPostHogProvider>
				<html lang="en" className={`${GeistSans.variable}`}>
					<body
						className={
							"flex flex-col h-screen bg-bone dark:bg-black"
						}
					>
						<TopNav />
						{children}
						<Footer />
					</body>
				</html>
			</CSPostHogProvider>
		</ClerkProvider>
	);
}
