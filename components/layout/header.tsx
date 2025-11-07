"use client";

import Link from "next/link";
import { Search, Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const theme = localStorage.getItem("theme") || "light";
    setIsDark(theme === "dark");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">FT</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">
            FormatTools
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#tools"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#tools"
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
