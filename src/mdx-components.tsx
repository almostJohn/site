import * as React from "react";
import { highlight } from "sugar-high";

type HeadingProps = React.ComponentPropsWithoutRef<"h1">;
type ParagraphProps = React.ComponentPropsWithoutRef<"p">;
type ListProps = React.ComponentPropsWithoutRef<"ul">;
type ListItemProps = React.ComponentPropsWithoutRef<"li">;
type AnchorProps = React.ComponentPropsWithoutRef<"a">;
type BlockquoteProps = React.ComponentPropsWithoutRef<"blockquote">;

const components = {
	h1: (props: HeadingProps) => (
		<h1 className="text-4xl font-bold tracking-tight pt-4" {...props} />
	),
	h2: (props: HeadingProps) => (
		<h2 className="text-3xl font-semibold tracking-tight pt-4" {...props} />
	),
	h3: (props: HeadingProps) => (
		<h3 className="text-2xl font-semibold tracking-tight pt-4" {...props} />
	),
	h4: (props: HeadingProps) => (
		<h4 className="text-xl font-semibold tracking-tight pt-4" {...props} />
	),
	p: (props: ParagraphProps) => <p className="pt-6 leading-snug" {...props} />,
	ol: (props: ListProps) => (
		<ol className="list-decimal pl-5 space-y-2" {...props} />
	),
	ul: (props: ListProps) => (
		<ul className="list-disc pl-5 space-y-1" {...props} />
	),
	li: (props: ListItemProps) => <li className="pl-1" {...props} />,
	em: (props: React.ComponentPropsWithoutRef<"em">) => (
		<em className="font-semibold" {...props} />
	),
	strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
		<strong className="font-semibold" {...props} />
	),
	u: (props: React.ComponentPropsWithoutRef<"u">) => (
		<u className="font-semibold" {...props} />
	),
	a: ({ href, ...props }: AnchorProps) => (
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className="text-sky-500"
			{...props}
		/>
	),
	code: ({ children, ...props }: React.ComponentPropsWithoutRef<"code">) => {
		const codeHTML = highlight(children as string);
		return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
	},
	blockquote: (props: BlockquoteProps) => (
		<blockquote
			className="ml-[0.075em] border-l-3 border-neutral-700 text-neutral-400"
			{...props}
		/>
	),
};

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}

export const mdxComponents = components;
