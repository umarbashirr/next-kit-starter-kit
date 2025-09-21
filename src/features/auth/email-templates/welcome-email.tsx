import { COMPANY_INFO } from "@/lib/utils/company-data";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  userName?: string;
}

export const WelcomeEmail = ({ userName = "there" }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to {COMPANY_INFO.name}! Get started with your account.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>{COMPANY_INFO.name}</Heading>
        </Section>

        <Heading style={h2}>Welcome {userName}!</Heading>

        <Text style={text}>
          Thank you for joining {COMPANY_INFO.name}. We&apos;re excited to have
          you on board!
        </Text>

        <Text style={text}>{COMPANY_INFO.description}</Text>

        <Section style={buttonContainer}>
          <Button
            style={button}
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`}
          >
            Get Started
          </Button>
        </Section>

        <Text style={text}>
          If you have any questions, feel free to reach out to us at{" "}
          <Link href={`mailto:${COMPANY_INFO.email}`} style={link}>
            {COMPANY_INFO.email}
          </Link>
        </Text>

        <Hr style={hr} />

        <Section style={footer}>
          <Text style={footerText}>{COMPANY_INFO.name}</Text>
          <Text style={footerText}>
            {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
            {COMPANY_INFO.address.state} {COMPANY_INFO.address.zipCode}
          </Text>
          <Text style={footerText}>
            <Link href={COMPANY_INFO.social.github} style={footerLink}>
              GitHub
            </Link>{" "}
            |{" "}
            <Link href={COMPANY_INFO.social.twitter} style={footerLink}>
              Twitter
            </Link>{" "}
            |{" "}
            <Link href={COMPANY_INFO.social.linkedin} style={footerLink}>
              LinkedIn
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  padding: "16px",
  borderRadius: "12px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
};

const h2 = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#000",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 20px",
};

const link = {
  color: "#067df7",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  textAlign: "center" as const,
  marginTop: "32px",
};

const footerText = {
  color: "#666666",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "4px 0",
};

const footerLink = {
  color: "#666666",
  fontSize: "12px",
  textDecoration: "underline",
};
