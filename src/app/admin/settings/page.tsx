import * as React from "react";
import type { Metadata } from "next";
import { LogoutButton } from "@/components/logout-button";

export const metadata: Metadata = {
	title: "Settings",
};

export default function SettingsPage() {
	return (
		<>
			<div className="pt-8 px-4 pb-12 md:px-8 md:pb-24 lg:pb-32">
				<div className="flex flex-col gap-8 w-[24rem] text-center">
					<p>Do you want to log out on your account?</p>
					<LogoutButton />
				</div>
			</div>
		</>
	);
}
