"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Wand2,
  MousePointerClick,
  Sparkles,
  Clock,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "AI Idea Generator",
    description:
      "Don't know what to build? Our AI creates unique project ideas tailored to your interests. One click and your entire project is ready.",
    color: "from-amber-500 to-orange-500",
    stats: [
      { label: "Ideas Generated", value: "10K+" },
      { label: "Projects Created", value: "3K+" },
    ],
  },
  {
    icon: Wand2,
    title: "Smart Prompt Enhancement",
    description:
      "Our AI analyzes and enhances your prompts to extract maximum quality from any AI coding agent. Better prompts, better code.",
    color: "from-purple-500 to-violet-500",
    stats: [
      { label: "Prompts Enhanced", value: "50K+" },
      { label: "Quality Boost", value: "3x" },
    ],
  },
  {
    icon: MousePointerClick,
    title: "One-Click Project Creation",
    description:
      "Describe your project in plain English and get a comprehensive development plan with organized feature categories instantly.",
    color: "from-cyan-500 to-blue-500",
    stats: [
      { label: "Generation Time", value: "<5s" },
      { label: "Ideas Per Click", value: "6-45" },
    ],
  },
  {
    icon: Sparkles,
    title: "Prompt Playground",
    description:
      "Live-test your prompts before using them. Iterate, refine, and perfect your prompts with real-time feedback and AI suggestions.",
    color: "from-pink-500 to-rose-500",
    stats: [
      { label: "Tests Run", value: "100K+" },
      { label: "Time Saved", value: "80%" },
    ],
  },
  {
    icon: Clock,
    title: "Execution Follow-Up Agent",
    description:
      "Track the execution of your prompts and get intelligent follow-up suggestions to keep your development on track.",
    color: "from-emerald-500 to-teal-500",
    stats: [
      { label: "Tasks Tracked", value: "25K+" },
      { label: "Success Rate", value: "95%" },
    ],
  },
  {
    icon: Layers,
    title: "Team Collaboration",
    description:
      "Share projects, prompts, and entire workflows with your team. Build a shared library of battle-tested prompts.",
    color: "from-indigo-500 to-purple-500",
    stats: [
      { label: "Teams Active", value: "500+" },
      { label: "Shared Prompts", value: "15K+" },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Powerful Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-gradient">Ship Faster</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            From idea generation to production-ready prompts, we&apos;ve got every
            step of your AI-powered development workflow covered.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass glass-hover card-shine group relative h-full rounded-2xl p-7 transition-all duration-300 hover:translate-y-[-4px]">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-5 flex gap-4">
                  {feature.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-lg font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
