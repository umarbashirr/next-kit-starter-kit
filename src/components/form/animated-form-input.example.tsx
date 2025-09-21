// Example usage of AnimatedFormInput component

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { AnimatedFormInput } from "./animated-form-input";
import { Mail, Lock, User, Calendar } from "lucide-react";

// Example schema
const exampleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
  date: z.string().optional(),
});

type ExampleFormData = z.infer<typeof exampleSchema>;

export function AnimatedFormInputExample() {
  const form = useForm<ExampleFormData>({
    resolver: zodResolver(exampleSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      date: "",
    },
  });

  const onSubmit = (data: ExampleFormData) => {
    console.log("Form data:", data);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Animated Form Input Examples</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Basic text input with icon */}
          <AnimatedFormInput
            control={form.control}
            name="name"
            label="Full Name"
            type="text"
            icon={User}
            placeholder="Enter your full name"
            animationDelay={0.1}
          />

          {/* Email input with icon */}
          <AnimatedFormInput
            control={form.control}
            name="email"
            label="Email Address"
            type="email"
            icon={Mail}
            animationDelay={0.2}
          />

          {/* Password input with toggle */}
          <AnimatedFormInput
            control={form.control}
            name="password"
            label="Password"
            type="password"
            icon={Lock}
            showPasswordToggle={true}
            animationDelay={0.3}
          />

          {/* Phone input without icon */}
          <AnimatedFormInput
            control={form.control}
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            animationDelay={0.4}
          />

          {/* Date input with icon */}
          <AnimatedFormInput
            control={form.control}
            name="date"
            label="Birth Date"
            type="text"
            icon={Calendar}
            placeholder="MM/DD/YYYY"
            animationDelay={0.5}
          />

          {/* Disabled input example */}
          <AnimatedFormInput
            control={form.control}
            name="email"
            label="Disabled Email"
            type="email"
            icon={Mail}
            disabled={true}
            animationDelay={0.6}
          />
        </form>
      </Form>
    </div>
  );
}
