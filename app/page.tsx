import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ResearchSection } from "@/components/sections/research";
import { ProjectsSection } from "@/components/sections/projects";
import { GitHubStats } from "@/components/sections/github-stats";
import { ContactSection } from "@/components/sections/contact";
import { fetchGitHubUser, fetchGitHubRepos } from "@/lib/github";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  // Fetch GitHub data server-side
  const [user, repos] = await Promise.all([
    fetchGitHubUser(),
    fetchGitHubRepos(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <GitHubStats user={user} repos={repos} />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
