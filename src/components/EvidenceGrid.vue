<template>
  <div class="evidence-header">
    <span>📁 &nbsp; Evidence Locker — Repositories</span>
    <span class="evidence-count"> Showing top {{ props.repos.length }} most wanted files</span>
  </div>
  <div class="evidence-grid">
    <a
      :href="repo.html_url"
      target="_blank"
      rel="noopener noreferrer"
      class="evidence-card"
      v-for="(repo, index) in props.repos"
      :key="repo.id"
    >
      <div class="flex flex-col gap-2">
        <span class="evidence-number">evidence #{{ String(index + 1).padStart(3, '0') }}</span>
        <span class="evidence-name">{{ repo.name }}</span>
        <span class="evidence-des">{{
          repo.description ?? 'No description. Evidence sealed.'
        }}</span>
      </div>
      <div class="flex gap-3 flex-wrap items-center">
        <span v-if="repo.language" class="evidence-lang">{{ repo.language }}</span>
        <span v-else class="evidence-lang evidence-lang--unknown">Classified</span>
        <span class="evidence-star"> ⭐ {{ repo.stargazers_count }} witnesses </span>
        <span class="evidence-weapon">{{ getWeapon(repo.language) }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useInvestigator } from '@/composables/useInvestigator'
import type { GitHubRepo } from '@/types/github'

const props = defineProps<{
  repos: GitHubRepo[]
}>()
const { getWeapon } = useInvestigator()
</script>

<style scoped>
.evidence-header {
  background: var(--ink);
  color: var(--paper);
  padding: 12px 28px;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
  margin-bottom: 0;
}

.evidence-count {
  background: var(--red);
  color: var(--paper);
  padding: 2px 10px;
  font-size: 12px;
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 0;
}

.evidence-card {
  background: var(--paper);
  padding: 18px 20px;
  border: 1px solid var(--paper-shadow);
  border-top: none;
  position: relative;
  transition: background 0.15s;
  cursor: pointer;
}

.evidence-card:hover {
  background: var(--paper-dark);
}

.evidence-number {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ink-faded);
}

.evidence-name {
  font-size: 16px;
  color: var(--ink);
  font-weight: bold;
  line-height: 1.2;
  word-break: break-all;
}

.evidence-des {
  font-size: 12px;
  color: var(--ink-faded);
  font-style: italic;
  font-family: 'IM Fell English', serif;
  line-height: 1.5;
  min-height: 36px;
}

.evidence-lang {
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--red);
  border: 1px solid var(--red);
  padding: 2px 8px;
}

.evidence-lang--unknown {
  color: var(--red);
  font-style: italic;
  opacity: 0.7;
}

.evidence-weapon {
  font-size: 12px;
  color: var(--ink-faded);
  font-style: italic;
  font-family: 'IM Fell English', serif;
  width: 100%;
  padding: 10px;
  border-top: 1px dashed var(--paper-shadow);
}
</style>
