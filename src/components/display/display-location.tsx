import * as React from "react";
import { MapPin } from "lucide-react";

export function DisplayLocation() {
	return (
		<div className="flex items-center space-x-2">
			<MapPin className="size-4 text-neutral-500" />
			<p className="text-neutral-500">olongapo city, zambales (philippines)</p>
		</div>
	);
}
