export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubGist {
  id: string;
  description: string | null;
  html_url: string;
  files: Record<string, {
    filename: string;
    language: string | null;
    content: string;
  }>;
  created_at: string;
  updated_at: string;
}

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  guid: string;
}

export interface VSCodeExtension {
  extensionId: string;
  extensionName: string;
  displayName: string;
  shortDescription: string;
  publisher: {
    displayName: string;
    publisherId: string;
    publisherName: string;
  };
  versions: Array<{
    version: string;
    lastUpdated: string;
  }>;
  statistics: Array<{
    statisticName: string;
    value: number;
  }>;
  tags: string[];
}