"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "motion/react";
import { Eye, EyeOff, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface AnimatedFormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  showPasswordToggle?: boolean;
  animationDelay?: number;
  className?: string;
  inputClassName?: string;
}

export function AnimatedFormInput<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
  icon: IconComponent,
  disabled = false,
  showPasswordToggle = false,
  animationDelay = 0,
  className = "",
  inputClassName = "",
}: AnimatedFormInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: animationDelay,
        ease: "easeOut",
      }}
      className={className}
    >
      <FormField
        control={control}
        name={name}
        render={({ field: formField, fieldState }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">{label}</FormLabel>
            <FormControl>
              <motion.div
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {IconComponent && (
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IconComponent className="h-5 w-5" />
                  </div>
                )}
                <Input
                  {...formField}
                  type={inputType}
                  className={`${IconComponent ? "pl-10" : ""} ${showPasswordToggle && isPassword ? "pr-10" : ""} h-11 ${inputClassName}`}
                  placeholder={
                    placeholder || `Enter your ${label.toLowerCase()}`
                  }
                  disabled={disabled}
                />
                {showPasswordToggle && isPassword && (
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={disabled}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                )}
              </motion.div>
            </FormControl>
            <AnimatePresence>
              {fieldState.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormMessage className="text-sm" />
                </motion.div>
              )}
            </AnimatePresence>
          </FormItem>
        )}
      />
    </motion.div>
  );
}
