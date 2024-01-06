import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";
import { links } from "@/utils/constant";

const Nav = ({ constainerStyles, linkStyles, underlineStyles }) => {
	const path = usePathname();
	return (
		<nav className={`${constainerStyles}`}>
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`capitalize ${linkStyles}`}>
						{link.path === path && (
							<motion.span
								initial={{ y: 0 }}
								animate={{ y: 0 }}
								transition={{ type: "tween" }}
								layoutId="underline"
								className={`${underlineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
