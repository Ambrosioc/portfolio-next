import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
	RiBriefcase4Fill,
	RiTeamFill,
	RiTodoFill,
	RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const cvFile = "/hero/cv.pdf";

const Hero = () => {
	return (
		<section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
			<div className="container mx-auto">
				<div className="flex justify-between gap-x-8">
					{/* text */}
					<div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center  xl:text-left">
						<div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
							Developer Fullstack
						</div>
						<h1 className="h1">Salut ! Moi c'est Ambro</h1>
						<p className="subtitle max-w-[490px] mx-auto xl:mx-0">
							👋 Salut ! Je suis un développeur Full Stack passionné, spécialisé
							dans React, Next.js, Node.js et Symfony. Avec une expérience
							significative en freelance, j'ai collaboré avec MKB-Automobile sur
							des solutions Next.js et BasitMark sur des projets Symfony. Ma
							pratique du freelance m'a permis de développer des applications
							web performantes tout en répondant aux besoins spécifiques de mes
							clients.
						</p>
						<p className="subtitle max-w-[490px] mx-auto xl:mx-0">
							Prêt pour de nouveaux défis passionnants, je suis ouvert aux
							opportunités de collaboration. Rencontrons-nous pour discuter de
							projets innovants ! 🚀
						</p>
						{/* buttons */}
						<div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
							<Link href={"/contact"}>
								<Button className="gap-x-2">
									Contacter moi <Send size={18} />
								</Button>
							</Link>
							<Link
								href={cvFile}
								download={"Ambro-Developer-FullStack.pdf"}
								target="_blank"
								rel="noopener noreferrer">
								<Button variant="secondary" className="gap-x-2">
									Télécharger CV <Download size={18} />
								</Button>
							</Link>
						</div>
						{/* socials */}
						<Socials
							containerStyles="flex gap-x-6 mx-auto xl:mx-0"
							iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
						/>
					</div>
					{/* Image */}
					<div className="hidden xl:flex relative">
						{/* bade 1 */}
						<Badge
							containerStyles="absolute top-[5%] -left-[5rem]"
							icon={<RiBriefcase4Fill />}
							endCountNum={2}
							badgeText="Années d'experiances"
						/>
						{/* bade 2 */}
						<Badge
							containerStyles="absolute top-[50%] -left-[1rem]"
							icon={<RiTodoFill />}
							endCountNum={3}
							badgeText="Projets terminés"
						/>
						{/* bade 3 */}
						{/* <Badge
							containerStyles="absolute top-[35%] -right-8"
							icon={<RiTeamFill />}
							endCountNum={10}
							endCountText={"k"}
							badgeText="Clients satisfaits"
						/> */}
						<div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
						<DevImg
							containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
							imgSrc={"/hero/developer.png"}
						/>
					</div>
				</div>
				{/* icon */}
				<div
					className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce
                ">
					<RiArrowDownSLine className="text-3xl text-primary" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
