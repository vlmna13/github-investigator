<template>
  <div class="page">
    <div class="not-found-card">
      <div class="tape"></div>
      <div class="stamp">not found</div>
      <p class="case-no">Case No. ERROR-404 · Status: Unsolved · Classification: Unknown</p>
      <h1>The suspect has vanished, Watson.</h1>
      <p class="not-found-sub">
        "This page does not exist, or has been classified beyond our clearance level. Even the best
        detective cannot investigate what isn't there."
      </p>
      <div class="chuck-section">
        <p class="chuck-label">— Consulting a higher authority —</p>
        <img src="https://api.chucknorris.io/img/avatar/chuck-norris.png" alt="Chuck Norris" />
        <p class="chuck-joke">{{ isLoading ? 'Consulting Chuck Norris...' : joke }}</p>
        <button class="chuck-btn" @click="onFetchJoke">🥋 Ask Chuck Norris</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface ChuckJoke {
  value: string
}

const joke = ref('')
const isLoading = ref(false)
const onFetchJoke = async () => {
  isLoading.value = true
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    if (!response.ok) {
      joke.value = "Chuck Norris doesn't have errors. Errors have Chuck Norris."
      return
    }
    const data:ChuckJoke = await response.json()
    joke.value = data.value
  } catch (error) {
    console.error('Failed to fetch joke:', error)
    joke.value = "Chuck Norris doesn't have errors. Errors have Chuck Norris."
  } finally {
    isLoading.value = false
  }
}

onMounted(() => onFetchJoke())
</script>
<style scoped>
.page {
  max-width: 640px;
  width: 100%;
  text-align: center;
}

.not-found-card {
  background: var(--paper);
  padding: 50px 40px 40px;
  position: relative;
  box-shadow:
    6px 6px 0 var(--paper-shadow),
    14px 14px 0 rgba(0, 0, 0, 0.35);
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 27px,
    rgba(44, 24, 16, 0.055) 27px,
    rgba(44, 24, 16, 0.055) 28px
  );
  margin-bottom: 24px;
}

.tape {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 76px;
  height: 20px;
  background: rgba(255, 230, 100, 0.55);
  border-left: 1px solid rgba(190, 155, 40, 0.3);
  border-right: 1px solid rgba(190, 155, 40, 0.3);
}

.stamp {
  display: inline-block;
  border: 5px solid #777;
  color: #777;
  padding: 10px 28px;
  font-size: 36px;
  letter-spacing: 6px;
  text-transform: uppercase;
  transform: rotate(-8deg);
  margin-bottom: 24px;
  box-shadow: inset 0 0 0 2px #777;
  line-height: 1;
}

.case-no {
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--ink-faded);
  text-transform: uppercase;
  border-bottom: 1px dashed var(--paper-shadow);
  padding-bottom: 12px;
  margin-bottom: 20px;
}

h1 {
  font-family: 'IM Fell English', serif;
  font-size: 22px;
  color: var(--ink);
  margin-bottom: 10px;
}

.not-found-sub {
  font-family: 'IM Fell English', serif;
  font-style: italic;
  color: var(--ink-faded);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 28px;
}

.chuck-section {
  border-top: 1px dashed var(--paper-shadow);
  padding-top: 24px;
  margin-top: 4px;
}

.chuck-label {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ink-faded);
  margin-bottom: 16px;
}

img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid var(--ink);
  object-fit: cover;
  margin: 0 auto 12px;
  display: block;
  filter: grayscale(30%);
  box-shadow: 3px 3px 0 var(--ink-faded);
}

.chuck-btn {
  margin-top: 20px;
  background: var(--red);
  color: var(--paper);
  border: none;
  cursor: pointer;
  padding: 11px 24px;
  font-family: 'Special Elite', cursive;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 #5a0f0f;
  transition: all 0.12s;
}

.chuck-btn:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 #5a0f0f;
}

.chuck-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #5a0f0f;
}
</style>
