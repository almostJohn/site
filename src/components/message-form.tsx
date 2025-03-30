"use client";

import * as React from "react";
import { sendMessage } from "@/app/(index)/admin/actions";
import { Switch } from "./ui/switch";
import { Loader2 } from "lucide-react";

export function MessageForm() {
	const [displayName, setDisplayName] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [isAnonymous, setIsAnonymous] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [error, setError] = React.useState<string | null>(null);
	const [toast, setToast] = React.useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!message.trim()) {
			setError("Message is required. Please enter a message before sending.");
			return;
		}

		setIsSubmitting(true);

		try {
			await sendMessage({
				displayName: isAnonymous ? "Anonymous" : displayName,
				message: message.trim(),
			});

			setToast("Your message has been sent successfully.");

			setMessage("");
			if (!isAnonymous) {
				setDisplayName("");
			} else {
				setDisplayName("Anonymous");
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			setError("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
			setError(null);
		}
	}

	function handleToggleAnonymous(checked: boolean) {
		setIsAnonymous(checked);
		if (checked) {
			setDisplayName("Anonymous");
		} else {
			setDisplayName("");
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-4">
					<input
						type="text"
						id="name"
						placeholder="Your name"
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
						disabled={isAnonymous}
						className="inline-flex items-center p-2 rounded bg-transparent h-10 border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
					/>
					<div className="flex items-center gap-2">
						<Switch
							id="anonymous-mode"
							checked={isAnonymous}
							onCheckedChange={handleToggleAnonymous}
						/>
						<label htmlFor="anonymous-mode" className="font-medium">
							{isAnonymous ? "Anonymous" : "Public"}
						</label>
					</div>
					<textarea
						id="message"
						placeholder="Type your message here..."
						className="inline-flex items-center p-2 min-h-[120px] bg-transparent rounded h-10 border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
					<button
						type="submit"
						className="inline-flex items-center justify-center rounded h-10 px-6 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<>
								<Loader2 className="size-4 animate-spin mr-2" /> Sending...
							</>
						) : (
							<>Send</>
						)}
					</button>
					{error && (
						<div className="w-full inline-flex items-center px-3 py-1 text-xs font-bold bg-neutral-200 border-l-2 border-red-600">
							{error}
						</div>
					)}
					{toast && (
						<div className="w-full inline-flex items-center px-3 py-1 text-xs font-bold bg-neutral-200 border-l-2 border-green-500">
							{toast}
						</div>
					)}
				</div>
			</form>
		</>
	);
}
