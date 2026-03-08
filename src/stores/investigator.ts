import type { GitHubRepo, GitHubUser } from '@/types/github'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useGitHub } from '@/composables/useGitHub'

const { fetchUser, fetchRepos } = useGitHub()

export const useInvestigatorStore = defineStore('investigator', () => {
  const currentUser = ref<GitHubUser | null>(null)
  const currentRepos = ref<GitHubRepo[] | null>([])
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const history = ref<GitHubUser[]>([])

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
    const alreadyInHistory = history.value.find((wanted) => wanted.login === user.login)
    if (!alreadyInHistory) {
      history.value.push(user)
    }
    isLoading.value = false
  }
  return { currentUser, currentRepos, isLoading, error, history, search }
})
