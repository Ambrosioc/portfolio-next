import { About, Cta, Hero, Reviews, Services, Work } from "@/components/home";

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Services />
			<Work />
			<Reviews />
			<Cta />
		</main>
	);
}
