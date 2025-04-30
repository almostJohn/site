"use client";

import { useState, type FormEvent } from "react";

export function SubscribeForm() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setLoading(true);
		setMessage("");

		try {
			const res = await fetch("/api/subscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email }),
			});

			const data = await res.json();
			setMessage("message" in data ? data.message : data.error);

			if ("message" in data) {
				setEmail("");
			}
		} catch (error_) {
			const error = error_ as Error;
			console.log("Something went wrong: ", error);
			setMessage(error.message);
			setEmail("");
		} finally {
			setLoading(false);
			setEmail("");
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-2">
			<div className="flex items-center space-x-2">
				<input
					className="p-2 h-9 bg-transparent border border-neutral-200 text-sm transition-colors hover:border-blue-700 focus:border-blue-700 placeholder:text-neutral-500 focus:outline-none focus:ring-0"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email@example.com"
					required
				/>
				<button
					type="submit"
					className="inline-flex items-center justify-center px-3 py-1 h-9 bg-blue-700 text-white text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
					disabled={loading}
				>
					{loading ? "loading..." : "sign up"}
				</button>
			</div>
			{message && <p className="text-center">{message}</p>}
		</form>
	);
}
