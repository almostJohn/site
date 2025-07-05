"use server";

import { Resend } from "resend";
import { revalidatePath } from "next/cache";
import { ContactEmail } from "@/components/contact-email";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function sendEmail(
	_prevState: { successMessage?: string; errorMessage?: string },
	formData: FormData,
): Promise<{ successMessage?: string; errorMessage?: string }> {
	try {
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const subject = formData.get("subject") as string;
		const message = formData.get("message") as string;
		const captcha = formData.get("captcha") as string;

		if (!name || !email || !subject || !message || !captcha) {
			return {
				errorMessage: "All fields are required.",
			};
		}

		const expectedYear = "2000";
		if (captcha !== expectedYear) {
			return {
				errorMessage: "Incorrect CAPTCHA answer.",
			};
		}

		const { error } = await resend.emails.send({
			from: "almostjohn <onboarding@resend.dev>",
			to: "garcia.johngale@gmail.com",
			subject: `[Contact] ${subject}`,
			react: ContactEmail({ name, email, subject, message }),
		});

		if (error) {
			return {
				errorMessage: "Failed to send email to recipient. Please try again.",
			};
		}

		revalidatePath("/contact");

		return {
			successMessage: "Your message was successfully sent.",
		};
	} catch (error_) {
		const error = error_ as Error;
		console.error(error.message, error);

		return {
			errorMessage:
				"There was an error executing server action. Please try again.",
		};
	}
}
