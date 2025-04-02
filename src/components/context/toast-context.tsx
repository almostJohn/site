"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

export const enum ToastType {
	Success = "success",
	Error = "error",
}

type Toast = {
	id: number;
	message: string;
	type?: ToastType;
};

type ToastContextType = {
	addToast(message: string, type?: ToastType): void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(
	undefined,
);

export function ToastProvider({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	const [toasts, setToasts] = React.useState<Toast[]>([]);

	function addToast(message: string, type?: ToastType) {
		const newToast: Toast = { id: Date.now(), message, type };

		setToasts((prev) => [...prev, newToast]);

		setTimeout(() => {
			setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
		}, 3_000);
	}

	return (
		<ToastContext.Provider value={{ addToast }}>
			{children}
			<div className="fixed top-5 right-5 z-50 flex flex-col gap-2">
				<AnimatePresence>
					{toasts.map(({ id, message, type }) => (
						<motion.div
							key={id}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.3 }}
							className={`px-4 py-2 text-white rounded shadow-lg flex items-center gap-2 ${
								type === "success"
									? "bg-green-500"
									: type === "error"
									? "bg-red-600"
									: "bg-neutral-200/50 text-neutral-900"
							}`}
						>
							{type === "success" ? (
								<Check className="size-4 shrink-0" />
							) : type === "error" ? (
								<X className="size-4 shrink-0" />
							) : (
								""
							)}
							<span className="text-sm font-semibold">{message}</span>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</ToastContext.Provider>
	);
}

export function useToast() {
	const context = React.useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be inside a ToastProvider");
	}

	return context;
}
