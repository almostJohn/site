"use server";

import { hash } from "bcrypt";
import { prisma } from "@/util/prisma";

export async function checkAdminExists() {
	try {
		const count = await prisma.adminUser.count();
		return count > 0;
	} catch (error_) {
		const error = error_ as Error;
		console.error(error, error.message);
		throw new Error("Failed to check if admin exists");
	}
}

export async function createAdminUser(
	username: string,
	password: string,
): Promise<{ success: boolean }> {
	try {
		const adminExists = await checkAdminExists();

		if (adminExists) {
			return {
				success: false,
			};
		}

		if (!username || username.length < 3) {
			return {
				success: false,
			};
		}

		if (!password || password.length < 8) {
			return {
				success: false,
			};
		}

		const hashedPassword = await hash(password, 12);

		await prisma.adminUser.create({
			data: {
				username,
				password: hashedPassword,
			},
		});

		return {
			success: true,
		};
	} catch (error_) {
		const error = error_ as Error;
		console.log(error, error.message);
		return {
			success: false,
		};
	}
}
