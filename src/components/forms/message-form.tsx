"use client";

import * as React from "react";
import Link from "next/link";
import { sendMessage } from "@/app/(index)/admin/actions";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";

export function MessageForm() {
	const [displayName, setDisplayName] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [isAnonymous, setIsAnonymous] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [error, setError] = React.useState<string | null>(null);
	const [success, setSuccess] = React.useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!message.trim()) {
			setError("Cannot send an empty string.");
			return;
		}

		setIsSubmitting(true);

		try {
			await sendMessage({
				displayName: isAnonymous ? "anonymous" : displayName,
				message: message.trim(),
			});

			setSuccess("Your message has been sent.");
			setMessage("");

			if (!isAnonymous) {
				setDisplayName("");
			} else {
				setDisplayName("anonymous");
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			setError("There was an error sending your message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	function handleToggleAnonymous(checked: boolean) {
		setIsAnonymous(checked);
		if (checked) {
			setDisplayName("anonymous");
		} else {
			setDisplayName("");
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2">
				<label htmlFor="name" className="font-medium">
					<span className="text-red-600">*</span> name
				</label>
				<input
					type="text"
					id="name"
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
					disabled={isAnonymous}
					className="inline-flex items-center p-2 rounded bg-transparent h-10 border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
				/>
			</div>
			<div className="flex items-center gap-2">
				<Switch
					id="anonymous-mode"
					checked={isAnonymous}
					onCheckedChange={handleToggleAnonymous}
				/>
				<label htmlFor="anonymous-mode" className="font-medium">
					{isAnonymous ? "anonymous" : "public"}
				</label>
			</div>
			<div className="flex flex-col space-y-2">
				<label htmlFor="message" className="font-medium">
					<span className="text-red-600">*</span> message
				</label>
				<textarea
					id="message"
					className="inline-flex items-center p-2 min-h-[120px] bg-transparent rounded h-10 border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>
			<button
				type="submit"
				className="inline-flex items-center justify-center rounded h-10 px-4 py-2 w-full bg-blue-600 text-white text-sm font-medium disabled:opacity-50 disabled:pointer-events-none"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<>
						<Loader2 className="size-4 animate-spin mr-2" /> sending...
					</>
				) : (
					<>send</>
				)}
			</button>
			<div className="flex items-center justify-center text-center">
				<p className="text-sm text-center">
					by sending a message you agree on my{" "}
					<Link
						href="/terms"
						className="font-medium underline underline-offset-4 text-blue-600"
					>
						terms
					</Link>
					.
				</p>
			</div>
			{error && (
				<div className="inline-flex items-center bg-neutral-200 px-3 py-2 border-l-2 border-red-600 text-xs font-medium">
					{error}
				</div>
			)}
			{success && (
				<div className="inline-flex items-center bg-neutral-200 px-3 py-2 border-l-2 border-green-600 text-xs font-medium">
					{success}
				</div>
			)}
		</form>
	);
}
