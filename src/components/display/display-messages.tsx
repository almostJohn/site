"use client";

import * as React from "react";
import { Message } from "@prisma/client";
import { deleteMessage, markAsRead } from "@/app/(index)/admin/actions";
import { Message as MessageComponent } from "../message";

export function DisplayMessages({ messages }: { messages: Message[] }) {
	const [processingId, setProcessingId] = React.useState<string | null>(null);
	const [error, setError] = React.useState<string | null>(null);

	if (messages.length === 0) {
		return (
			<div className="w-full h-full flex items-center justify-center p-8">
				<div className="text-center w-[24rem]">
					<p className="font-medium">No messages yet.</p>
				</div>
			</div>
		);
	}

	async function handleMarkAsRead(id: string) {
		setProcessingId(id);
		try {
			await markAsRead(id);
		} catch (error_) {
			const error = error_ as Error;
			console.error(error);
			setError("Failed to mark message as read.");
		} finally {
			setProcessingId(null);
			setError(null);
		}
	}

	async function handleDelete(id: string) {
		setProcessingId(id);
		try {
			await deleteMessage(id);
		} catch (error_) {
			const error = error_ as Error;
			console.error(error);
			setError("Failed to delete message.");
		} finally {
			setProcessingId(null);
			setError(null);
		}
	}

	return (
		<div className="flex flex-col gap-6 w-full">
			{messages.map((message) => (
				<MessageComponent
					key={message.id}
					message={message.message}
					id={message.id}
					displayName={message.displayName}
					read={message.read}
					createdAt={message.createdAt}
					processingId={processingId!}
					handleDelete={() => handleDelete(message.id)}
					handleMarkAsRead={() => message.id && handleMarkAsRead(message.id)}
				/>
			))}
			{error && (
				<div className="inline-flex items-center bg-neutral-200 px-3 py-2 border-l-2 border-red-600 text-xs font-medium">
					{error}
				</div>
			)}
		</div>
	);
}
