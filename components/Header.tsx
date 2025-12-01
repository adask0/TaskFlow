"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/o-nas", label: "O nas" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/cennik", label: "Cennik" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow w-full top-0 z-50 sticky">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
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

        {mobile ? (
          <div>
            <svg
              onClick={toggleMobileMenu}
              className="w-8 h-8 cursor-pointer text-[#102c4d]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <>
                  <path
                    d="M4 18L20 18"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </div>
        ) : (
          <nav>
            <ul className="flex space-x-6 items-center">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`${
                        pathname === link.href
                          ? "text-[1rem] text-[#102c4d] font-semibold"
                          : "text-gray-600"
                      } hover:text-[#102c4d] transition-colors duration-500 hover:underline duration-500`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/login">
                  <button className="bg-[#102c4d] text-white px-4 py-2 rounded hover:bg-[#f9f9f9] transition-colors duration-500 hover:text-[#102c4d] duration-500 cursor-pointer">
                    Zacznij korzystać już teraz
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {mobile && mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-10">
          <nav className="p-4">
            <ul className="flex flex-col space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={toggleMobileMenu}>
                    <span
                      className={`${
                        pathname === link.href
                          ? "text-lg text-[#102c4d] font-bold"
                          : "text-lg text-gray-700"
                      } block py-2 hover:bg-gray-100 transition-colors duration-200`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <Link href="/login">
                <button className="bg-[#102c4d] text-white px-4 py-2 rounded hover:bg-[#f9f9f9] transition-colors duration-500 hover:text-[#102c4d] duration-500 cursor-pointer">
                  Zacznij korzystać już teraz
                </button>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
