"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Hobbyist",
    icon: Sparkles,
    price: "Free",
    period: "",
    description: "Perfect for exploring and getting started",
    color: "from-gray-500 to-gray-400",
    borderColor: "border-gray-500/20",
    popular: false,
    features: [
      { name: "1 project per month", included: true },
      { name: "Convert ideas into projects", included: true },
      { name: "Step-by-step prompts & AI roles", included: true },
      { name: "Share projects with team", included: false },
      { name: "Prompt Playground & Live Testing", included: false },
      { name: "AI Prompt Enhancement", included: false },
      { name: "Execution Follow-Up Agent", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Plus",
    icon: Zap,
    price: "$12",
    period: "/month",
    description: "For serious builders who ship regularly",
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500/30",
    popular: true,
    features: [
      { name: "10+ projects per month", included: true },
      { name: "Convert ideas into projects", included: true },
      { name: "Step-by-step prompts & AI roles", included: true },
      { name: "Share projects with team", included: true },
      { name: "Prompt Playground & Live Testing", included: true },
      { name: "AI Prompt Enhancement", included: true },
      { name: "Execution Follow-Up Agent", included: false },
      { name: "Community Support", included: true },
    ],
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$29",
    period: "/month",
    description: "Unlimited power for professional teams",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/20",
    popular: false,
    features: [
      { name: "30+ projects per month", included: true },
      { name: "Convert ideas into projects", included: true },
      { name: "Step-by-step prompts & AI roles", included: true },
      { name: "Share projects with team", included: true },
      { name: "Prompt Playground & Live Testing", included: true },
      { name: "AI Prompt Enhancement", included: true },
      { name: "Execution Follow-Up Agent", included: true },
      { name: "Priority Support", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
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
            Simple Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Start Free.{" "}
            <span className="text-gradient">Scale When Ready.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            No credit card required. Upgrade when you&apos;re ready to build more
            projects and unlock advanced features.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-purple-500/20">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`glass card-shine group relative h-full rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] ${
                  plan.popular
                    ? "border-purple-500/30 shadow-lg shadow-purple-500/10"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${plan.color} shadow-lg`}
                  >
                    <plan.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                </div>

                <div className="mt-6">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>

                <motion.a
                  href="#"
                  className={`mt-6 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "btn-secondary text-gray-300"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                </motion.a>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center gap-3 text-sm"
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4 shrink-0 text-purple-400" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-gray-600" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
