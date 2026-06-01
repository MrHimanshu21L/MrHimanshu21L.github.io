"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Code, ExternalLink, Users, BookOpen, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {
  GitHubUser,
  GitHubRepo,
  getLanguageColor,
  getTopLanguages,
  calculateLanguageStats,
  getTotalStars,
  getTotalForks,
} from "@/lib/github";
import { personalInfo } from "@/data/portfolio";

interface GitHubStatsProps {
  user: GitHubUser | null;
  repos: GitHubRepo[];
}

export function GitHubStats({ user, repos }: GitHubStatsProps) {
  const languageStats = calculateLanguageStats(repos);
  const topLanguages = getTopLanguages(languageStats, 6);
  const totalStars = getTotalStars(repos);
  const totalForks = getTotalForks(repos);
  const recentRepos = repos
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, 6);

  const stats = [
    { icon: BookOpen, label: "Repositories", value: user?.public_repos || repos.length },
    { icon: Star, label: "Total Stars", value: totalStars },
    { icon: GitFork, label: "Total Forks", value: totalForks },
    { icon: Users, label: "Followers", value: user?.followers || 0 },
  ];

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
    <section id="github" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-4">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground-secondary">Live GitHub Data</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-sora)]">
            GitHub Analytics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 text-center group cursor-default"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Language Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 font-[family-name:var(--font-sora)]">
              <Code className="w-5 h-5 text-primary" />
              Top Languages
            </h3>
            <div className="space-y-4">
              {topLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(lang.name) }}
                      />
                      <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                    <span className="text-sm text-foreground-muted">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: getLanguageColor(lang.name) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2 font-[family-name:var(--font-sora)]">
                <FaGithub className="w-5 h-5 text-primary" />
                Recent Repositories
              </h3>
              <a
                href={`https://github.com/${personalInfo.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-secondary hover:text-primary transition-colors flex items-center gap-1"
              >
                View All <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {recentRepos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-surface border border-border hover:border-primary transition-all group"
                >
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </h4>
                  <p className="text-sm text-foreground-muted mb-3 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || "No description provided"}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-foreground-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover border border-border hover:border-primary rounded-lg font-medium transition-all hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            View Full GitHub Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
