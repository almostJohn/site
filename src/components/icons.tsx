import * as React from "react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	developer: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="m9 8l-4 4l4 4m6-8l4 4l-4 4"
				/>
			</svg>
		);
	},
	menu: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
			</svg>
		);
	},
	send: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
				/>
			</svg>
		);
	},
	github: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				>
					<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</g>
			</svg>
		);
	},
	linkedin: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				>
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
					<circle cx="4" cy="4" r="2" />
				</g>
			</svg>
		);
	},
	twitter: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
				/>
			</svg>
		);
	},
	discord: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<path
					fill="currentColor"
					d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
				/>
			</svg>
		);
	},
	facebook: (props: IconProps) => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
				<path
					fill="currentColor"
					d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
				/>
			</svg>
		);
	},
};
