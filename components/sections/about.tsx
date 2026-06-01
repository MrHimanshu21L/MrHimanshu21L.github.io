"use client";

import { motion } from "framer-motion";
import { FolderOpen, Award, GraduationCap, Brain } from "lucide-react";
import Image from "next/image";
import { aboutContent, metrics, allSkills, personalInfo } from "@/data/portfolio";

const iconMap = {
  FolderOpen,
  Award,
  GraduationCap,
  Brain,
};

export function AboutSection() {
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
    <section id="about" className="py-24 bg-background relative overflow-hidden">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* About Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-foreground-secondary leading-relaxed text-lg"
              >
                {paragraph.highlights.length > 0
                  ? paragraph.text.split(new RegExp(`(${paragraph.highlights.join("|")})`)).map((part, i) =>
                      paragraph.highlights.includes(part) ? (
                        <span key={i} className="text-foreground font-semibold">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )
                  : paragraph.text}
              </motion.p>
            ))}
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card p-6 glow-secondary">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((metric) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-foreground-muted">{metric.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-sora)]">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-surface border border-border text-sm font-medium text-foreground-secondary hover:text-primary hover:border-primary transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
