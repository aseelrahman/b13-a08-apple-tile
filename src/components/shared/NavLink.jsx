"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-b-blue-600" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
