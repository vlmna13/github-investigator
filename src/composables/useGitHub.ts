import type { GitHubUser, GitHubRepo } from '@/types/github'

export const useGitHub = () => {
  const fetchUser = async (username: string): Promise<GitHubUser> => {
    let response: Response
    try {
      response = await fetch(`https://api.github.com/users/${username}`)
    } catch {
      throw new Error('NETWORK_ERROR')
    }
    if (response.status === 404) throw new Error('NOT_FOUND')
    if (response.status === 403) throw new Error('RATE_LIMIT')
    if (!response.ok) throw new Error('SERVER_ERROR')
    return response.json() as Promise<GitHubUser>
  }

  const fetchRepos = async (username: string): Promise<GitHubRepo[]> => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=6&sort=stars`,
      )
      if (!response.ok) return []
      return response.json() as Promise<GitHubRepo[]>
    } catch {
      return []
    }
  }

  return { fetchUser, fetchRepos }
}
