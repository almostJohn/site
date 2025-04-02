"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { checkAdminExists, createAdminUser } from "@/app/(auth)/setup/actions";
import { Loader2 as LoadingIcon } from "lucide-react";
import { useToast, ToastType } from "../context/toast-context";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { responses } from "@/util/responses";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "../ui/card";

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
					addToast(responses.error.already_exists, ToastType.Error);
					router.push("/login");
				}
			} catch (error_) {
				const error = error_ as Error;
				console.error("Error checking admin: ", error.message);
				addToast(responses.error.generic, ToastType.Error);
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
				ToastType.Error,
			);
			return;
		}

		if (password.length < 8) {
			addToast(responses.error.password_length, ToastType.Error);
			return;
		}

		setIsSubmitting(true);

		try {
			const { success } = await createAdminUser(username, password);

			if (success) {
				void router.push("/login");
				addToast(responses.success.setup_complete, ToastType.Success);
			} else {
				addToast(responses.error.failed_setup, ToastType.Error);
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			addToast(responses.error.generic, ToastType.Error);
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
			<form onSubmit={handleSubmit}>
				<Card>
					<CardHeader>
						<CardTitle>
							<span className="text-blue-600">*</span> setup
						</CardTitle>
						<CardDescription>
							create your admin account to manage your messages.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col space-y-2">
								<Input
									type="text"
									id="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									placeholder="username"
									required
								/>
								<Input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col space-y-2">
								<Label htmlFor="confirm-password">
									<span className="text-red-600">*</span> confirm password
								</Label>
								<Input
									type="password"
									id="confirm-password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								/>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button
							type="submit"
							disabled={isSubmitting}
							className="rounded w-full"
						>
							{isSubmitting ? (
								<>
									<LoadingIcon className="mr-2 size-4 animate-spin" />
									creating...
								</>
							) : (
								<>create</>
							)}
						</Button>
					</CardFooter>
				</Card>
			</form>
		</>
	);
}
