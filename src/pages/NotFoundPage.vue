<template>
  <div class="page">
    <div class="not-found-card paper-card">
      <div class="tape"></div>
      <div class="stamp">not found</div>
      <p class="case-no">Case No. ERROR-404 · Status: Unsolved · Classification: Unknown</p>
      <h1>The suspect has vanished, Watson.</h1>
      <p class="not-found-sub serif-italic">
        "This page does not exist, or has been classified beyond our clearance level. Even the best
        detective cannot investigate what isn't there."
      </p>
      <div class="chuck-section">
        <p class="chuck-label">— Consulting a higher authority —</p>
        <img src="https://api.chucknorris.io/img/avatar/chuck-norris.png" alt="Chuck Norris" />
        <p class="chuck-joke">{{ isLoading ? 'Consulting Chuck Norris...' : joke }}</p>
        <button class="chuck-btn btn-red" :disabled="isLoading" @click="onFetchJoke">🥋 Ask Chuck Norris</button>
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
  margin: 0 auto;
  text-align: center;
}

.chuck-section {
  border-top: 1px dashed var(--paper-shadow);
  padding-top: 24px;
  margin-top: 4px;
}

.not-found-card {
  padding: 50px 40px 40px;
  margin-bottom: 24px;
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


h1 {
  font-family: 'IM Fell English', serif;
  font-size: 22px;
  color: var(--ink);
  margin-bottom: 10px;
}

.not-found-sub {
  color: var(--ink-faded);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 28px;
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
}
</style>
