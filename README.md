# 🔍 The GitHub Investigator

> *"When you have eliminated the impossible, whatever remains, however improbable, must be a GitHub profile."*

Every developer leaves a trace. Public repositories. Follower counts. A suspicious commit at 3am.
The GitHub Investigator finds them all.

🕵️ **[Open the Case Files]()** 

---

## The Investigation

Submit a GitHub username. Receive a full classified dossier:

- **Suspect Dossier** — identity confirmed, case number assigned, threat level classified
- **Evidence Locker** — top 6 repositories examined, weapons of choice profiled
- **Case Archive** — cork board of all previously investigated suspects
- **Unsolved Cases** — even Watson couldn't find this page

## Intelligence Sources

- [Vue 3](https://vuejs.org/) + Composition API — the informant
- [TypeScript](https://www.typescriptlang.org/) — keeping the evidence typed
- [Vite](https://vitejs.dev/) — fast getaway vehicle
- [Pinia](https://pinia.vuejs.org/) — the filing cabinet (with memory)
- [Vue Router](https://router.vuejs.org/) — navigating the crime scene
- [Tailwind CSS v4](https://tailwindcss.com/) — disguise kit
- [GitHub REST API](https://docs.github.com/en/rest) — the informant's informant

## Begin the Investigation

```bash
npm install
npm run dev
```

### Field Operations

```bash
npm run build       # Prepare for deployment
npm run preview     # Rehearse the operation
npm run lint        # Clean up the evidence
npm run format      # Press the suit
```

## Case File Structure

```
src/
├── assets/          # Dossier paper, ink colors, typewriter fonts
├── components/      # AppHeader, ProfileCard, EvidenceGrid, SearchBar, SuspectCard
├── composables/     # useGitHub (field agent), useInvestigator (analyst)
├── pages/           # HomePage, DossierPage, ArchivePage, NotFoundPage
├── router/          # Case routing
├── stores/          # Pinia — persistent case archive
└── types/           # Typed evidence
```

## Classified Notes

- Operates on the public GitHub API — unauthenticated, 60 requests/hour
- The case archive survives page reloads via `localStorage`
- Chuck Norris is consulted on all 404 incidents
