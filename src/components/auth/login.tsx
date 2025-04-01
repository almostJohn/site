"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/app/(auth)/login/actions";
import { Loader2 as LoadingIcon } from "lucide-react";
import { useToast } from "../context/toast-context";

export function Login() {
	const router = useRouter();
	const [isLoading, setIsLoading] = React.useState(false);
	const { addToast } = useToast();
	const formRef = React.useRef<HTMLFormElement>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (isLoading) {
			return;
		}

		setIsLoading(true);

		try {
			const formData = new FormData(e.currentTarget);

			const { success, message } = await loginAdmin(formData);

			if (success) {
				void router.push("/admin");
				addToast(message, "success");
				router.refresh();
			} else {
				addToast(message, "error");
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			addToast("Something went wrong. Try again.", "error");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="flex flex-col space-y-4 p-5 rounded border border-neutral-200 shadow-md"
			>
				<div className="flex flex-col space-y-2">
					<h1 className="text-2xl font-bold">
						<span className="text-blue-600">*</span> login
					</h1>
					<p className="text-neutral-500">
						enter your admin credentials to continue.
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="username" className="font-medium text-left">
						<span className="text-red-600">*</span> username
					</label>
					<input
						type="text"
						id="username"
						name="username"
						className="inline-flex items-center p-2 rounded h-10 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						autoComplete="username"
						required
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="password" className="font-medium text-left">
						<span className="text-red-600">*</span> password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="inline-flex items-center p-2 rounded h-10 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						autoComplete="username"
						required
					/>
				</div>
				<button
					type="submit"
					className="inline-flex items-center justify-center h-10 rounded px-6 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
					disabled={isLoading}
				>
					{isLoading ? (
						<>
							<LoadingIcon className="size-4 animate-spin mr-2" />
							Logging in...
						</>
					) : (
						<>Login</>
					)}
				</button>
			</form>
		</>
	);
}
