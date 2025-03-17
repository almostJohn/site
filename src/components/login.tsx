"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loginAdmin } from "@/app/(auth)/login/actions";
import { Loader2 as LoadingIcon } from "lucide-react";

export function Login() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<string | null>(null);

	async function formAction(data: FormData) {
		setIsLoading(true);
		setError(null);

		const { success } = await loginAdmin(data);

		try {
			if (success) {
				const from = searchParams.get("from") || "/admin/messages";
				router.push(from);
				router.refresh();
			} else {
				setError("Failed to login. Please try again");
			}
		} catch (error_) {
			const error = error_ as Error;
			setError(error.message);
		} finally {
			setIsLoading(false);
			setError(null);
		}
	}

	return (
		<>
			<form action={formAction} className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-1">
					<h1 className="text-center font-medium">Admin login</h1>
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
				{error && <p className="font-medium text-red-600">{error}</p>}
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
			</form>
		</>
	);
}
