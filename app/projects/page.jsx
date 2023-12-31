"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectData } from "@/utils/constant";

const uniqueCategories = [
	"Tous les projets",
	...new Set(projectData.map((project) => project.category)),
];

const Projects = () => {
	const [categories, setCategories] = useState(uniqueCategories);
	const [category, setCategory] = useState("Tous les projets");

	const filteredProjects = projectData.filter((project) => {
		return category === "Tous les projets"
			? project
			: project.category === category;
	});

	return (
		<section className="min-h-screen pt-12">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
					Mes Projets
				</h2>
				{/* tabs */}
				<Tabs defaultValue={category} className="mb-24 xl:mb-48">
					<TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none ">
						{categories.map((category, index) => (
							<TabsTrigger
								onClick={() => setCategory(category)}
								value={category}
								key={index}
								className="capitalize w-[162px] md:w-auto">
								{category}
							</TabsTrigger>
						))}
					</TabsList>
					{/* tabs content */}
					<div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
						{filteredProjects.map((project, index) => {
							return (
								<TabsContent key={index} value={category}>
									<ProjectCard project={project} />
								</TabsContent>
							);
						})}
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default Projects;
