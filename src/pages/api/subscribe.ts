import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { db } from "@/util/db";
import { Resend } from "resend";
import { WelcomeEmail } from "@/components/welcome-email";

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
			subject: "Thank you for subscribing!",
			react: WelcomeEmail(),
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
