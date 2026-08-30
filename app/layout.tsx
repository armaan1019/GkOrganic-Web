import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./site-chrome";

export const metadata: Metadata = { title: "GK Organic | Organic Hair, Lash & Eyebrow Oil", description: "Organic oils for scalp health, hair, lashes, and eyebrows, plus bamboo brushes." };

/** Root shell that supplies global metadata, navigation, and the footer. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
