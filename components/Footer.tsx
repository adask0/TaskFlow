"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const links = [
    { href: "/polityka-prywatnosci", label: "Polityka Prywatności" },
  ];

  return (
    <footer className="bg-gray-100 shadow mt-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center max-w-7xl flex-col md:flex-row gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[1.5rem] text-[#102c4d] font-semibold">
            TaskFlow
          </span>
          <img
            src="/logo.png"
            alt="TaskFlow Logo"
            className="h-10 hover:rotate-180 transition-transform duration-500"
          />
        </Link>
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} TaskFlow. Wszelkie prawa
          zastrzeżone.
        </div>
        <nav>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span
                    className={`${
                      pathname === link.href
                        ? "text-[1rem] text-[#102c4d] font-semibold"
                        : "text-gray-600"
                    } hover:text-[#102c4d] transition-colors duration-500 mt-1`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
