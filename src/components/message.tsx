import * as React from "react";
import { Check, Trash2 } from "lucide-react";
import { formatRelativeDate } from "@/util/format-date";

type MessageProps = {
	message: string;
	id: string;
	displayName: string;
	read: boolean;
	createdAt: Date;
	processingId: string;
	handleDelete: () => void;
	handleMarkAsRead: () => void;
};

export function Message({
	message,
	id,
	displayName,
	read,
	createdAt,
	processingId,
	handleDelete,
	handleMarkAsRead,
}: MessageProps) {
	return (
		<div className="p-4">
			<div className="flex flex-col space-y-3">
				<div className="flex justify-between items-start">
					<div className="flex items-center gap-2">
						<h1 className="font-semibold text-sm">{displayName}</h1>
						<span className="text-xs text-neutral-500">
							{formatRelativeDate(createdAt)}
						</span>
					</div>
					<div className="flex items-center gap-2">
						{!read && (
							<>
								<span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full bg-blue-600 text-white text-xs font-bold cursor-pointer">
									new
								</span>
								<button
									className="inline-flex items-center justify-center rounded-full px-2 py-0.5 size-6 transition-colors hover:bg-neutral-200 disabled:opacity-50 disabled:pointer-events-none"
									onClick={handleMarkAsRead}
									disabled={processingId === id}
								>
									<Check className="size-4 shrink-0" />
								</button>
							</>
						)}
						<button
							className="inline-flex items-center justify-center rounded-full px-2 py-0.5 size-6 transition-colors hover:bg-neutral-200"
							onClick={handleDelete}
						>
							<Trash2 className="size-4 shrink-0" />
						</button>
					</div>
				</div>
				<p className="text-sm whitespace-pre-wrap">{message}</p>
			</div>
		</div>
	);
}
