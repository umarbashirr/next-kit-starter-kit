import { Login } from "@/features/auth/components/login";
import { getServerSession } from "@/lib/authentication/middleware";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/orgs");
  }

  return <Login />;
};

export default LoginPage;
