"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar when scrolling down and show when scrolling up
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/40 shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            <span className="text-2xl font-bold text-white">
              Devils Ad Astra
            </span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/about"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            About
          </Link>
          {/* <Link
            href="/projects"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            Projects
          </Link> */}
          <Link
            href="/team"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            Contact
          </Link>
          <Link
            href="/apply"
            className="px-4 py-2 bg-white text-black rounded transition-colors hover:bg-gray-200 font-bold"
          >
            Apply
          </Link>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4 items-center">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white transition-colors hover:text-gray-300"
            >
              About
            </Link>
            {/* <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white transition-colors hover:text-gray-300"
            >
              Projects
            </Link> */}
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white transition-colors hover:text-gray-300"
            >
              Team
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white transition-colors hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 bg-white text-black rounded transition-colors hover:bg-gray-200 text-lg font-bold"
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
