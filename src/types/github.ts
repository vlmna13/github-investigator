export interface GitHubUser {
  id: number
  login: string
  name: string | null
  avatar_url: string
  location: string | null
  bio: string | null
  followers: number
  following: number
  public_repos: number
  created_at: string
  html_url: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  html_url: string
  topics: string[]
}
