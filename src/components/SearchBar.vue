<template>
  <div class="search-section">
    <p class="search-label">— Submit a suspect for investigation —</p>
    <form @submit.prevent="onSearch" class="flex gap-4">
      <div class="grow relative">
        <span class="search-icon">🔎</span>
        <input
          v-model="username"
          id="search-input"
          type="text"
          placeholder="Enter GitHub username..."
        />
      </div>
      <button type="submit">Investigate</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useInvestigatorStore } from '@/stores/investigator'

const router = useRouter()
const store = useInvestigatorStore()
const username = ref('')
const onSearch = async () => {
  if (!username.value.trim()) return
  await store.search(username.value.trim())
  if (!store.error) {
    router.push({ name: 'dossier', params: { username: username.value.trim() } })
  }
}
</script>
<style scoped>
.search-section {
  max-width: 560px;
  margin: 0 auto 44px;
  padding: 0 20px;
}

.search-label {
  color: #7a6535;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 12px;
}

#search-input {
  width: 100%;
  background: var(--paper);
  border: none;
  border-bottom: 3px solid var(--ink);
  padding: 13px 16px 13px 42px;
  font-family: 'Special Elite', cursive;
  font-size: 17px;
  color: var(--ink);
  outline: none;
  box-shadow: 4px 4px 0 var(--paper-shadow);
}

#search-input::placeholder {
  color: var(--ink-faded);
  opacity: 0.45;
}

.search-icon {
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;

  opacity: 0.45;
}

button {
  background: var(--red);
  color: var(--paper);
  border: none;
  cursor: pointer;
  padding: 13px 22px;
  font-family: 'Special Elite', cursive;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 #5a0f0f;
  transition: all 0.12s;
  white-space: nowrap;
}

button:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 #5a0f0f;
}
button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #5a0f0f;
}
</style>
