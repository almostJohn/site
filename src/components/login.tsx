"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/app/(auth)/login/actions";
import { Loader2 as LoadingIcon } from "lucide-react";

export function Login() {
	const router = useRouter();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<string | null>(null);
	const formRef = React.useRef<HTMLFormElement>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (isLoading) {
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			const formData = new FormData(e.currentTarget);

			const { success, message } = await loginAdmin(formData);

			if (success) {
				void router.push("/admin");

				router.refresh();
			} else {
				setError(message);
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			setError("Something went wrong. Try again.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="flex flex-col space-y-6"
			>
				<div className="flex flex-col space-y-1">
					<h1 className="text-center font-medium">login</h1>
					<p className="text-neutral-500 text-center">
						Enter your admin credentials to access the admin dashboard.
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="username" className="font-medium text-left">
						Username
					</label>
					<input
						type="text"
						id="username"
						name="username"
						className="inline-flex items-center p-2 rounded-none h-9 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						autoComplete="username"
						required
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="password" className="font-medium text-left">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="inline-flex items-center p-2 rounded-none h-9 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						autoComplete="username"
						required
					/>
				</div>
				<button
					type="submit"
					className="inline-flex items-center justify-center rounded-none px-4 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
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
				{error && (
					<div className="w-full inline-flex items-center px-3 py-1 bg-neutral-200 border-l-2 border-red-600 text-xs font-bold">
						{error}
					</div>
				)}
			</form>
		</>
	);
}
