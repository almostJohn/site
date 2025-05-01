import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Text,
	Section,
	Heading,
	Link,
} from "@react-email/components";

export function WelcomeEmail() {
	return (
		<Html>
			<Head />
			<Preview>Welcome to my Newsletter!</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={heading}>Welcome to my Newsletter!</Heading>
					<Text style={text}>
						You&apos;ll now get occasional updates on new blog posts, project
						launches, and behind-the-scenes content directly in your inbox.
					</Text>
					<Section style={{ marginTop: "24px", textAlign: "center" }}>
						<Link
							href="https://almostjohn.vercel.app"
							rel="noreferrer"
							target="_blank"
							style={button}
						>
							View My Website
						</Link>
					</Section>
					<Text
						style={{
							...text,
							marginTop: "32px",
							fontSize: "12px",
							color: "#999",
						}}
					>
						You&apos;re receiving this email because you signed up on my
						website.
					</Text>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: "#f4f4f4",
	padding: "20px",
};

const container = {
	backgroundColor: "#ffffff",
	borderRadius: "8px",
	padding: "24px",
	maxWidth: "520px",
	margin: "0 auto",
};

const heading = {
	fontSize: "24px",
	color: "#333333",
	marginBottom: "16px",
};

const text = {
	fontSize: "16px",
	color: "#555555",
	lineHeight: "1.5",
};

const button = {
	display: "inline-block",
	padding: "12px 20px",
	backgroundColor: "#3b82f6",
	color: "#ffffff",
	borderRadius: "6px",
	textDecoration: "none",
	fontWeight: "500",
};
