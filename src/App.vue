<template>
  <AppHeader :page="currentPage" />
  <main class="container">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'

const route = useRoute()

const currentPage = computed(() => {
  if (route.name === 'dossier') return 'dossier'
  if (route.name === 'archive') return 'archive'
  if (route.name === 'not-found') return 'not-found'
  return 'home'
})
</script>

<style scoped></style>
