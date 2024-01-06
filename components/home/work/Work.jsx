"use client";
import Link from "next/link";
import { Button } from "../../ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "@/utils/constant";
import ProjectCard from "@/components/projectCard/ProjectCard";

const Work = () => {
	return (
		<section className="relative mb-12 xl:mb-48">
			<div className="container mx-auto">
				{/* text */}
				<div className="max-w-[400px] mx-auto xl:mx-0 text center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
					<h2 className="section-title mb-4">Lastes projets</h2>
					<p className="subtitle mb-8">Voici mes derniers projets réalisés</p>
					<Link href={"/projects"}>
						<Button>Tous les projets</Button>
					</Link>
				</div>
				{/* slider */}
				<div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
					<Swiper
						className="h-[480px]"
						slidesPerView={1}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
						}}
						modules={[Pagination]}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}>
						{/* show only the first 4 projects for the slider*/}
						{projectData.slice(0, 4).map((project, index) => (
							<SwiperSlide key={index}>
								<ProjectCard project={project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Work;
