import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: `https://github.com/${personalInfo.github}`, label: "GitHub" },
    { icon: Linkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}`, label: "LinkedIn" },
    { icon: Twitter, href: `https://x.com/${personalInfo.twitter}`, label: "Twitter" },
    { icon: Instagram, href: `https://instagram.com/${personalInfo.instagram}`, label: "Instagram" },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-foreground-muted text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
            <span className="text-foreground">{personalInfo.name}</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Year */}
          <p className="text-foreground-muted text-sm">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
