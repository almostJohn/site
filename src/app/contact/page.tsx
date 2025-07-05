import { ContactEmailForm } from "./contact-email-form";

export const metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<div className="mx-auto max-w-6xl px-6 md:px-0">
			<div className="flex flex-col space-y-4 pt-8 pb-16">
				<div className="flex flex-col space-y-2">
					<h1 className="text-6xl font-bold">Let&apos;s Get In Touch.</h1>
					<p className="text-base max-w-md">
						Want to discuss a project, an idea, or an opportunity? Just fill out
						this form or write me an <strong>email</strong> instead.
					</p>
				</div>
				<div className="w-full sm:max-w-md">
					<ContactEmailForm />
				</div>
			</div>
		</div>
	);
}
