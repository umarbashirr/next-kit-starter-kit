import ResetPassword from "@/features/auth/components/reset-password";
import { getServerSession } from "@/lib/authentication/middleware";
import { redirect } from "next/navigation";
import React from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { token } = await searchParams;
  const session = await getServerSession();

  if (!token) {
    redirect("/auth/login");
  }

  if (session) {
    redirect("/orgs");
  }

  return <ResetPassword />;
};

export default ResetPasswordPage;
