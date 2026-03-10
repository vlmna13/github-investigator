import type { GitHubRepo, GitHubUser, HistoryEntry } from '@/types/github'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useGitHub } from '@/composables/useGitHub'
import { useInvestigator } from '@/composables/useInvestigator'

const { fetchUser, fetchRepos } = useGitHub()
const { getLanguageProfile } = useInvestigator()

const ERROR_MESSAGES: Record<string, string> = {
  NOT_FOUND: 'Suspect not found, Watson.',
  RATE_LIMIT: 'GitHub rate limit exceeded. Try again in a moment.',
  TIMEOUT: 'The investigation timed out. Check your connection.',
  NETWORK_ERROR: 'Cannot reach GitHub. Check your connection.',
  SERVER_ERROR: 'GitHub is not cooperating. Try again later.',
}

export const useInvestigatorStore = defineStore('investigator', () => {
  const currentUser = ref<GitHubUser | null>(null)
  const currentRepos = ref<GitHubRepo[]>([])
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const history = ref<HistoryEntry[]>([])

  const search = async (username: string) => {
    isLoading.value = true
    error.value = null
    try {
      const user = await fetchUser(username)
      const repos = await fetchRepos(username)
      currentUser.value = user
      currentRepos.value = repos
      const alreadyInHistory = history.value.find((wanted) => wanted.user.login === user.login)
      if (!alreadyInHistory) {
        const verdict = getLanguageProfile(repos).verdict
        history.value.push({ user, verdict })
      }
    } catch (e) {
      const code = e instanceof Error ? e.message : ''
      error.value = ERROR_MESSAGES[code] ?? 'Investigation failed. Try again.'
    } finally {
      isLoading.value = false
    }
  }

  return { currentUser, currentRepos, isLoading, error, history, search }
})
