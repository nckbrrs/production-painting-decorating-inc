import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "~/components/TopNav";


export const metadata: Metadata = {
	title: "Production Painting & Decorating, Inc.",
	description: "Commercial painting and decorating company in Raleigh, NC.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className={`${GeistSans.variable}`}>
				<body className={"flex flex-col h-screen"}>
					<TopNav />
					{children}
					{modal}
					<div id="modal-root" />
				</body>
			</html>
		</ClerkProvider>
	);
}
