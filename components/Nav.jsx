import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

const links = [
	{ path: "/", name: "Accueil" },
	{ path: "/projects", name: "Mes Projets" },
	{ path: "/contact", name: "Contact" },
];

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
