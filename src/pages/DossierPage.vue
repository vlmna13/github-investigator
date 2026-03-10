<template>
  <div v-if="store.error" class="dossier-error serif-italic">
    <p>{{ store.error }}</p>
  </div>
  <template v-else>
    <ProfileCard v-if="store.currentUser" :user="store.currentUser" />
    <EvidenceGrid v-if="store.currentRepos.length" :repos="store.currentRepos" />
    <div v-else-if="store.currentUser" class="no-evidence serif-italic">
      <p>— No evidence on file. All repositories classified. —</p>
    </div>
  </template>
</template>

<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue'
import { useRoute } from 'vue-router'
import { useInvestigatorStore } from '@/stores/investigator'
import { onMounted, watch } from 'vue'
import EvidenceGrid from '@/components/EvidenceGrid.vue'

const route = useRoute()
const store = useInvestigatorStore()

onMounted(async () => {
  const username = Array.isArray(route.params.username)
    ? route.params.username[0]
    : route.params.username
  if (username) {
    await store.search(username)
  }
})

watch(
  () => route.params.username,
  async (newUsername) => {
    const username = Array.isArray(newUsername) ? newUsername[0] : newUsername
    if (username) await store.search(username)
  },
)
</script>

<style scoped>
.no-evidence {
  text-align: center;
  color: var(--ink-faded);
  letter-spacing: 2px;
  padding: 60px 40px;
}

.dossier-error {
  text-align: center;
  color: var(--red);
  letter-spacing: 2px;
  padding: 80px 40px;
  font-size: 15px;
}
</style>
