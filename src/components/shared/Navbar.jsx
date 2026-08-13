"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "All Tiles", href: "/tiles" },
  { label: "My Profile", href: "/profile" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div>
              <Image
                src="/logo.png"
                height={50}
                width={50}
                alt="Logo"
                className="object-cover h-auto w-auto"
              />
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-4 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>

          <ul className=" items-center gap-4 flex">
            <li>
              {!user && (
                <Link href="/signin">
                  <Button size="lg">Login</Button>
                </Link>
              )}
              {user && (
                <div className="flex justify-center items-center gap-3">
                  <Avatar size="md">
                    <Avatar.Image
                      alt="Profile Image"
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <Button size="lg" variant="danger-soft" onClick={handleSignOut}>
                    Logout
                  </Button>
                </div>
              )}
            </li>
          </ul>
        </header>

        {/* Mobile nav — reuses the same NAV_ITEMS */}
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <NavLink
                    className="block py-2"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
