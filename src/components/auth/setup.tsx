"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { checkAdminExists, createAdminUser } from "@/app/(auth)/setup/actions";
import { Loader2 as LoadingIcon } from "lucide-react";
import { useToast } from "../context/toast-context";

export function Setup() {
	const router = useRouter();
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [adminExists, setAdminExists] = React.useState<boolean | null>(null);
	const { addToast } = useToast();

	React.useEffect(() => {
		async function checkAdmin() {
			setIsLoading(true);

			try {
				const exists = await checkAdminExists();
				setAdminExists(exists);

				if (exists) {
					addToast(
						"Admin already exists. Please login with your existing admin account.",
						"error",
					);
					router.push("/login");
				}
			} catch (error_) {
				const error = error_ as Error;
				console.error("Error checking admin: ", error.message);
				addToast("Could not check if admin exists.", "error");
			} finally {
				setIsLoading(false);
			}
		}

		checkAdmin();
	}, [router, addToast]);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (password !== confirmPassword) {
			addToast(
				"Passwords don't match. Please make sure your passwords match.",
				"error",
			);
			return;
		}

		if (password.length < 8) {
			addToast(
				"Password too short. Password must be at least 8 characters long.",
				"error",
			);
			return;
		}

		setIsSubmitting(true);

		try {
			const { success } = await createAdminUser(username, password);

			if (success) {
				void router.push("/login");
				addToast("Setup created successfully", "success");
			} else {
				addToast("Admin setup failed. Please try again.", "error");
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			addToast("An error occured during setup.", "error");
		} finally {
			setIsSubmitting(false);
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
			<form
				onSubmit={handleSubmit}
				className="flex flex-col space-y-4 p-5 rounded border border-neutral-200 shadow-md"
			>
				<div className="flex flex-col space-y-2">
					<h1 className="text-2xl font-bold">
						<span className="text-blue-600">*</span> setup
					</h1>
					<p className="text-neutral-500">
						create your admin account to manage your messages.
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username"
						className="inline-flex items-center p-2 rounded h-10 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						required
					/>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						className="inline-flex items-center p-2 rounded h-10 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						required
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label
						htmlFor="confirm-password"
						id="confirm-password"
						className="font-medium"
					>
						<span className="text-red-600">*</span> confirm password
					</label>
					<input
						type="password"
						id="confirm-password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className="inline-flex items-center p-2 rounded h-10 bg-transparent border border-neutral-300 transition-colors hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-0"
						required
					/>
				</div>
				<button
					type="submit"
					className="inline-flex items-center justify-center rounded h-10 px-6 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<>
							<LoadingIcon className="mr-2 size-4 animate-spin" />
							Creating account...
						</>
					) : (
						<>Create</>
					)}
				</button>
			</form>
		</>
	);
}
