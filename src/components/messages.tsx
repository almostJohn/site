"use client";

import * as React from "react";
import { format } from "date-fns";
import type { Message } from "@prisma/client";
import { deleteMessage, markAsRead } from "@/app/actions";
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
		<div className="flex flex-col gap-4">
			{messages.map((message) => (
				<div
					key={message.id}
					className={`block bg-white p-4 w-full group cursor-pointer ${
						message.read ? "" : "border-l-2 border-blue-600"
					}`}
				>
					<div className="flex flex-col space-y-4">
						<div className="flex items-center justify-between">
							<div className="flex flex-col space-y-0.5">
								<h1 className="font-medium text-left">{message.displayName}</h1>
								<span className="text-xs text-left text-neutral-500">
									{format(new Date(message.createdAt), "PPp")}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<button
									className="inline-flex opacity-0 items-center justify-center px-2 py-0.5 size-5 transition-colors hover:bg-neutral-300 group-hover:opacity-100"
									onClick={() => message.id && handleDelete(message.id)}
								>
									<Trash className="size-4 shrink-0" />
								</button>
								{!message.read && (
									<span className="inline-flex items-center justify-center px-3 py-0.5 bg-blue-600/30 text-xs font-bold">
										New
									</span>
								)}
							</div>
						</div>
						<p className="whitespace-pre-wrap text-left bg-neutral-200 p-2">
							{message.message}
						</p>
						{!message.read && (
							<div className="flex items-center justify-end">
								<button
									className="inline-flex items-center justify-center rounded-none px-4 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
									onClick={() => message.id && handleMarkAsRead(message.id)}
									disabled={processingId === message.id}
								>
									Mark as read
								</button>
							</div>
						)}
					</div>
				</div>
			))}
			{error && <p className="font-medium text-red-600">{error}</p>}
		</div>
	);
}
