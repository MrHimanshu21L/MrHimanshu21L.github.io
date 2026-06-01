"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { education, experience } from "@/data/portfolio";

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const currentEducation = education[0];
  const currentExperience = experience[0];

  return (
    <section id="experience" className="py-24 bg-background-secondary relative">
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
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden"
        >
          {/* Overview Section */}
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            {/* Current Role */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground-muted mb-1">
                  Current Role
                </p>
                <h3 className="text-lg font-bold mb-1 font-[family-name:var(--font-sora)]">
                  AI / ML Engineering Student
                </h3>
                <p className="text-foreground-secondary text-sm mb-2">
                  {currentEducation.institution}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-foreground-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {currentEducation.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {currentEducation.location}
                  </span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  Focused on machine learning, problem solving, frontend systems, and portfolio-grade implementation work.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground-muted mb-1">
                  Education
                </p>
                <h3 className="text-lg font-bold mb-1 font-[family-name:var(--font-sora)]">
                  {currentEducation.degree}
                </h3>
                <p className="text-foreground-secondary text-sm mb-2">
                  {currentEducation.institution}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-foreground-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {currentEducation.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {currentEducation.location}
                  </span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  {currentEducation.highlights[0]}
                </p>
                <p className="mt-2 text-sm">
                  CGPA:{" "}
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    {currentEducation.score}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-6 py-4 border-t border-border flex items-center justify-center gap-2 text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-surface-hover transition-all"
          >
            <span>{isExpanded ? "Hide" : "View"} Full Education & Work History</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 md:p-8 border-t border-border grid md:grid-cols-2 gap-8">
                  {/* Work Experience */}
                  <div>
                    <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-sora)]">
                      Work Experience
                    </h3>
                    <div className="space-y-6">
                      {experience.map((exp, index) => (
                        <div key={index} className="relative pl-6 border-l-2 border-border">
                          <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary" />
                          <h4 className="font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-sm text-foreground-secondary mb-1">{exp.company}</p>
                          <div className="flex flex-wrap gap-2 text-xs text-foreground-muted mb-2">
                            <span>{exp.period}</span>
                            <span>{exp.location}</span>
                            <span className="px-2 py-0.5 bg-surface rounded-md">{exp.badge}</span>
                          </div>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-foreground-secondary">
                                • {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education History */}
                  <div>
                    <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-sora)]">
                      Education History
                    </h3>
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={index} className="relative pl-6 border-l-2 border-border">
                          <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-secondary" />
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-sm text-foreground-secondary mb-1">{edu.institution}</p>
                          <div className="flex flex-wrap gap-2 text-xs text-foreground-muted mb-2">
                            <span>{edu.period}</span>
                            <span>{edu.location}</span>
                          </div>
                          <p className="text-sm mb-2">
                            {edu.scoreType}:{" "}
                            <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium">
                              {edu.score}
                            </span>
                          </p>
                          <ul className="space-y-1">
                            {edu.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-foreground-secondary">
                                • {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
