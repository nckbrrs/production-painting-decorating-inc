import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Painting & Decorating, Inc.",
  description: "Commercial painting and decorating company in Raleigh, NC.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full text-xl font-semibold border-b p-4">
      <div>PPD INC.</div>
      <div>Sign In</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={"flex flex-col gap-4"}>
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
