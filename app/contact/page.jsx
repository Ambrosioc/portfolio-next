import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
	return (
		<section>
			<div className="container mx-auto">
				{/* text & illustation */}
				<div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
					{/* text */}
					<div className="flex flex-col justify-center">
						<div className="flex items-center gap-x-4 text-primary text-lg mb-4 ">
							<span className="w-[30px] h-[2px] bg-primary"></span>
							Say Hello !
						</div>
						<h1 className="h1 max-w-md mb-8">Travallions ensemble.</h1>
						<p className="subtitle max-w-[400px]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate reiciendis unde eos ratione magnam quo quisquam
						</p>
					</div>
					{/* illustration */}
					<div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
				</div>
				{/* info text & form */}
				<div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
					{/* info text */}
					<div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
						{/* mail */}
						<div className="flex items-center gap-y-8">
							<MailIcon size={18} className="text-primary" />
							<span className="text-primary ml-2">
								<a href="mailto:a.cazimira@gmail.com">a.cazimira@gmail.com</a>
							</span>
						</div>
						{/* Home */}
						<div className="flex items-center gap-y-8">
							<HomeIcon size={18} className="text-primary" />
							<span className="text-primary ml-2">
								<p>10 rue Rubens, 95120 Ermont</p>
							</span>
						</div>
						{/* mail */}
						<div className="flex items-center gap-y-8">
							<PhoneCall size={18} className="text-primary" />
							<span className="text-primary ml-2">
								<a href="tel:+33668975739">0668975739</a>
							</span>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
