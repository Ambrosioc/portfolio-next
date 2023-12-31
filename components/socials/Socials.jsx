"use client";

import { icons } from "@/utils/constant";
import Link from "next/link";

const Socials = ({ containerStyles, iconsStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} key={index}>
						<div className={`${iconsStyles}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
