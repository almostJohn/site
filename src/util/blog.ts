import fs from "node:fs";
import path from "node:path";

export type Metadata = {
	title: string;
	description: string;
	date: string;
};

export type FrontmatterParseResult = {
	metadata: Metadata;
	content: string;
};

export type MDXFileData = FrontmatterParseResult & {
	slug: string;
};

function parseFrontmatter(fileContent: string): FrontmatterParseResult {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
	const match = frontmatterRegex.exec(fileContent);

	if (!match) {
		throw new Error("no frontmatter found");
	}

	const matter = match[1];

	if (!matter) {
		throw new Error("no frontmatter found");
	}

	const content = fileContent.replace(frontmatterRegex, "").trim();
	const frontmatterLines = matter.trim().split("\n");
	const metadata: Partial<Metadata> = {};

	frontmatterLines.forEach((line) => {
		const [key, ...values] = line.split(": ");
		let value = values.join(": ").trim();
		value = value.replace(/^['"](.*)['"]$/, "$1");
		if (key && value) {
			metadata[key.trim() as keyof Metadata] = value;
		}
	});

	return { metadata: metadata as Metadata, content };
}

function readMDXFile(filePath: string): FrontmatterParseResult {
	const rawContent = fs.readFileSync(filePath, "utf8");

	return parseFrontmatter(rawContent);
}

function getMDXFiles(dir: string): string[] {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export function getMDXData(dir: string): MDXFileData[] {
	const mdxFiles = getMDXFiles(dir);

	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file));
		const slug = path.basename(file, path.extname(file));

		return {
			metadata,
			slug,
			content,
		};
	});
}

export function getPosts(): MDXFileData[] {
	return getMDXData(path.join(process.cwd(), "posts"));
}

export function getPostBySlug(slug: string): MDXFileData | null {
	return getPosts().find((post) => post.slug === slug) ?? null;
}
