import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	Calendar,
	GraduationCap,
	Briefcase,
} from "lucide-react";

// hero section cv file
export const cvFile = "/hero/cv.pdf";

// about section data
export const infosData = [
	{
		icon: <User2 size={20} />,
		text: "Ambrosie Cazimira",
	},
	{
		icon: <PhoneCall size={20} />,
		text: "0668975739",
	},
	{
		icon: <MailIcon size={20} />,
		text: "a.cazimira@gmail.com",
	},
	{
		icon: <Calendar size={20} />,
		text: "Né le 28 Février 1992",
	},
	{
		icon: <GraduationCap size={20} />,
		text: "RNCP Niveau 6 (Bac+3) - Concepteur Développeur d'Applications",
	},
	{
		icon: <HomeIcon size={20} />,
		text: "10 rue Rubens, 95120 Ermont",
	},
];

export const qualificationsData = [
	{
		title: "etudes",
		data: [
			{
				school: "Sieli",
				qualification: "Concepteur Développeur d'Applications (RNCP Niveau 6)",
				date: "Novembre 2021 - Novembre 2022 (1 an)",
			},
			{
				school: "Alt-Rh Consulting",
				qualification: "Developpeur Web et Web Mobile (niveau Bac+2 )",
				date: "Avril 2021 - Juillet 2021 (3 mois)",
			},
			{
				school: "OpenClassrooms (autodidacte)",
				qualification: "Développeur Web",
				date: "2020 - 2021 (1 an)",
			},
			{
				school: "Lycée Gustave Eiffel",
				qualification:
					"Baccalauréat Professionnel Électrotechnique, Énergie, Équipements Communicants ",
				date: "2010 - 2013 (3 ans)",
			},
		],
	},
	{
		title: "experiences",
		data: [
			{
				company: "Planity",
				qualification: "Développeur web (stage)",
				date: "2021 (2 semaines)",
			},
			{
				company: "Planity",
				qualification: "Concepteur Développeur d'Applications (alternance)",
				date: "2021 - 2022 (1 an)",
			},
			{
				company: "Planity",
				qualification: "Développeur Fullstack (freelance)",
				date: "2022 - 2023 (9 mois)",
			},
			{
				company: "MKB Automobiles",
				qualification: "Développeur Fullstack (freelance)",
				date: "2023 (2 mois)",
			},
			{
				company: "BasitMark",
				qualification: "Développeur Fullstack (freelance)",
				date: "2023 (en cours)",
			},
		],
	},
];
export const skillsData = [
	{
		title: "skills",
		data: [
			{
				name: "HTML, CSS",
			},
			{
				name: "Front-end Development",
			},
			{
				name: "Javascript, PHP",
			},
			{
				name: "Back-end Development",
			},
		],
	},
	{
		title: "tools",
		data: [
			{
				imgPath: "/about/vscode.svg",
			},
			{
				imgPath: "/about/figma.svg",
			},
			{
				imgPath: "/about/notion.svg",
			},
			{
				imgPath: "/about/wordpress.svg",
			},
		],
	},
];

// services section data
export const projectData = [
	{
		image: "/work/1.png",
		category: "FrontEnd",
		name: "Nexa Website",
		description: "Lorem ipsum dolor sit amet, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS"],
	},
	{
		image: "/work/2.png",
		category: "FrontEnd",
		name: "Nexa Website",
		description: "Lorem ipsum dolor sit amet, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS"],
	},
	{
		image: "/work/3.png",
		category: "FullStack",
		name: "Nexa Website",
		description: "Lorem ipsum dolor sit amet, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS"],
	},
	{
		image: "/work/4.png",
		category: "BackEnd",
		name: "Nexa Website",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS"],
	},
	{
		image: "/work/1.png",
		category: "BackEnd",
		name: "Nexa Website",
		description: "Lorem ipsum dolor sit amet, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS"],
	},
	{
		image: "/work/2.png",
		category: "FullStack",
		name: "Nexa Website",
		description: "Lorem ipsum dolor sit amet, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS"],
	},
	{
		image: "/work/3.png",
		category: "FullStack",
		name: "Nexa Website",
		description: "Lorem ipsum dolor sit amet, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
	},
	{
		image: "/work/4.png",
		category: "BackEnd",
		name: "Nexa Website",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, elit arcu.",
		link: "/",
		github: "/",
		stack: ["React", "Next.js", "Tailwind CSS"],
	},
];
