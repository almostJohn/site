"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { compare } from "bcrypt";
import { prisma } from "@/util/prisma";

const RATE_LIMIT_WINDOW = 60 * 1_000;
const MAX_ATTEMPTS = 5;
let loginAttempts: { timestamp: number; ip: string }[] = [];

function isRateLimited(ip: string): boolean {
	const now = Date.now();

	loginAttempts = loginAttempts.filter(
		(attempt) => now - attempt.timestamp < RATE_LIMIT_WINDOW,
	);

	const recentAttempts = loginAttempts.filter(
		(attempt) => attempt.ip === ip,
	).length;

	return recentAttempts >= MAX_ATTEMPTS;
}

export async function loginAdmin(
	data: FormData,
	ip: string = "unknown",
): Promise<{ success: boolean }> {
	if (isRateLimited(ip)) {
		return {
			success: false,
		};
	}

	loginAttempts.push({ timestamp: Date.now(), ip });

	const username = data.get("username") as string;
	const password = data.get("password") as string;

	if (!username || !password) {
		return {
			success: false,
		};
	}

	try {
		const admin = await prisma.adminUser.findFirst();

		if (!admin) {
			return {
				success: false,
			};
		}

		if (admin.username !== username) {
			return {
				success: false,
			};
		}

		const passwordMatch = await compare(password, admin.password);

		if (!passwordMatch) {
			return {
				success: false,
			};
		}

		const sessionToken = crypto.randomUUID();

		(await cookies()).set("admin_session", sessionToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
			path: "/",
		});

		return { success: true };
	} catch (error_) {
		const error = error_ as Error;
		console.error(error, error.message);
		return {
			success: false,
		};
	}
}

export async function logoutAdmin(): Promise<void> {
	(await cookies()).delete("admin_session");
	redirect("/login");
}
