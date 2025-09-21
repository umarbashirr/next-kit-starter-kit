"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  isSuccess?: boolean;
  loadingText?: string;
  successText?: string;
  successIcon?: LucideIcon;
  loadingIcon?: LucideIcon;
  animationDelay?: number;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  fullWidth?: boolean;
}

export function AnimatedButton({
  children,
  isLoading = false,
  isSuccess = false,
  loadingText = "Loading...",
  successText = "Success!",
  successIcon: SuccessIcon,
  loadingIcon: LoadingIcon,
  animationDelay = 0,
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
  disabled,
  ...props
}: AnimatedButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={fullWidth ? "w-full" : ""}
          >
            <Button
              type="button"
              variant={variant}
              size={size}
              className={`${fullWidth ? "w-full" : ""} ${className}`}
              disabled={true}
            >
              {SuccessIcon && <SuccessIcon className="w-4 h-4 mr-2" />}
              {successText}
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="submit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={fullWidth ? "w-full" : ""}
          >
            <Button
              variant={variant}
              size={size}
              className={`${fullWidth ? "w-full" : ""} ${className}`}
              disabled={isDisabled}
              {...props}
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    {LoadingIcon && (
                      <LoadingIcon className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    {loadingText}
                  </motion.div>
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {children}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
