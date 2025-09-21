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

interface VerifyEmailProps {
  userFirstName?: string;
  userEmail?: string;
  verificationUrl?: string;
}

export const VerifyEmail = ({
  userFirstName = "there",
  verificationUrl = `${COMPANY_INFO.url}/verify-email`,
}: VerifyEmailProps) => (
  <Html>
    <Head />
    <Preview>Please verify your email address for {COMPANY_INFO.name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>{COMPANY_INFO.name}</Heading>
        </Section>

        <Heading style={h2}>Verify your email address</Heading>

        <Text style={text}>Hi {userFirstName},</Text>

        <Text style={text}>
          Thanks for signing up for {COMPANY_INFO.name}! To complete your
          registration and secure your account, please verify your email address
          by clicking the button below.
        </Text>

        <Section style={buttonContainer}>
          <Button style={button} href={verificationUrl}>
            Verify Email Address
          </Button>
        </Section>

        <Text style={text}>
          If the button doesn&apos;t work, you can also copy and paste this link
          into your browser:
        </Text>

        <Text style={linkText}>
          <Link href={verificationUrl} style={link}>
            {verificationUrl}
          </Link>
        </Text>

        <Text style={text}>
          This verification link will expire in 24 hours for security reasons.
          If you didn&apos;t create an account with us, you can safely ignore
          this email.
        </Text>

        <Text style={text}>
          If you have any questions, feel free to reach out to us at{" "}
          <Link href={`mailto:${COMPANY_INFO.url}`} style={link}>
            {COMPANY_INFO.url}
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

export default VerifyEmail;

const main = {
  backgroundColor: "#ffffff",
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

const linkText = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "16px 0",
  wordBreak: "break-all" as const,
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
