"use client";

import { AnimatedButton } from "@/components/form/animated-button";
import { AnimatedFormInput } from "@/components/form/animated-form-input";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle, Loader2, Lock } from "lucide-react";
import { useForm } from "react-hook-form";

import { motion } from "motion/react";
import Link from "next/link";
import {
  resetPasswordFormSchema,
  ResetPasswordFormSchema,
} from "../schema/auth.schema";

export const ResetPasswordForm = () => {
  const form = useForm<ResetPasswordFormSchema>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <AnimatedFormInput
          control={form.control}
          name="password"
          label="Password"
          type="password"
          icon={Lock}
          disabled={form.formState.isSubmitting}
          animationDelay={0.5}
        />

        <AnimatedFormInput
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          icon={Lock}
          disabled={form.formState.isSubmitting}
          animationDelay={0.5}
        />

        <AnimatedButton
          type="submit"
          isLoading={form.formState.isSubmitting}
          isSuccess={form.formState.isSubmitted}
          loadingText="Resetting password..."
          successText="Password reset successfully!"
          successIcon={CheckCircle}
          loadingIcon={Loader2}
          animationDelay={0.8}
          fullWidth={true}
          className="h-11 cursor-pointer"
        >
          Reset Password
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
