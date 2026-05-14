"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-purple-500/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.a
            href="#"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/20">
              <Sparkles className="h-5 w-5 text-white" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 opacity-0 blur-lg transition-opacity group-hover:opacity-60" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Prompt<span className="text-gradient">Genius</span>
            </span>
          </motion.a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="#pricing"
              className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 glass mx-4 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Start Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
