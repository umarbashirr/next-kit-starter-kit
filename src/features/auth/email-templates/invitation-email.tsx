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

interface TeamInvitationEmailProps {
  email: string;
  invitedByUsername: string;
  invitedByEmail: string;
  teamName: string;
  inviteLink: string;
  role: string;
}

export const TeamInvitationEmail = ({
  email,
  invitedByUsername,
  invitedByEmail,
  teamName,
  inviteLink,
  role,
}: TeamInvitationEmailProps) => (
  <Html>
    <Head />
    <Preview>
      You&apos;ve been invited to join {teamName} on {COMPANY_INFO.name}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={card}>
          {/* Header Section */}
          <Section style={header}>
            <div style={logoWrapper}>
              <div style={logoInner}>{COMPANY_INFO.name}</div>
            </div>
            <Heading style={title}>You&apos;re Invited!</Heading>
          </Section>

          {/* Content Section */}
          <Section style={content}>
            <Text style={text}>Hi there,</Text>
            <Text style={text}>
              <strong>{invitedByUsername}</strong> ({invitedByEmail}) has
              invited you to join the <strong>{teamName}</strong> team on{" "}
              {COMPANY_INFO.name}.
            </Text>

            {/* Role Badge */}
            <Section style={roleContainer}>
              <div style={roleBadge}>
                <Text style={roleText}>Role: {role}</Text>
              </div>
            </Section>

            <Text style={text}>
              Click the button below to accept the invitation and get started
              with your team.
            </Text>

            <Section style={buttonContainer}>
              <Button style={button} href={inviteLink}>
                Accept Invitation
              </Button>
            </Section>

            {/* Team Info Section */}
            <Section style={teamInfo}>
              <Text style={teamInfoTitle}>📋 Invitation Details</Text>
              <Text style={teamInfoText}>
                <strong>Team:</strong> {teamName}
                <br />
                <strong>Invited by:</strong> {invitedByUsername}
                <br />
                <strong>Your role:</strong> {role}
                <br />
                <strong>Invited email:</strong> {email}
              </Text>
            </Section>

            <Hr style={divider} />

            {/* Footer */}
            <Text style={footerText}>
              If the button doesn&apos;t work, copy and paste this link into
              your browser:
            </Text>
            <Text style={footerText}>
              <Link href={inviteLink} style={link}>
                {inviteLink}
              </Link>
            </Text>

            <Text style={footerText}>
              This invitation will expire in 7 days. If you didn&apos;t expect
              this invitation, you can safely ignore this email.
            </Text>

            <Text style={footerText}>
              Need help? Reply to this email or contact our support team.
              <br />© {new Date().getFullYear()} {COMPANY_INFO.name}. All
              rights reserved.
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = {
  backgroundColor: "#f8f9fa",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
  padding: "40px 20px",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #e9eef4",
  overflow: "hidden",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
};

const header = {
  padding: "32px 40px 24px 40px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
};

const logoWrapper = {
  display: "table",
  width: "48px",
  height: "48px",
  backgroundColor: "#161b22",
  borderRadius: "8px",
  margin: "0 auto 16px auto",
};

const logoInner = {
  display: "table-cell",
  textAlign: "center" as const,
  verticalAlign: "middle",
  color: "#ffffff",
  fontWeight: "600",
  fontSize: "20px",
};

const title = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#161b22",
  margin: "0",
  textAlign: "center" as const,
};

const content = {
  padding: "0 40px 40px 40px",
};

const text = {
  fontSize: "16px",
  color: "#2b3544",
  lineHeight: "1.6",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
};

const roleContainer = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const roleBadge = {
  display: "inline-block",
  backgroundColor: "#e8f4fd",
  border: "1px solid #b6e3ff",
  borderRadius: "16px",
  padding: "8px 16px",
};

const roleText = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#0969da",
  margin: "0",
  textAlign: "center" as const,
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#161b22",
  color: "#ffffff",
  padding: "12px 32px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
  display: "inline-block",
};

const teamInfo = {
  backgroundColor: "#f6f8fa",
  border: "1px solid #e9eef4",
  borderRadius: "6px",
  padding: "16px",
  margin: "24px 0",
};

const teamInfoTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#161b22",
  margin: "0 0 8px 0",
  textAlign: "left" as const,
};

const teamInfoText = {
  fontSize: "14px",
  color: "#656d76",
  margin: "0",
  textAlign: "left" as const,
  lineHeight: "1.5",
};

const divider = {
  borderColor: "#e9eef4",
  margin: "32px 0",
};

const footerText = {
  fontSize: "14px",
  color: "#656d76",
  textAlign: "center" as const,
  margin: "16px 0 0 0",
  lineHeight: "1.5",
};

const link = {
  color: "#161b22",
  textDecoration: "underline",
  wordBreak: "break-all" as const,
};

export default TeamInvitationEmail;
