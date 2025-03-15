"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/90 to-black/70 text-white py-3 px-4 md:px-8 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="hidden md:block text-xl font-bold tracking-wider">
            Special Dance Tv
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
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

        <ul
          className={`md:flex md:space-x-8 ${
            isMenuOpen
              ? "absolute top-full left-0 right-0 flex flex-col items-center space-y-4 py-4 bg-black/90 backdrop-blur-sm"
              : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              onClick={handleNavClick}
              className={`hover:text-blue-400 transition-all duration-300 ${
                pathname === "/"
                  ? "text-blue-400 font-medium border-b border-blue-400 pb-0.5"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={handleNavClick}
              className={`hover:text-blue-400 transition-all duration-300 ${
                pathname === "/about"
                  ? "text-blue-400 font-medium border-b border-blue-400 pb-0.5"
                  : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className={`hover:text-blue-400 transition-all duration-300 ${
                pathname === "/contact"
                  ? "text-blue-400 font-medium border-b border-blue-400 pb-0.5"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
