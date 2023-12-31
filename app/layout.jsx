import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { ThemeProvider } from "@/components/theme";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
	title: "Ambrosie Cazimira",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={outfit.className}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
