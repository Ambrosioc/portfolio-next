import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const servicesData = [
	{
		icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
		title: "Web Development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos.",
	},
	{
		icon: <Blocks size={72} strokeWidth={0.8} />,
		title: "Web Design",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos.",
	},
	{
		icon: <Gem size={72} strokeWidth={0.8} />,
		title: "App Development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos.",
	},
];

const Services = () => {
	return (
		<section>
			<div className="container mx-auto">
				<h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
					Mes services
				</h2>
				{/* grid items */}
				<div>
					{servicesData.map((item, index) => (
						<Card
							key={index}
							className="w-full max-w-[424px] h-[300px flex flex-col pt-16 pb-10 justify-center items-center relative] ">
							<CardHeader>
								<div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center ">
									{item.icon}
								</div>
								<h3 className="text-xl font-bold mb-4">{item.title}</h3>
							</CardHeader>
							<CardContent>
								<p className="text-center">{item.description}</p>
							</CardContent>
							{/* <CardContent>
								<div className="flex flex-col items-center">
									<div className="text-3xl mb-4">{item.icon}</div>
									<h3 className="text-xl font-bold mb-4">{item.title}</h3>
									<p className="text-center">{item.description}</p>
								</div>
							</CardContent> */}
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
