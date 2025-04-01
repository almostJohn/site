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
		<div className="flex flex-col h-full w-full">
			<div
				className="flex-1  overflow-y-auto p-0 rounded-t-xl rounded-b-xl bg-white shadow-xl"
				style={{
					maxHeight: messages.length === 1 ? "auto" : "calc(100vh - 100px)",
				}}
			>
				<div className="divide-y">
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
							handleMarkAsRead={() =>
								message.id && handleMarkAsRead(message.id)
							}
						/>
					))}
				</div>
			</div>
			{error && (
				<div className="inline-flex items-center bg-neutral-200 px-3 py-2 border-l-2 border-red-600 text-xs font-medium">
					{error}
				</div>
			)}
		</div>
	);
}
