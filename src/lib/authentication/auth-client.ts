import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL as string,
  plugins: [adminClient(), organizationClient()],
});

export const { signIn, signUp, signOut, useSession } = createAuthClient();
