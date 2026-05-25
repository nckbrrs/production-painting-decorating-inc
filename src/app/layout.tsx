import "~/app/globals.css";
import { GeistSans } from "geist/font/sans";
import { Viewport, type Metadata } from "next";
import TopNav from "~/components/TopNav";
import Footer from "~/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://productionpaintingonline.com"
  ),
  title: "Production Painting & Decorating, Inc.",
  description: "Commercial painting and decorating company in Raleigh, NC.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Production Painting & Decorating, Inc.",
    description: "Commercial painting and decorating company in Raleigh, NC.",
    siteName: "PPD, Inc.",
    type: "website",
    images: [
      {
        url: "/images/open-graph-img.png",
        width: 1200,
        height: 630,
        alt: "Preview image for PPD, Inc.",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="flex flex-col min-h-screen bg-bone dark:bg-[#111111] font-sans">
        <TopNav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
