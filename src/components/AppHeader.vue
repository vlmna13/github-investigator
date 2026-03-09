<template>
  <header class="container text-center py-10">
    <RouterLink to="/archive" class="back-link">🗂 Case Archive</RouterLink>

    <p class="header-address">221B Baker Street, London · Est. 1887</p>
    <h1 class="header-title">🔍 The GitHub Investigator</h1>
    <p class="header-sub">"Elementary, my dear developer."</p>
    <div class="line">
      <span>✦</span>
    </div>
  </header>
</template>
<script setup lang="ts"></script>

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
</style>
