"use client";

import { Sparkles } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
    { name: "Support", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Prompt<span className="text-gradient">Genius</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Your command center for AI coding prompts. Store them. Improve
              them. Reuse them. Ship faster.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 text-gray-400 transition-all hover:border-purple-500/30 hover:text-white"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 text-gray-400 transition-all hover:border-purple-500/30 hover:text-white"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Prompt Genius AI. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with passion for the developer community
          </p>
        </div>
      </div>
    </footer>
  );
}
