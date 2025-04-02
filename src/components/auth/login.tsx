"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/app/(auth)/login/actions";
import { Loader2 as LoadingIcon } from "lucide-react";
import { useToast, ToastType } from "../context/toast-context";
import { Button } from "../ui/button";
import { responses } from "@/util/responses";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "../ui/card";

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

			const { success } = await loginAdmin(formData);

			if (success) {
				void router.push("/admin");
				addToast(responses.success.login_success, ToastType.Success);
				router.refresh();
			} else {
				addToast(responses.error.failed_login, ToastType.Error);
			}
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
			addToast(responses.error.generic, ToastType.Error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<form ref={formRef} onSubmit={handleSubmit}>
				<Card>
					<CardHeader>
						<CardTitle>
							<span className="text-blue-600">*</span> login
						</CardTitle>
						<CardDescription>
							enter your admin credentials to continue.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col space-y-2">
								<Label htmlFor="username">
									<span className="text-red-600">*</span> username
								</Label>
								<Input
									type="text"
									id="username"
									name="username"
									autoComplete="username"
									required
								/>
							</div>
							<div className="flex flex-col space-y-2">
								<Label htmlFor="password">
									<span className="text-red-600">*</span> password
								</Label>
								<Input type="password" id="password" name="password" required />
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button
							type="submit"
							disabled={isLoading}
							className="rounded w-full"
						>
							{isLoading ? (
								<>
									<LoadingIcon className="size-4 animate-spin mr-2" />
									logging in...
								</>
							) : (
								<>login</>
							)}
						</Button>
					</CardFooter>
				</Card>
			</form>
		</>
	);
}
