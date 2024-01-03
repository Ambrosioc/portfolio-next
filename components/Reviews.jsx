"use client";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
	{
		id: 1,
		name: "John Doe",
		job: "Web Developer",
		avatar: "/reviews/avatar-1.png",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
	},
	{
		id: 2,
		name: "Jane Doe",
		job: "Web Designer",
		avatar: "/reviews/avatar-2.png",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
	},
	{
		id: 3,
		name: "John Doe",
		job: "Web Developer",
		avatar: "/reviews/avatar-3.png",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
	},
	{
		id: 4,
		name: "Jane Doe",
		job: "Web Designer",
		avatar: "/reviews/avatar-4.png",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
	},
	{
		id: 5,
		name: "John Doe",
		job: "Web Developer",
		avatar: "/reviews/avatar-5.png",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
	},
	{
		id: 6,
		name: "Jane Doe",
		job: "Web Designer",
		avatar: "/reviews/avatar-6.png",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
	},
];
const Reviews = () => {
	return (
		<section className="mb-12 xl:mb-32">
			<div className="container mx-auto">
				<h2 className="section-title mb-12 text-center mx-auto">
					Avis clients et partenaires
				</h2>
				{/* slider */}
				<Swiper
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1400: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="h-[350px]">
					spa
					{reviews.map((person, index) => {
						return (
							<SwiperSlide key={index}>
								<Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
									<CardHeader className="p-0 mb-10">
										<div className="flex items-center gap-x-4">
											{/* image */}
											<Image
												src={person.avatar}
												alt={person.name}
												width={80}
												height={80}
												className="rounded-full"
												priority
											/>
											{/* name */}
											<div className="flex flex-col">
												<CardTitle>{person.name}</CardTitle>
												<p>{person.job}</p>
											</div>
										</div>
									</CardHeader>
									<CardDescription className="text-lg text-muted-foreground">
										{person.review}
									</CardDescription>
								</Card>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Reviews;
