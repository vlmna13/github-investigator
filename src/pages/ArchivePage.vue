<template>
  <header class="text-center mb-12">
    <div class="flex mb-10 justify-between items-center">
      <RouterLink to="/" class="back-link">← New Investigation</RouterLink>
      <p class="back-link">🗂 {{ store.history.length }} cases on file</p>
    </div>
    <p class="archive-label">Classified Records</p>
    <h1>📋 Case Archive</h1>
    <p class="archive-sub">"Every suspect leaves a trace, Watson."</p>
    <div class="line">
      <span>✦</span>
    </div>
  </header>
  <div class="cork-board">
    <h2>— Most Wanted Board —</h2>
    <div class="flex flex-wrap gap-8 justify-start pt-2.5">
      <SuspectCard v-for="entry in store.history" :key="entry.user.login" :entry="entry" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SuspectCard from '@/components/SuspectCard.vue'
import { useInvestigatorStore } from '@/stores/investigator'

const store = useInvestigatorStore()
</script>
<style scoped>
.archive-label {
  color: #7a6535;
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

h1 {
  font-family: 'IM Fell English', serif;
  font-size: clamp(26px, 4vw, 48px);
  color: #f0e2c0;
  margin-bottom: 10px;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.9);
}

h2 {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(0, 0, 0, 0.3);
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  white-space: nowrap;
}

.archive-sub {
  font-family: 'IM Fell English', serif;
  font-style: italic;
  color: #7a6535;
  font-size: 14px;
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

.cork-board {
  background-color: var(--cork);
  background-image:
    radial-gradient(ellipse at 20% 30%, rgba(180, 120, 40, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(100, 60, 10, 0.3) 0%, transparent 40%),
    url('@/assets/cork.png');
  background-size: auto, auto, 200px;
  border: 8px solid #6b4c1a;
  border-radius: 4px;
  box-shadow:
    inset 0 0 40px rgba(0, 0, 0, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.6);
  padding: 40px 36px;
  min-height: 400px;
  position: relative;
}
</style>
