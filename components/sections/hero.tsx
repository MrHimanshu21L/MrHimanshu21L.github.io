"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export function HeroSection() {
  const socialLinks = [
    { icon: FaGithub, href: `https://github.com/${personalInfo.github}`, label: "GitHub" },
    { icon: FaLinkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}`, label: "LinkedIn" },
    { icon: FaXTwitter, href: `https://x.com/${personalInfo.twitter}`, label: "Twitter" },
    { icon: FaInstagram, href: `https://instagram.com/${personalInfo.instagram}`, label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 relative inline-block"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/30 glow-primary">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-success rounded-full border-4 border-background" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-sora)]"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground-secondary mb-6 font-medium"
          >
            {personalInfo.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-foreground-muted max-w-2xl mx-auto mb-10 text-balance"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#research"
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              View My Research
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-6 py-3 bg-surface hover:bg-surface-hover border border-border rounded-lg font-medium transition-all flex items-center gap-2 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border hover:border-primary text-foreground-secondary hover:text-primary rounded-lg font-medium transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border hover:border-primary text-foreground-secondary hover:text-primary transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border border-border text-foreground-muted hover:text-primary hover:border-primary transition-all animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
