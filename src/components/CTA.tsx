"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-surface to-cyan-600/20" />
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-[100px]" />

          <div className="glow-border relative rounded-3xl">
            <div className="relative px-8 py-16 text-center sm:px-16 sm:py-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/30"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                From Idea to Code in{" "}
                <span className="text-gradient">Seconds</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
                Join developers and builders who are turning their ideas into
                ready-to-use prompts. Copy, paste into any AI coding agent, and
                start building instantly.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10"
              >
                <motion.a
                  href="#pricing"
                  className="btn-primary group inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Building Today
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
