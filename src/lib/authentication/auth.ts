import { betterAuth, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin, organization } from "better-auth/plugins";

import db from "../db";
import { COMPANY_INFO } from "../utils/company-data";
import {
  sendPasswordResetEmail,
  sendWelcomeEmail,
} from "@/features/auth/actions/auth.actions";
import { sendVerifyEmail } from "@/features/auth/actions/auth.actions";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }: { user: User; url: string }) => {
      try {
        console.log("Sending password reset email");
        const { error, success } = await sendPasswordResetEmail({
          email: user.email,
          userName: user.name,
          resetLink: url,
          companyName: COMPANY_INFO.name,
        });

        if (!success) {
          throw new Error(error);
        }
      } catch (error) {
        console.error("Failed to send password reset email:", error);
        throw new Error(
          "Failed to send password reset email. Please try again."
        );
      }
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await sendWelcomeEmail({
            userName: user.name,
            userEmail: user.email,
          });
        },
      },
    },
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await sendVerifyEmail({
        userEmail: user.email,
        userName: user.name,
        subject: `Verify your email address for ${COMPANY_INFO.name}`,
        url,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies(), admin(), organization()],
  trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL as string],
});

export default auth;
