"use client";

import { Logo } from "@/components/logo";
import { RegisterForm } from "@/features/auth/components/register-form";
import { motion } from "motion/react";

const Register = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex justify-center items-center"
      >
        <Logo iconOnly={true} />
      </motion.div>
      <div className="w-full mb-6 flex flex-col gap-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center font-bold text-primary "
        >
          Create an account
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-sm text-center "
        >
          Sign up to access your dashboard and start building amazing projects.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full mb-6"
      >
        <RegisterForm />
      </motion.div>
    </div>
  );
};

export default Register;
