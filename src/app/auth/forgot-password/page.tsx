import ForgotPassword from "@/features/auth/components/forgot-password";
import { getServerSession } from "@/lib/authentication/middleware";
import React from "react";
import { redirect } from "next/navigation";

const ForgotPasswordPage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/orgs");
  }

  return <ForgotPassword />;
};

export default ForgotPasswordPage;
