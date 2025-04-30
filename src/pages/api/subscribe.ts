import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { db } from "@/util/db";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse,
) {
	if (request.method !== "POST") {
		return response.status(405).send({ error: "method not allowed!" });
	}

	const { email } = request.body;

	if (typeof email !== "string" || !email.includes("@")) {
		return response.status(405).send({ error: "invalid email!" });
	}

	try {
		await db.subscriber.create({
			data: {
				email,
			},
		});

		await resend.emails.send({
			from: "almostjohn <onboarding@resend.dev>",
			to: email,
			subject: "Thank You for Subscribing!",
			html: `
				<div style="font-family: sans-serif; line-height: 1.6;">
					<h2>You're In!</h2>
					<p>Thanks for subscribing! 👋</p>
					<p>
						I built this feature — and the entire website — from scratch to showcase what I can do as freelance web developer.
					</p>
					<p>
						If you're ever in need of a custom website or web app, feel free to reach out. I'd love to help.
					</p>
					<p>
						Thanks again for checking out <strong>@almosjohn</strong>!
					</p>
					<p>- John<br><a href="mailto:garcia.johngale@gmail.com">garcia.johngale@gmail.com</a></p>
				</div>
			`,
		});

		return response.status(200).json({ message: "subscribed!" });
	} catch (error_) {
		if (error_ instanceof Prisma.PrismaClientKnownRequestError) {
			if (error_.code === "P2002") {
				return response
					.status(409)
					.send({ error: "email already subscribed!" });
			}
		}
		return response.status(500).send({ error: "something went wrong!" });
	}
}
