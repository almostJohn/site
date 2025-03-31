import * as React from "react";
import { format } from "date-fns";
import { Check, Trash2, User2 } from "lucide-react";

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
		<div className="flex w-full gap-3">
			<div className="inline-flex items-center justify-center size-7 shrink-0 rounded-full bg-blue-600 text-white cursor-pointer">
				<User2 className="size-4 shrink-0" />
			</div>
			<div
				className={`block w-full rounded shadow-md ${
					!read ? "border border-blue-600" : "border border-neutral-200"
				}`}
			>
				<div className="flex flex-col">
					<div className="flex justify-between w-full p-3">
						<div className="flex flex-col space-y-0.5">
							<h1 className="font-semibold">{displayName}</h1>
							<span className="text-xs/relaxed text-neutral-500">
								{format(new Date(createdAt), "PPp")}
							</span>
						</div>
						<div className="flex items-center gap-2">
							{!read && (
								<>
									<span className="inline-flex items-center justify-center px-2 py-1 rounded bg-blue-600 text-white font-bold text-xs">
										new
									</span>
									<button
										className="inline-flex items-center justify-center rounded px-2 py-0.5 size-6 transition-colors hover:bg-neutral-300 disabled:opacity-50 disabled:pointer-events-none"
										onClick={handleMarkAsRead}
										disabled={processingId === id}
									>
										<Check className="size-4 shrink-0" />
									</button>
								</>
							)}
							<button
								className="inline-flex items-center justify-center rounded px-2 py-0.5 size-6 transition-colors hover:bg-neutral-300"
								onClick={handleDelete}
							>
								<Trash2 className="size-4 shrink-0" />
							</button>
						</div>
					</div>
					<div
						className={`px-3 py-2 ${
							!read ? "bg-blue-200/40" : "bg-neutral-200/40"
						}`}
					>
						<p className="text-sm whitespace-pre-wrap">{message}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
