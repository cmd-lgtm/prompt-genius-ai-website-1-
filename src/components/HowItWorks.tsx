"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  LayoutDashboard,
  SlidersHorizontal,
  Cpu,
  Copy,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Share Your Idea",
    description:
      "Describe your project in plain English — a SaaS app, blog, or any vision you have.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: LayoutDashboard,
    step: "02",
    title: "We Plan It For You",
    description:
      "Our AI creates a comprehensive development plan with organized feature categories.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: SlidersHorizontal,
    step: "03",
    title: "Customize Your Plan",
    description:
      "Select features, adjust priorities, add custom requirements to fit your exact needs.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Cpu,
    step: "04",
    title: "Generate Brilliant Features",
    description:
      "AI generates detailed, production-ready features with clear specs for each component.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Copy,
    step: "05",
    title: "Copy, Paste & Build",
    description:
      "Get one optimized prompt. Paste it into Claude, GPT, Cursor, or any AI agent and start building.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            Simple Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From Idea to Code in{" "}
            <span className="text-gradient">5 Simple Steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            From idea to ready-to-use prompt — it&apos;s that easy
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/20 via-cyan-500/20 to-purple-500/20 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col items-center lg:flex-row ${
                  i % 2 === 0 ? "" : "lg:flex-row-reverse"
                } lg:mb-16`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <div className="glass glass-hover card-shine rounded-2xl p-7 transition-all duration-300 hover:translate-y-[-4px]">
                    <div className={`inline-flex items-center gap-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 my-6 flex h-14 w-14 items-center justify-center lg:my-0 lg:w-2/12">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-lg shadow-purple-500/20`}>
                    <span className="text-sm font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden w-5/12 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
