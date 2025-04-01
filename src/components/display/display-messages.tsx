"use client";

import * as React from "react";
import { Message } from "@prisma/client";
import { deleteMessage, markAsRead } from "@/app/(index)/admin/actions";
import { Message as MessageComponent } from "../message";
import { useToast } from "../context/toast-context";

export function DisplayMessages({ messages }: { messages: Message[] }) {
	const [processingId, setProcessingId] = React.useState<string | null>(null);
	const { addToast } = useToast();

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
			addToast("marked message as read.", "success");
		} catch (error_) {
			const error = error_ as Error;
			console.error(error);
			addToast("failed to mark message as read.", "error");
		} finally {
			setProcessingId(null);
		}
	}

	async function handleDelete(id: string) {
		setProcessingId(id);
		try {
			await deleteMessage(id);
			addToast("message deleted.", "success");
		} catch (error_) {
			const error = error_ as Error;
			console.error(error);
			addToast("failed to delete message.", "error");
		} finally {
			setProcessingId(null);
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
		</div>
	);
}
