"use client";

import * as React from "react";
import { sendMessage } from "@/app/(index)/admin/actions";
import { Button } from "../ui/button";
import { LinkButton } from "../ui/link-button";
import { Switch } from "@/components/ui/switch";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Loader2 } from "lucide-react";
import { useToast, ToastType } from "../context/toast-context";
import { responses } from "@/util/responses";

export function MessageForm() {
	const [displayName, setDisplayName] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [isAnonymous, setIsAnonymous] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const { addToast } = useToast();

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!message.trim()) {
			addToast(responses.error.no_message, ToastType.Error);
			return;
		}

		setIsSubmitting(true);

		try {
			await sendMessage({
				displayName: isAnonymous ? "anonymous" : displayName,
				message: message.trim(),
			});

			addToast(responses.success.message_sent, ToastType.Success);
			setMessage("");

			if (!isAnonymous) {
				setDisplayName("");
			} else {
				setDisplayName("anonymous");
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			addToast(responses.error.generic, ToastType.Error);
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
				<Label htmlFor="name">
					<span className="text-red-600">*</span> name
				</Label>
				<Input
					type="text"
					id="name"
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
					disabled={isAnonymous}
				/>
			</div>
			<div className="flex items-center gap-2">
				<Switch
					id="anonymous-mode"
					checked={isAnonymous}
					onCheckedChange={handleToggleAnonymous}
				/>
				<Label htmlFor="anonymous-mode">
					{isAnonymous ? "anonymous" : "public"}
				</Label>
			</div>
			<div className="flex flex-col space-y-2">
				<Label htmlFor="message">
					<span className="text-red-600">*</span> message
				</Label>
				<Textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="h-56"
					required
				/>
			</div>
			<Button type="submit" disabled={isSubmitting} className="rounded">
				{isSubmitting ? (
					<>
						<Loader2 className="size-4 animate-spin mr-2" /> sending...
					</>
				) : (
					<>send</>
				)}
			</Button>
			<div className="flex items-center justify-center text-center">
				<p className="text-sm text-center">
					by sending a message you agree on my{" "}
					<LinkButton href="/terms">terms</LinkButton>.
				</p>
			</div>
		</form>
	);
}
