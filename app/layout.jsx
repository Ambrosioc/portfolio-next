import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { ThemeProvider } from "@/components/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
