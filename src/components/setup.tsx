"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { checkAdminExists, createAdminUser } from "@/app/(auth)/setup/actions";
import { Loader2 as LoadingIcon } from "lucide-react";

export function Setup() {
	const router = useRouter();
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [error, setError] = React.useState<string | null>(null);
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [adminExists, setAdminExists] = React.useState<boolean | null>(null);

	React.useEffect(() => {
		async function checkAdmin() {
			setIsLoading(true);

			try {
				const exists = await checkAdminExists();
				setAdminExists(exists);

				if (exists) {
					setError(
						"Admin already exists. Please login with your existing admin account.",
					);
					router.push("/login");
				}
			} catch (error_) {
				const error = error_ as Error;
				console.error("Error checking admin: ", error.message);
				setError("Could not check if admin exists.");
			} finally {
				setIsLoading(false);
				setError(null);
			}
		}

		checkAdmin();
	}, [router]);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Passwords don't match. Please make sure your passwords match.");
			return;
		}

		if (password.length < 8) {
			setError(
				"Password too short. Password must be at least 8 characters long.",
			);
			return;
		}

		setIsSubmitting(true);

		try {
			const { success } = await createAdminUser(username, password);

			if (success) {
				router.push("/login");
			} else {
				setError("Admin setup failed. Please try again.");
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			setError("An error occured during setup.");
		} finally {
			setIsSubmitting(false);
			setError(null);
		}
	}

	if (isLoading || adminExists === null) {
		return (
			<div className="w-full flex items-center justify-center gap-2 p-8">
				<LoadingIcon className="size-6 animate-spin" />
				<p className="font-medium">Checking system status...</p>
			</div>
		);
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-1">
					<h1 className="font-medium text-center">Admin setup</h1>
					<p className="text-neutral-500 text-center">
						Create your admin account to manage your messages.
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username"
						className="inline-flex items-center p-2 rounded-none h-9 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						required
					/>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						className="inline-flex items-center p-2 rounded-none h-9 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						required
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label
						htmlFor="confirm-password"
						id="confirm-password"
						className="font-medium"
					>
						Confirm password
					</label>
					<input
						type="password"
						id="confirm-password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className="inline-flex items-center p-2 rounded-none h-9 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						required
					/>
				</div>
				<button
					type="submit"
					className="inline-flex items-center justify-center rounded-none px-4 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<>
							<LoadingIcon className="mr-2 size-4 animate-spin" />
							Creating account...
						</>
					) : (
						<>Create account</>
					)}
				</button>
				{error && (
					<div className="inline-flex items-center px-3 py-1 text-xs font-bold bg-neutral-200 border-l-2 border-red-600">
						{error}
					</div>
				)}
			</form>
		</>
	);
}
