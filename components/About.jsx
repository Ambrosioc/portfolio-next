import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	GraduationCap,
	Calendar,
	Briefcase,
} from "lucide-react";

const infosData = [
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

const qualificationsData = [
	{
		title: "Etudes",
		data: [
			{
				school: "Wild Code School",
				qualification: "Concepteur Développeur d'Applications",
				date: "2020 - 2021",
			},
			{
				school: "Wild Code School",
				qualification: "Concepteur Développeur d'Applications",
				date: "2020 - 2021",
			},
			{
				school: "Wild Code School",
				qualification: "Concepteur Développeur d'Applications",
				date: "2020 - 2021",
			},
		],
	},
	{
		title: "expériences",
		data: [
			{
				company: "Planity",
				qualification: "Développeur Fullstack (freelance)",
				date: "2023",
			},
			{
				company: "MKB Automobiles",
				qualification: "Développeur Fullstack (freelance)",
				date: "2023",
			},
			{
				company: "BasitMark",
				qualification: "Développeur Fullstack (freelance)",
				date: "2023 - Present",
			},
		],
	},
];
const skillsData = [
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

const About = () => {
	const getData = (arr, title) => {
		return arr.find((item) => item.title === title);
	};

	return (
		<section>
			<div className="container mx-auto">
				<h2 className="section-title">À propos de moi</h2>
			</div>
		</section>
	);
};

export default About;
