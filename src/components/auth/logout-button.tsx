"use client";

import * as React from "react";
import { logoutAdmin } from "@/app/(auth)/login/actions";
import { useRouter } from "next/navigation";
import { Loader2 as LoadingIcon } from "lucide-react";
import { Button } from "../ui/button";

export function LogoutButton() {
	const router = useRouter();
	const [isLoading, setIsLoading] = React.useState(false);

	async function handleLogout() {
		if (isLoading) {
			return;
		}

		setIsLoading(true);

		try {
			await logoutAdmin();
			void router.push("/login");
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Button
			onClick={handleLogout}
			disabled={isLoading}
			className="rounded w-full"
		>
			{isLoading ? (
				<>
					<LoadingIcon className="size-4 animate-spin mr-2" />
					logging out
				</>
			) : (
				<>logout</>
			)}
		</Button>
	);
}
