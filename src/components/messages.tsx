"use client";

import * as React from "react";
import { format } from "date-fns";
import type { Message } from "@prisma/client";
import { deleteMessage, markAsRead } from "@/app/(index)/send-message/actions";
import { Trash } from "lucide-react";

export function Messages({ messages }: { messages: Message[] }) {
	const [processingId, setProcessingId] = React.useState<string | null>(null);
	const [error, setError] = React.useState<string | null>(null);

	if (messages.length === 0) {
		return (
			<div className="w-full flex items-center justify-center p-8">
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
		<div className="flex flex-col gap-6">
			{messages.map((message) => (
				<div
					key={message.id}
					className={`block relative p-3 cursor-pointer ${
						message.read
							? "bg-neutral-200/50"
							: "border-l-2 border-blue-600 bg-neutral-200/10"
					} w-[20rem]`}
				>
					{!message.read && (
						<div className="absolute -top-3 right-3 inline-flex items-center justify-center px-3 py-0.5 text-xs font-medium bg-blue-600 text-white">
							new
						</div>
					)}
					<div className="flex flex-col space-y-3.5">
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center gap-2">
								<h1 className="font-medium text-left underline underline-offset-4 text-blue-600">
									{message.displayName}
								</h1>
								<span className="text-xs text-left text-neutral-500">
									{format(new Date(message.createdAt), "PPp")}
								</span>
							</div>
							<div className="flex items-center justify-end">
								<button
									className="inline-flex items-center justify-center px-2 py-0.5 size-6 transition-colors hover:bg-neutral-300"
									onClick={() => handleDelete(message.id)}
								>
									<Trash className="size-4 shrink-0" />
								</button>
							</div>
						</div>
						<p className="whitespace-pre-wrap">{message.message}</p>
						{!message.read && (
							<div className="flex items-center justify-end">
								<button
									className="inline-flex items-center justify-center rounded-none px-3 py-1 bg-blue-600 text-white text-sm font-medium disabled:opacity-50 disabled:pointer-events-none"
									onClick={() => message.id && handleMarkAsRead(message.id)}
									disabled={processingId === message.id}
								>
									mark as read
								</button>
							</div>
						)}
					</div>
				</div>
			))}
			{error && (
				<div className="inline-flex items-center bg-neutral-200 px-3 py-1 border-l-2 border-red-600 text-xs font-bold">
					{error}
				</div>
			)}
		</div>
	);
}
