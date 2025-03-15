"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/90 to-black/70 text-white py-3 px-8 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold tracking-wider">Special Dance Tv</h1>
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
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
              className={`hover:text-blue-400 transition-all duration-300 ${
                pathname === "/about"
                  ? "text-blue-400 font-medium border-b border-blue-400 pb-0.5"
                  : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
