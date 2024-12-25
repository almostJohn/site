"use client";

import { useLanyardWS } from "use-lanyard";
import { Circle } from "lucide-react";

export function Status({ initialData }: { readonly initialData?: never }) {
	const data = useLanyardWS("996354867708841984", { initialData });
	const isOnline = data?.discord_status !== "offline";

	return (
		<div className="inline-flex items-center justify-center px-4 py-2 space-x-3 bg-gray-200 rounded-full mt-6">
			{isOnline ? (
				<>
					<Circle className="text-green-600 size-4 fill-current mr-2" /> online
				</>
			) : (
				<>
					<Circle className="text-gray-600 size-4 fill-current mr-2" /> offline
				</>
			)}
		</div>
	);
}
