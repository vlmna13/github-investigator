<template>
  <ProfileCard v-if="store.currentUser" :user="store.currentUser" />
  <EvidenceGrid v-if="store.currentRepos.length" :repos="store.currentRepos" />
  <div v-else class="no-evidence">
    <p>— No evidence on file. All repositories classified. —</p>
  </div>
</template>

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

<style scoped>
.no-evidence {
  text-align: center;
  color: var(--ink-faded);
  font-family: 'IM Fell English', serif;
  font-style: italic;
  padding: 40px;
  letter-spacing: 2px;
}
</style>
