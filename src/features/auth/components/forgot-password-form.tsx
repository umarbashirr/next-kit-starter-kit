"use client";

import { AnimatedButton } from "@/components/form/animated-button";
import { AnimatedFormInput } from "@/components/form/animated-form-input";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle, Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import { authClient } from "@/lib/authentication/auth-client";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  forgotPasswordFormSchema,
  ForgotPasswordFormSchema,
} from "../schema/auth.schema";

export const ForgotPasswordForm = () => {
  const router = useRouter();
  const form = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgotPasswordFormSchema) => {
    try {
      const res = await fetch(`/api/user?email=${values.email}`);
      const resData = await res.json();

      console.log(resData);

      if (!res.ok) {
        throw new Error(resData.error);
      }

      const { error } = await authClient.requestPasswordReset({
        email: values.email,
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`,
      });

      console.log(error);

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Reset password link sent!");
      router.push("/auth/login");
      form.reset();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <AnimatedFormInput
          control={form.control}
          name="email"
          label="Email"
          type="email"
          icon={Mail}
          disabled={form.formState.isSubmitting}
          animationDelay={0.5}
        />

        <AnimatedButton
          type="submit"
          isLoading={form.formState.isSubmitting}
          isSuccess={false}
          loadingText="Sending reset password link..."
          successText="Reset password link sent!"
          successIcon={CheckCircle}
          loadingIcon={Loader2}
          animationDelay={0.8}
          fullWidth={true}
          className="h-11 cursor-pointer"
        >
          Send Reset Password Link
        </AnimatedButton>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center mt-6 flex items-center justify-center"
        >
          <Link
            href="/auth/login"
            className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium flex items-center justify-center text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to login
          </Link>
        </motion.div>
      </form>
    </Form>
  );
};
