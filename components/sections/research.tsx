"use client";

import { motion } from "framer-motion";
import { Languages, Database, Zap, Globe } from "lucide-react";
import { researchAreas, currentFocus } from "@/data/portfolio";

const iconMap = {
  Languages,
  Database,
  Zap,
  Globe,
};

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "hover:border-blue-500/50",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "hover:border-purple-500/50",
  },
  green: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "hover:border-emerald-500/50",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "hover:border-orange-500/50",
  },
};

export function ResearchSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="research" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-sora)]">
            Research Areas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Research Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {researchAreas.map((area) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap];
            const colors = colorMap[area.color as keyof typeof colorMap];

            return (
              <motion.article
                key={area.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card p-6 border border-transparent ${colors.border} transition-all cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-sora)]">
                  {area.title}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Current Focus Panel */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-sora)]">
            Current Research Focus
          </h3>
          <p className="text-foreground-secondary leading-relaxed mb-6">
            {currentFocus.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {currentFocus.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-surface border border-border text-sm font-medium text-foreground-secondary hover:text-primary hover:border-primary transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
