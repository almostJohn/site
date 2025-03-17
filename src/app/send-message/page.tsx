import * as React from "react";
import type { Metadata } from "next";
import { MessageForm } from "@/components/message-form";
import { MainNav } from "@/components/main-nav";

export const metadata: Metadata = {
	title: "Send a message",
};

export default function SendMessagePage() {
	return (
		<>
			<div className="w-full flex items-center justify-center p-8">
				<div className="flex flex-col w-[24rem] gap-8 text-center">
					<MainNav />
					<MessageForm />
				</div>
			</div>
		</>
	);
}
