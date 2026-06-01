"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-24 bg-background-secondary relative">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Projects Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl mx-auto mb-12"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 md:p-8 transition-all"
            >
              {/* Project Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-foreground-muted">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="px-2 py-0.5 bg-surface rounded-md text-xs font-medium text-foreground-secondary">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.link}
                    className="px-4 py-2 bg-primary hover:bg-primary-light text-white text-sm rounded-lg font-medium transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border hover:border-primary text-foreground-secondary hover:text-primary transition-all"
                      aria-label="View on GitHub"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-sora)]">
                {project.title}
              </h3>
              <p className="text-foreground-secondary mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-foreground-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#github"
            className="px-6 py-3 border border-border hover:border-primary text-foreground-secondary hover:text-primary rounded-lg font-medium transition-all"
          >
            View All Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
