<template>
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
h2 {
  color: rgba(0, 0, 0, 0.3);
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  white-space: nowrap;
  margin-bottom: 20px;
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
  padding: 20px 36px 40px;
  min-height: 400px;
  position: relative;
  text-align: center;
}
</style>
