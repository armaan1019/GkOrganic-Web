import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./site-chrome";

export const metadata: Metadata = { title: "GK_Organic | Botanical care", description: "Small-batch soaps and botanical oils." };

/** Root shell that supplies global metadata, navigation, and the footer. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
