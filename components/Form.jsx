"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
	return (
		<form className="flex flex-col gap-y-4">
			{/* input */}
			<div className="relative flex items-center">
				<Input type="name" id="name" placeholder="Nom" />
				<User size={18} className="absolute right-6 " />
			</div>
			{/* input */}
			<div className="relative flex items-center">
				<Input type="email" id="email" placeholder="Email" />
				<MailIcon size={18} className="absolute right-6 " />
			</div>
			{/* textarea */}
			<div className="relative flex items-center">
				<Textarea placeholder="Votre message" />
				<MessageSquare size={18} className="absolute right-6 top-4" />
			</div>
			{/* button */}
			<Button type="submit" className="flex items-center max-w-[166px] gap-x-1">
				Envoyer
				<ArrowRightIcon size={20} />
			</Button>
		</form>
	);
};

export default Form;
