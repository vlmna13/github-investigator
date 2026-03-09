import type { GitHubRepo, GitHubUser, HistoryEntry } from '@/types/github'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useGitHub } from '@/composables/useGitHub'
import { useInvestigator } from '@/composables/useInvestigator'

const { fetchUser, fetchRepos } = useGitHub()
const { getLanguageProfile } = useInvestigator()

export const useInvestigatorStore = defineStore('investigator', () => {
  const currentUser = ref<GitHubUser | null>(null)
  const currentRepos = ref<GitHubRepo[]>([])
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const history = ref<HistoryEntry[]>([])

  const search = async (username: string) => {
    isLoading.value = true
    error.value = null
    const user = await fetchUser(username)
    if (!user) {
      error.value = 'Suspect not found, Watson.'
      isLoading.value = false
      return
    }
    const repos = await fetchRepos(username)
    currentUser.value = user
    currentRepos.value = repos
    const alreadyInHistory = history.value.find((wanted) => wanted.user.login === user.login)
    if (!alreadyInHistory) {
      const verdict = getLanguageProfile(repos).verdict
      history.value.push({ user, verdict })
    }
    isLoading.value = false
  }
  return { currentUser, currentRepos, isLoading, error, history, search }
})
