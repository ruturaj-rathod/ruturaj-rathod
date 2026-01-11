"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm font-medium transition-colors ${className}`}
    >
      <motion.span
        className={`relative z-10 ${
          isActive ? "text-white" : "text-gray-200 hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>

      {/* Active indicator */}

      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="w-[80%] absolute left-[50%] translate-x-[-50%] top-[calc(100%-3px)] h-[3px] inset-0 bg-linear-to-r from-violet-500 to-blue-500 rounded-full"
          style={{
            boxShadow: "0 0 8px rgba(139, 92, 246, 0.7)",
          }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        />
      )}

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-full"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center w-full fixed top-4 z-50"
    >
      <nav className="flex items-center justify-between whitespace-nowrap rounded-full border border-white/10 bg-gray-900/50 p-2 shadow-lg backdrop-blur-xl">
        {/* Logo */}
        <Link className="flex items-center gap-2 text-white pl-3 pr-2" href="/">
          <motion.h2
            className="text-sm font-bold font-inter tracking-tight"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            R R.
          </motion.h2>
        </Link>

        {/* Navigation Links */}
        <NavLink href="/" className="hidden md:inline-block">
          Home
        </NavLink>
        <NavLink href="/experience">Experience</NavLink>
        {/* <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/blogs">Blog</NavLink> */}
      </nav>
    </motion.header>
  );
}
