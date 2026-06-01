"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function ContactSection() {
  const socialLinks = [
    { icon: Github, href: `https://github.com/${personalInfo.github}`, label: "GitHub" },
    { icon: Linkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}`, label: "LinkedIn" },
    { icon: Twitter, href: `https://x.com/${personalInfo.twitter}`, label: "Twitter" },
    { icon: Instagram, href: `https://instagram.com/${personalInfo.instagram}`, label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 bg-background-secondary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-sora)]">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Interested in research collaboration, projects, or opportunities? I would love to discuss how we can work together.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-foreground-secondary hover:text-primary transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-foreground-secondary">
                  {personalInfo.location}
                  <br />
                  <span className="text-sm">{personalInfo.locationDetail}</span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface hover:bg-surface-hover border border-border hover:border-primary text-foreground-secondary hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Form submission would be handled here
              alert("Thank you for your message! I will get back to you soon.");
            }}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                What do you want to talk about?
              </label>
              <textarea
                placeholder="Research collaboration, projects, opportunities..."
                rows={4}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
