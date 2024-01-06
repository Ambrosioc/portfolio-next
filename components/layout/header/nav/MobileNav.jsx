import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "../../../socials/Socials";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<AlignJustify className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col items-center justify-between h-full py-8">
					<div className="flex flex-col items-center gap-y-32">
						<Logo />
						<Nav
							constainerStyles="flex flex-col gap-y-6 items-center"
							linkStyles="relative hover:text-primary transition-all text-2xl"
							underlineStyles="absolute left-0 top-full h-[2px] w-full bg-primary rounded-full"
						/>
						<Socials
							containerStyles={"flex gap-x-4"}
							iconsStyles={"text-2xl"}
						/>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
