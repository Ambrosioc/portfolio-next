import DevImg from "../../devImg/DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Briefcase } from "lucide-react";
import { infosData, qualificationsData, skillsData } from "@/utils/constant";
import { getData } from "@/utils/dataUtils";

const About = () => {
	return (
		<section className="xl:h-[860px] pb-12 xl:py-24">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
					À propos de moi
				</h2>
				<div className="flex flex-col xl:flex-row">
					{/* image */}
					<div className="hidden xl:flex flex-1 relative">
						<DevImg
							containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
							imgSrc={"/about/developer.png"}
						/>
					</div>
					{/* tabs */}
					<div className="flex-1">
						<Tabs defaultValue="personal">
							<TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border xl:shadow-2xl">
								<TabsTrigger className="w-[162px] xl:w-auto " value="personal">
									Infos
								</TabsTrigger>
								<TabsTrigger
									className="w-[162px] xl:w-auto "
									value="qualifications">
									Qualifications
								</TabsTrigger>
								<TabsTrigger className="w-[162px] xl:w-auto " value="skills">
									Skills
								</TabsTrigger>
							</TabsList>
							{/* tabs content */}
							<div className="text-lg mt-12 xl:mt-8">
								<TabsContent value="personal">
									<div className="text-center xl:text-left">
										<h3 className="h3 mb-4">Developer FullStack</h3>
										<p className="subtitle max-w-xl max-auto xl:mx-0">
											Mon expérience dans le développement web inclut des
											missions chez BasitMark Paris, MKB - Automobile et Planity
											Paris 2. J'ai également obtenu un diplôme de Concepteur
											développeur d'applications à Sieli et un diplôme de
											Développeur Web Bac+2 à Alt-Rh Consulting.
										</p>
										<div className="grid xl:grid-cols-2 gap-4 mb-12">
											{infosData.map((info, index) => (
												<div
													key={index}
													className="flex items-center gap-x-4 mx-auto xl:mx-0">
													<span className="text-primary">{info.icon}</span>
													<p>{info.text}</p>
												</div>
											))}
										</div>
										<div>
											<div className="text-primary">Langage Skill</div>
											<div className="border-b border-border"></div>
											<div>Français, Anglais, Lingala, Portugais</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="qualifications">
									<div>
										<h3 className="h3 mb-8 text-center xl:text-left">
											Qualifications
										</h3>
										{/* experiance and education wrapper */}
										<div className="grid md:grid-cols-2 gap-y-8">
											{/* experiance */}
											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<Briefcase />
													<h4 className="capitalize font-medium">
														{getData(qualificationsData, "experiences").title}
													</h4>
												</div>
												<div className="flex flex-col gap-y-8 ">
													{getData(qualificationsData, "experiences").data.map(
														(item, index) => {
															const { company, qualification, date } = item;
															return (
																<div key={index} className="flex gap-x-8 group">
																	<div className="h-[84px] w-[1px] bg-border relative ml-2">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all durantion-500"></div>
																	</div>
																	<div>
																		<h5 className="font-semibold text-xl leading-none mb-2">
																			{company}
																		</h5>
																		<p className="text-lg leading-none text-muted-foreground mb-4">
																			{qualification}
																		</p>
																		<p className="text-base font-medium">
																			{date}
																		</p>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
											{/* education */}
											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<GraduationCap size={28} />
													<h4 className="capitalize font-medium">
														{getData(qualificationsData, "etudes").title}
													</h4>
												</div>
												<div className="flex flex-col gap-y-8 ">
													{getData(qualificationsData, "etudes").data.map(
														(item, index) => {
															const { school, qualification, date } = item;
															return (
																<div key={index} className="flex gap-x-8 group">
																	<div className="h-[84px] w-[1px] bg-border relative ml-2">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all durantion-500"></div>
																	</div>
																	<div>
																		<h5 className="font-semibold text-xl leading-none mb-2">
																			{school}
																		</h5>
																		<p className="text-lg leading-none text-muted-foreground mb-4">
																			{qualification}
																		</p>
																		<p className="text-base font-medium">
																			{date}
																		</p>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="skills">
									<div className=" text-center xl:text-left">
										<h3 className="h3 mb-8">Outils que j'utilise</h3>
										<div className="mb-16">
											<h4 className="text-xl font-semibold mb2">Skills</h4>
											<div className="border-b border-border mb-4"></div>
											<div>
												{getData(skillsData, "skills").data.map(
													(item, index) => {
														const { name } = item;
														return (
															<div
																key={index}
																className="w-2/4 text-center xl:text-left mx-auto xl:mx-0">
																<p className="font-medium">{name}</p>
															</div>
														);
													}
												)}
											</div>
										</div>
										<div>
											<h4 className="text-xl font-semibold mb-2 xl:text-left">
												Outils
											</h4>
											<div className="border-b border-border mb-4"></div>
											<div className="grid grid-cols-2 gap-4"></div>
											<div className="flex gap-x-8 justify-center xl:justify-start">
												{getData(skillsData, "tools").data.map(
													(item, index) => {
														const { imgPath } = item;
														return (
															<div key={index}>
																<Image
																	src={imgPath}
																	alt="skill"
																	width={32}
																	height={32}
																	priority
																/>
															</div>
														);
													}
												)}
											</div>
										</div>
									</div>
									{/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
										{skillsData.map((skill, index) => (
											<div key={index}>
												<h3 className="text-xl font-bold mb-4">
													{skill.title}
												</h3>
												{skill.data.map((data, index) => (
													<div key={index} className="mb-4">
														{data.name ? (
															<p className="text-sm">{data.name}</p>
														) : (
															<div className="w-8 h-8">
																<Image
																	src={data.imgPath}
																	alt="skill"
																	width={32}
																	height={32}
																/>
															</div>
														)}
													</div>
												))}
											</div>
										))}
									</div> */}
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
