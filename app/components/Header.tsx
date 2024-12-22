"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-pink-500 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Left Div: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/assets/images/logo.png" // Update with actual logo path
              alt="Logo"
              className="h-10 w-10"
            />
          </Link>
        </div>

        {/* Right Div: Menu and Profile */}
        <div className="flex items-center space-x-6">
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="/doctors" className="hover:underline">
              Doctors
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/guides" className="hover:underline">
              Guides
            </a>
            <a href="/login" className="hover:underline">
              Login
            </a>
            <a href="/register" className="hover:underline">
              Register
            </a>
          </nav>

          {/* Profile Picture for Larger Screens */}
          <img
            src="/assets/images/profile.png" // Update with actual profile picture path
            alt="Profile"
            className="h-10 w-10 rounded-full border border-white hidden md:block"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-pink-600">
          <ul className="space-y-4 py-4 px-4">
            <li>
              <a href="/doctors" className="block hover:underline">
                Doctors
              </a>
            </li>
            <li>
              <a href="/about" className="block hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/guides" className="block hover:underline">
                Guides
              </a>
            </li>
            <li>
              <a href="/login" className="block hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="block hover:underline">
                Register
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
