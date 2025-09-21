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

interface ForgotPasswordEmailProps {
  name?: string;
  resetPasswordLink?: string;
}

export const ForgotPasswordEmail = ({
  name = "there",
  resetPasswordLink = "#",
}: ForgotPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>Reset your {COMPANY_INFO.name} password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>{COMPANY_INFO.name}</Heading>
        </Section>

        <Heading style={h2}>Reset your password</Heading>

        <Text style={text}>Hi {name},</Text>

        <Text style={text}>
          We received a request to reset the password for your{" "}
          {COMPANY_INFO.name} account. If you didn&apos;t make this request, you
          can safely ignore this email.
        </Text>

        <Section style={buttonContainer}>
          <Button style={button} href={resetPasswordLink}>
            Reset Password
          </Button>
        </Section>

        <Text style={text}>
          This link will expire in 24 hours for security reasons.
        </Text>

        <Text style={text}>
          If the button above doesn&apos;t work, you can copy and paste this
          link into your browser:
        </Text>

        <Text style={linkText}>{resetPasswordLink}</Text>

        <Hr style={hr} />

        <Text style={text}>
          If you continue to have problems, please contact our support team at{" "}
          <Link href={`mailto:${COMPANY_INFO.url}`} style={link}>
            {COMPANY_INFO.url}
          </Link>
        </Text>

        <Section style={footer}>
          <Text style={footerText}>{COMPANY_INFO.name}</Text>
          <Text style={footerText}>{COMPANY_INFO.url}</Text>
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

export default ForgotPasswordEmail;

const main = {
  backgroundColor: "#ffffff",
  padding: "16px",
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
  backgroundColor: "#dc2626",
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
  color: "#067df7",
  fontSize: "14px",
  wordBreak: "break-all" as const,
  margin: "16px 0",
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
