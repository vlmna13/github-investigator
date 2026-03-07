import type { GitHubUser, GitHubRepo } from '@/types/github'

export const useGitHub = () => {
  const fetchUser = async (username: string): Promise<GitHubUser | null> => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) return null

      const data: GitHubUser = await response.json()
      return data
    } catch (error) {
      console.error('Failed to fetch user:', error)
      return null
    }
  }

  const fetchRepos = async (username: string): Promise<GitHubRepo[] | null> => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=10&sort=stars`,
      )
      if (!response.ok) return null
      const data: GitHubRepo[] = await response.json()
      return data
    } catch (error) {
      console.error('Failed to fetch user:', error)
      return null
    }
  }

  return { fetchUser, fetchRepos }
}
