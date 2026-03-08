<template>
  <ProfileCard v-if="store.currentUser" :user="store.currentUser" />
  <EvidenceGrid v-if="store.currentRepos" :repos="store.currentRepos" />
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
