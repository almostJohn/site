"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/util/prisma";
import type { Message } from "@prisma/client";

export type MessageInput = {
	displayName: string;
	message: string;
};

export async function getMessages(): Promise<Message[]> {
	return prisma.message.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
}

export async function sendMessage(messageData: MessageInput): Promise<void> {
	await prisma.message.create({
		data: {
			displayName: messageData.displayName || "Anonymous",
			message: messageData.message,
		},
	});

	revalidatePath("/send-message");
}

export async function markAsRead(id: string): Promise<void> {
	await prisma.message.update({
		where: {
			id,
		},
		data: { read: true },
	});

	revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string): Promise<void> {
	await prisma.message.delete({
		where: { id },
	});

	revalidatePath("/admin/messages");
}
