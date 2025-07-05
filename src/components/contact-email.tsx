import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Text,
} from "@react-email/components";

type ContactEmailProps = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export function ContactEmail({
	name,
	email,
	subject,
	message,
}: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Body style={main}>
				<Container style={container}>
					<Text style={heading}>📬 New Contact Message</Text>

					<Section style={section}>
						<Text>
							<strong>Name:</strong> {name}
						</Text>
						<Text>
							<strong>Email:</strong> {email}
						</Text>
						<Text>
							<strong>Subject:</strong> {subject}
						</Text>
					</Section>

					<Section style={section}>
						<Text>
							<strong>Message:</strong>
						</Text>
						<Text style={messageBox}>{message}</Text>
					</Section>

					<Text style={footer}>
						This message was sent via your portfolio contact form.
					</Text>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: "#f4f4f5",
	padding: "40px 0",
	fontFamily: "Arial, sans-serif",
};

const container = {
	backgroundColor: "#ffffff",
	borderRadius: "8px",
	padding: "24px",
	maxWidth: "600px",
	margin: "0 auto",
	border: "1px solid #e5e7eb",
};

const heading = {
	fontSize: "20px",
	fontWeight: "bold",
	color: "#111827",
	marginBottom: "24px",
};

const section = {
	marginBottom: "16px",
};

const messageBox = {
	backgroundColor: "#f9fafb",
	padding: "12px",
	borderRadius: "6px",
	border: "1px solid #e5e7eb",
	whiteSpace: "pre-line" as const,
};

const footer = {
	fontSize: "12px",
	color: "#6b7280",
	marginTop: "32px",
};
