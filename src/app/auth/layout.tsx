import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 bg-background">
        <div className="w-full max-w-md mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
