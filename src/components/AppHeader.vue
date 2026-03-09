<template>
  <header class="container text-center py-10">
    <div class="nav-links">
      <RouterLink v-if="page !== 'home'" to="/" class="back-link">← New Investigation</RouterLink>
      <RouterLink v-if="page !== 'archive'" to="/archive" class="back-link">
        🗂 {{ store.history.length > 0 ? `${store.history.length} Cases on File` : 'Case Archive' }}
      </RouterLink>
    </div>

    <p class="header-address">221B Baker Street, London · Est. 1887</p>
    <h1 class="header-title">{{ title }}</h1>
    <p class="header-sub">{{ quote }}</p>
    <div class="line">
      <span>✦</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useInvestigatorStore } from '@/stores/investigator'

const props = defineProps<{
  page?: 'home' | 'dossier' | 'archive'
}>()

const store = useInvestigatorStore()

const title = computed(() => {
  if (props.page === 'dossier') return '🔍 Case File'
  if (props.page === 'archive') return '📋 Case Archive'
  return '🔍 The GitHub Investigator'
})

const quote = computed(() => {
  if (props.page === 'dossier') return '"The game is afoot, Watson."'
  if (props.page === 'archive') return '"Every suspect leaves a trace, Watson."'
  return '"Elementary, my dear developer."'
})
</script>

<style scoped>
.header-address {
  color: #7a6535;
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-bottom: 10px;
}

.header-title {
  font-family: 'IM Fell English', serif;
  font-size: clamp(28px, 6vw, 62px);
  color: #f0e2c0;
  line-height: 1.05;
  text-shadow:
    0 2px 30px rgba(0, 0, 0, 0.9),
    0 0 80px rgba(160, 120, 40, 0.15);
}

.header-sub {
  font-family: 'IM Fell English', serif;
  font-style: italic;
  color: #7a6535;
  font-size: 15px;
  letter-spacing: 1px;
}

.line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  max-width: 420px;
  margin: 18px auto;
}

span {
  color: #7a6535;
  font-size: 16px;
}

.line::before,
.line::after {
  content: '';
  flex: 1;
  height: 1px;
  height: 1px;
  background: linear-gradient(to right, transparent, #7a6535, transparent);
}

.nav-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.back-link {
  color: #7a6535;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid #7a6535;
  padding: 6px 14px;
  transition: all 0.15s;
}

.back-link:hover {
  color: #f0e2c0;
  border-color: #f0e2c0;
}
</style>
