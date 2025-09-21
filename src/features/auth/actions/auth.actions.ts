"use server";

import PasswordResetEmail from "@/features/auth/email-templates/forgot-password-email";
import resend from "@/lib/emails/resend";
import { COMPANY_INFO } from "@/lib/utils/company-data";
import VerifyEmail from "../email-templates/verify-email";
import WelcomeEmail from "../email-templates/welcome-email";

export async function sendPasswordResetEmail({
  email,
  userName,
  resetLink,
  companyName = COMPANY_INFO.name,
}: {
  email: string;
  userName: string;
  resetLink: string;
  companyName?: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${companyName} <noreply@demo.nextkit.in>`,
      to: email,
      subject: `Reset your ${companyName} password`,
      react: PasswordResetEmail({
        name: userName,
        resetPasswordLink: resetLink,
      }),
    });

    if (error) {
      console.error("Error sending password reset email:", error);
      throw new Error("Failed to send password reset email");
    }

    console.log("Password reset email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
}

export async function sendVerifyEmail({
  userEmail,
  userName,
  subject,
  url,
}: {
  userEmail: string;
  userName: string;
  subject: string;
  url: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${COMPANY_INFO.name} <noreply@demo.nextkit.in>`,
      to: [userEmail],
      subject: subject,
      react: VerifyEmail({
        userEmail,
        userFirstName: userName,
        verificationUrl: url,
      }),
    });

    if (error) {
      console.error("Error sending verification email:", error);
      throw new Error("Failed to send verification email");
    }

    console.log("Verification email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
}

export async function sendWelcomeEmail({
  userEmail,
  userName,
}: {
  userEmail: string;
  userName: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${COMPANY_INFO.name} <noreply@demo.nextkit.in>`,
      to: [userEmail],
      subject: `Welcome to ${COMPANY_INFO.name}!`,
      react: WelcomeEmail({
        userName,
      }),
    });

    if (error) {
      console.error("Error sending welcome email:", error);
      throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
}
