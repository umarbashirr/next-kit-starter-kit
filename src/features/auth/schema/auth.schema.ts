import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const loginFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const forgotPasswordFormSchema = z.object({
  email: z.email("Invalid email address"),
});

export const resetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
export type ResetPasswordFormSchema = z.infer<typeof resetPasswordFormSchema>;
