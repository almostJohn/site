"use client";

import { useActionState, useEffect, useState } from "react";
import { sendEmail } from "./action";
import { Loader2 } from "lucide-react";

const initialState = {
	successMessage: "",
	errorMessage: "",
};

export function ContactEmailForm() {
	const [state, formAction, isPending] = useActionState(
		sendEmail,
		initialState,
	);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if (state.successMessage) {
			setSuccessMessage(state.successMessage);
		} else if (state.errorMessage) {
			setErrorMessage(state.errorMessage);
		}
	}, [state]);

	return (
		<form action={formAction} className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="font-medium text-sm">
					Name <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="inline-flex p-2 text-base md:text-sm h-10 bg-transparent border-b-2 border-neutral-800 focus:outline-none focus:ring-0 focus:bg-neutral-200"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="font-medium text-sm">
					Email <span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="inline-flex p-2 text-base md:text-sm h-10 bg-transparent border-b-2 border-neutral-800 focus:outline-none focus:ring-0 focus:bg-neutral-200"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="subject" className="font-medium text-sm">
					Subject <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					className="inline-flex p-2 text-base md:text-sm h-10 bg-transparent border-b-2 border-neutral-800 focus:outline-none focus:ring-0 focus:bg-neutral-200"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="message" className="font-medium text-sm">
					Message <span className="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					className="inline-flex p-2 text-base md:text-sm h-36 bg-transparent border-b-2 border-neutral-800 focus:outline-none focus:ring-0 focus:bg-neutral-200"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="captcha" className="font-medium text-sm">
					CAPTCHA <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="captcha"
					name="captcha"
					placeholder="In what year was I born?"
					className="inline-flex p-2 text-base md:text-sm h-10 bg-transparent border-b-2 border-neutral-800 focus:outline-none focus:ring-0 focus:bg-neutral-200"
				/>
			</div>
			<button
				type="submit"
				disabled={isPending}
				className="inline-flex items-center justify-center cursor-pointer px-4 py-2 h-10 bg-neutral-800 text-neutral-100 transition-colors hover:bg-neutral-800/80"
			>
				{isPending ? (
					<Loader2 className="size-4 animate-spin shrink-0" />
				) : (
					"Send Message"
				)}
			</button>
			{successMessage && (
				<p className="text-sm text-green-500">{successMessage}</p>
			)}
			{errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
		</form>
	);
}
