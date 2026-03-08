<template>
  <RouterLink to="/" class="back-link">← New Investigation</RouterLink>
  <ProfileCard v-if="store.currentUser" :user="store.currentUser" />
  <EvidenceGrid v-if="store.currentRepos.length" :repos="store.currentRepos" />
  <div v-else class="no-evidence">
    <p>— No evidence on file. All repositories classified. —</p>
  </div>
</template>

<style scoped>
.back-link {
  display: inline-block;
  color: var(--ink-faded);
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 20px;
  transition: color 0.15s;
  border: 1px solid var(--ink-faded);
  padding: 5px;
}

.back-link:hover {
  color: var(--paper);
  border: 1px solid var(--paper);
}

.no-evidence {
  text-align: center;
  color: var(--ink-faded);
  font-family: 'IM Fell English', serif;
  font-style: italic;
  padding: 40px;
  letter-spacing: 2px;
}
</style>

<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue'
import { useRoute } from 'vue-router'
import { useInvestigatorStore } from '@/stores/investigator'
import { onMounted } from 'vue'
import EvidenceGrid from '@/components/EvidenceGrid.vue'

const route = useRoute()
const store = useInvestigatorStore()

onMounted(async () => {
  await store.search(route.params.username as string)
})
</script>
