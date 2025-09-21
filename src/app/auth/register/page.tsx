import Register from "@/features/auth/components/register";
import { getServerSession } from "@/lib/authentication/middleware";
import React from "react";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/orgs");
  }

  return <Register />;
};

export default RegisterPage;
