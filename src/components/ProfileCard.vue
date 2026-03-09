<template>
  <div class="dossier">
    <p class="folder-tab">Classified Dossier</p>
    <div class="profile-card paper-card">
      <div class="tape"></div>
      <div class="stamp">found</div>
      <p class="case-no">
        Case No. {{ getCaseNumber(props.user.id) }} · Opened:
        {{ new Date(props.user.created_at).getFullYear() }} · Status: Active · Classification:

        {{ getClassification(props.user.followers) }}
      </p>
      <div class="profile-layout">
        <a :href="props.user.html_url" target="_blank" rel="noopener noreferrer">
          <figure class="photo-frame">
            <img :src="props.user.avatar_url" :alt="props.user.login" />
            <figcaption class="photo-label">Suspect Photo</figcaption>
          </figure>
        </a>
        <div>
          <dl class="flex flex-col">
            <div class="field" v-for="field in fields" :key="field.label">
              <dt class="field-label">{{ field.label }}</dt>
              <dd class="field-value">{{ field.value }}</dd>
            </div>
          </dl>
          <blockquote v-if="props.user.bio" class="bio-block serif-italic">"{{ props.user.bio }}"</blockquote>
          <blockquote v-else class="bio-block bio-empty serif-italic">
            "No statement provided. Suspect remains silent."
          </blockquote>
          <div class="flex flex-wrap gap-2 mt-3.5">
            <span v-for="badge in getBadges(props.user)" :key="badge" class="badge">
              {{ badge }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubUser } from '@/types/github'
import { useInvestigator } from '@/composables/useInvestigator'
import { computed } from 'vue'

const { getCaseNumber, getClassification, getBadges } = useInvestigator()
const props = defineProps<{
  user: GitHubUser
}>()

const fields = computed(() => [
  { label: 'Alias (Username)', value: props.user.login },
  { label: 'Full Name', value: props.user.name ?? 'Unknown' },
  { label: 'Known Location', value: props.user.location ?? 'Whereabouts Unknown' },
  { label: 'Known Associates', value: `${props.user.followers} followers` },
  {
    label: 'Filed Evidence',
    value: `${props.user.public_repos} public repos· classified files undisclosed`,
  },
])
</script>
<style scoped>
.dossier {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 20px 80px;
  animation: dossierIn 0.5s ease;
}

.folder-tab {
  background: var(--folder);
  color: var(--paper);
  display: inline-block;
  padding: 7px 28px 9px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-left: 28px;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%);
}

.profile-card {
  padding: 34px 36px 30px;
  margin-bottom: 2px;
}

.stamp {
  position: absolute;
  top: 26px;
  right: 28px;
  border: 4px solid var(--red-stamp);
  color: var(--red-stamp);
  padding: 7px 12px;
  font-size: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  transform: rotate(14deg);
  opacity: 0.82;
  box-shadow: inset 0 0 0 2px var(--red-stamp);
  line-height: 1;
}


.profile-layout {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 26px;
}

.photo-label {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ink-faded);
  text-align: center;
  margin-top: 6px;
}

.photo-frame:hover img {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 5px 5px 0 var(--ink);
}

img {
  width: 138px;
  height: 138px;
  object-fit: cover;
  border: 3px solid var(--ink);
  box-shadow: 3px 3px 0 var(--ink-faded);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  display: block;
}


.field {
  display: grid;
  grid-template-columns: 160px 1fr;
  border-bottom: 1px dashed rgba(44, 24, 16, 0.15);
  padding: 7px 0;
  align-items: baseline;
}

.field-label {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ink-faded);
}

.bio-block {
  margin-top: 14px;
  margin-bottom: 14px;
  color: var(--ink-faded);
  font-size: 13px;
  line-height: 1.6;
  border-left: 2px solid var(--paper-shadow);
  padding-left: 12px;
}

.bio-empty {
  opacity: 0.45;
}


.badge {
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--red);
  border: 1px solid var(--red);
  padding: 3px 8px;
}

@media (max-width: 640px) {
  .dossier {
    padding: 0 12px 48px;
  }

  .profile-card {
    padding: 24px 20px 20px;
  }

  .profile-layout {
    grid-template-columns: 1fr;
  }

  .photo-frame {
    margin: 0 auto;
    width: fit-content;
  }

  img {
    width: 120px;
    height: 120px;
  }

  .field {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .field-label {
    margin-bottom: 1px;
  }
}
</style>
