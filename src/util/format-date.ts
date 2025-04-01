import {
	differenceInSeconds,
	differenceInMinutes,
	differenceInHours,
	differenceInDays,
	differenceInWeeks,
	differenceInMonths,
	differenceInYears,
} from "date-fns";

export function formatRelativeDate(date: Date | string): string {
	const now = new Date();
	const pastDate = typeof date === "string" ? new Date(date) : date;

	const seconds = differenceInSeconds(now, pastDate);

	if (seconds < 60) return "just now";

	const minutes = differenceInMinutes(now, pastDate);
	if (minutes < 60) return `${minutes}m`;

	const hours = differenceInHours(now, pastDate);
	if (hours < 24) return `${hours}h`;

	const days = differenceInDays(now, pastDate);
	if (days < 7) return `${days}d`;

	const weeks = differenceInWeeks(now, pastDate);
	if (weeks < 4) return `${weeks}w`;

	const months = differenceInMonths(now, pastDate);
	if (months < 12) return `${months}mo`;

	const years = differenceInYears(now, pastDate);
	return `${years}y`;
}
