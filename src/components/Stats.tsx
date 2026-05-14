"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Layers, Rocket, Heart } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 10,
    suffix: "x",
    label: "Faster Development",
    description: "vs manual prompt writing",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Layers,
    value: 50,
    suffix: "K+",
    label: "Prompts Generated",
    description: "and counting daily",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Rocket,
    value: 5,
    suffix: "K+",
    label: "Projects Launched",
    description: "by our community",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "User Satisfaction",
    description: "based on reviews",
    color: "from-emerald-500 to-cyan-500",
  },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24" ref={ref}>
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
            Trusted by Builders Worldwide
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            The Numbers Speak for{" "}
            <span className="text-gradient">Themselves</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Join thousands of developers who are already shipping faster with
            AI-powered prompts
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass glass-hover card-shine group relative rounded-2xl p-8 text-center transition-all duration-300">
                <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
                <p className="mt-2 text-sm font-semibold text-gray-200">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
