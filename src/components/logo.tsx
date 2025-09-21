"use client";

import Link from "next/link";
import React from "react";

export const Logo = ({
  href = "/",
  iconOnly = false,
  iconSize = 12,
}: {
  href?: string;
  iconOnly?: boolean;
  iconSize?: number;
}) => {
  return (
    <Link href={href} className="text-2xl font-bold flex items-center gap-2">
      <div
        className={`bg-primary text-primary-foreground rounded-md p-2 w-${iconSize} h-${iconSize} flex items-center justify-center text-[${iconSize * 1.7}px]`}
      >
        N
      </div>
      {!iconOnly && (
        <div className="text-primary flex flex-col gap-0">
          <span className="text-lg font-bold">Next Kit</span>
        </div>
      )}
    </Link>
  );
};
