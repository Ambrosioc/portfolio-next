import Socials from "@/components/socials/Socials";

const Footer = () => {
	return (
		<footer className="bg-secondary py-12">
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-center">
					{/* social */}
					<Socials
						containerStyles={"flex gap-x-6 mx-auto mb-4 xl:mx-0 "}
						iconsStyles={
							"text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary transition-all"
						}
					/>
					{/* copyright */}
					<div className="text-muted-foreground">
						Copyright &copy; Ambrosie Cazimira. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
