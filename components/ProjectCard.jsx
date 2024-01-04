import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Link2Icon } from "lucide-react";

const ProjectCard = ({ project }) => {
	return (
		<Card className="group overflow-hidden relative">
			<CardHeader className="p-0">
				{/* image */}
				<div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%]">
					<Image
						src={project.image}
						alt={project.name}
						width={247}
						height={250}
						className="absolute bottom-0 shadow-2xl"
						priority
					/>
					{/* btns */}
					<div className="flex gap-x-2">
						<Link
							href={project.link}
							className=" bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ">
							<Link2Icon className="text-white" />
						</Link>
						<Link
							href={project.link}
							className=" bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ">
							<Github className="text-white" />
						</Link>
					</div>
				</div>
			</CardHeader>
			<div className="h-full px-8 py-6">
				<Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
					{project.category}
				</Badge>
				<h4 className="h4 mb1">{project.name}</h4>
				<p className="text-muted-foreground text-lg">{project.description}</p>
				<p>
					{project.stack.map((item, index) => (
						<span
							key={index}
							className="text-sm text-primary inline-block mr-2">
							{item}
						</span>
					))}
				</p>
			</div>
		</Card>
	);
};

export default ProjectCard;
