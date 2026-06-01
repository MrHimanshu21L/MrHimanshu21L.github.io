export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface LanguageStats {
  [language: string]: number;
}

const GITHUB_USERNAME = "MrHimanshu21L";

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch GitHub user:", error);
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

export function calculateLanguageStats(repos: GitHubRepo[]): LanguageStats {
  const stats: LanguageStats = {};

  repos.forEach((repo) => {
    if (repo.language) {
      stats[repo.language] = (stats[repo.language] || 0) + 1;
    }
  });

  return stats;
}

export function getTopLanguages(stats: LanguageStats, limit: number = 5): Array<{ name: string; count: number; percentage: number }> {
  const total = Object.values(stats).reduce((sum, count) => sum + count, 0);
  
  return Object.entries(stats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / total) * 100),
    }));
}

export function getRecentRepos(repos: GitHubRepo[], limit: number = 6): GitHubRepo[] {
  return repos
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, limit);
}

export function getTotalStars(repos: GitHubRepo[]): number {
  return repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
}

export function getTotalForks(repos: GitHubRepo[]): number {
  return repos.reduce((sum, repo) => sum + repo.forks_count, 0);
}

// Language colors for visualization
export const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Jupyter: "#DA5B0B",
  Notebook: "#DA5B0B",
};

export function getLanguageColor(language: string): string {
  return languageColors[language] || "#8b949e";
}
