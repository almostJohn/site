"use client";

import * as React from "react";
import { logoutAdmin } from "@/app/(auth)/login/actions";
import { useRouter } from "next/navigation";
import { Loader2 as LoadingIcon } from "lucide-react";

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

			router.push("/admin");
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<button
			className="inline-flex items-center justify-center rounded-none px-4 py-2 bg-blue-600 text-white text-sm font-medium w-full disabled:opacity-50 disabled:pointer-events-none"
			onClick={handleLogout}
			disabled={isLoading}
		>
			{isLoading ? (
				<>
					<LoadingIcon className="size-4 animate-spin mr-2" />
					Logging out
				</>
			) : (
				<>Log out</>
			)}
		</button>
	);
}
