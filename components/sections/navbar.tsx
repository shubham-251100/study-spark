"use client";

/**
 * NAVBAR - Client Component
 *
 * This must be a Client Component because:
 * 1. Uses useState for scroll state and mobile menu toggle
 * 2. Uses useEffect for scroll event listener
 * 3. Uses usePathname from next/navigation (client-side hook)
 * 4. Contains interactive elements (buttons, modals)
 *
 * Navigation links use Next.js Link for client-side navigation.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Gamepad2 } from "lucide-react";
import { LoginModal } from "@/components/login-modal";
import { UserMenu } from "@/components/user-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const pathname = usePathname();
  const isQuizPage = pathname === "/quiz";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Topics", href: "#topics" },
    { name: "Features", href: "#features" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        // Navigate to home with hash
        window.location.href = "/" + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span
                className={`font-display text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                StudySpark
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary-purple relative group ${
                    isScrolled ? "text-gray-700" : "text-gray-700"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-purple transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <Link
                href="/quiz"
                className={`text-sm font-medium transition-all duration-300 hover:text-primary-purple relative group flex items-center gap-1 ${
                  isScrolled ? "text-gray-700" : "text-gray-700"
                } ${isQuizPage ? "text-primary-purple" : ""}`}
              >
                <Gamepad2 className="w-4 h-4" />
                Quiz
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-purple transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <UserMenu onOpenLogin={() => setIsLoginModalOpen(true)} />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMobileMenuOpen ? "max-h-[500px] mt-4" : "max-h-0"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-purple/10 hover:text-primary-purple rounded-xl transition-all duration-300 font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Link
                href="/quiz"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-purple/10 hover:text-primary-purple rounded-xl transition-all duration-300 font-medium flex items-center gap-2"
              >
                <Gamepad2 className="w-4 h-4" />
                Quiz Challenge
              </Link>
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-gray-700 hover:bg-primary-purple/10 hover:text-primary-purple rounded-xl transition-all duration-300 font-medium text-left"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-brand text-white rounded-xl px-4 py-3 font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
