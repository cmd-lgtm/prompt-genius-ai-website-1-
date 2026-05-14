"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, Globe, CreditCard } from "lucide-react";

const badges = [
  { icon: Shield, label: "Secure & Private" },
  { icon: Zap, label: "Instant Results" },
  { icon: Globe, label: "Works with Any AI" },
  { icon: CreditCard, label: "No Credit Card Required" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-[15%] h-20 w-20 rotate-45 rounded-2xl border border-purple-500/10 animate-float-slow" />
      <div className="absolute bottom-40 left-[10%] h-16 w-16 rounded-full border border-cyan-500/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[60%] right-[10%] h-12 w-12 rotate-12 rounded-xl border border-purple-500/10 animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-16 text-center sm:pt-24 lg:pt-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
            </span>
            Trusted by 5,000+ developers worldwide
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Tired of AI Giving You{" "}
            <span className="text-gradient">Mediocre Code?</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
          >
            You don&apos;t need a better AI. You need better prompts — organized,
            reusable, and built to perform.{" "}
            <span className="text-gray-200">
              Your command center for AI coding prompts.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#pricing"
              className="btn-primary group flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="btn-secondary group flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-4 w-4 text-purple-400" />
              See How It Works
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <badge.icon className="h-4 w-4 text-purple-400/60" />
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero visual - Floating UI mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="relative rounded-2xl border border-purple-500/10 bg-surface/80 p-1 shadow-2xl shadow-purple-500/5 backdrop-blur-sm">
            <div className="glow-border rounded-xl">
              <div className="rounded-xl bg-gradient-to-b from-surface to-surface-light p-8 sm:p-12">
                {/* Mock UI */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <div className="ml-4 h-6 flex-1 rounded-full bg-surface-lighter/50" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {["SaaS Dashboard", "E-commerce API", "Auth System"].map(
                    (project, i) => (
                      <motion.div
                        key={project}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                        className="glass rounded-xl p-5 transition-all hover:border-purple-500/30"
                      >
                        <div className="mb-3 h-2 w-3/4 rounded-full bg-gradient-to-r from-purple-500/40 to-cyan-500/40" />
                        <p className="text-sm font-medium text-gray-300">
                          {project}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          12 prompts ready
                        </p>
                        <div className="mt-3 flex gap-1.5">
                          {[...Array(3)].map((_, j) => (
                            <div
                              key={j}
                              className="h-1.5 flex-1 rounded-full bg-purple-500/20"
                            />
                          ))}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Glow under the card */}
          <div className="absolute -bottom-10 left-1/2 h-40 w-4/5 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}
