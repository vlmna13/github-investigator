<template>
  <RouterLink
    :to="`/investigator/${entry.user.login}`"
    class="suspect-card"
    :style="`transform: rotate(${rotation}deg)`"
  >
    <div class="pin">📌</div>
    <img :src="entry.user.avatar_url" :alt="entry.user.login" class="suspect-photo" />
    <div class="suspect-seal">
      <svg viewBox="0 0 110 110" width="100" height="100">
        <circle cx="55" cy="55" r="50" fill="none" stroke="#c0392b" stroke-width="2" />
        <circle
          cx="55"
          cy="55"
          r="44"
          fill="none"
          stroke="#c0392b"
          stroke-width="1"
          stroke-dasharray="3 3"
        />
        <defs>
          <path id="cp3" d="M 55,55 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text font-family="Special Elite" font-size="7.5" fill="#c0392b" letter-spacing="2.5">
          <textPath href="#cp3">GITHUB INVESTIGATOR · LONDON 1887 ·</textPath>
        </text>
      </svg>
      <div class="seal-inner">
        <span class="star">✦</span>
        <span class="verdict">{{ entry.verdict }}</span>
      </div>
    </div>
    <p class="suspect-name">{{ entry.user.name ?? 'Unknown' }}</p>
    <p class="suspect-login">{{ entry.user.login }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import type { HistoryEntry } from '@/types/github'
const { entry } = defineProps<{
  entry: HistoryEntry
}>()

const rotation = (Math.random() * 6 - 3).toFixed(1)
</script>

<style scoped>
.suspect-card {
  position: relative;
  width: 170px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s;
}
.pin {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  z-index: 5;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}

.suspect-photo {
  width: 170px;
  height: 170px;
  object-fit: cover;
  display: block;
  border: 3px solid var(--ink);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
}

.suspect-seal {
  position: absolute;
  bottom: 45px;
  right: -15px;
  transform: rotate(15deg);
  opacity: 0.85;
  background: rgba(244, 239, 228, 0.75);
  border-radius: 50%;
}

.seal-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #c0392b;
}

.star {
  font-size: 16px;
  display: block;
  line-height: 1;
}

.verdict {
  font-size: 7px;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.4;
  display: block;
  margin-top: 2px;
}

.suspect-name {
  background: var(--paper);
  padding: 6px 8px 5px;
  border-top: 2px solid var(--ink);
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--ink);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.suspect-login {
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--ink-faded);
  text-transform: uppercase;
  text-align: center;
  background: var(--paper-dark);
  padding: 3px 8px 5px;
}
</style>
