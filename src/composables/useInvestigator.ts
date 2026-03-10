import type { GitHubUser, GitHubRepo } from '@/types/github'

export const useInvestigator = () => {
  const getClassification = (followers: number): string => {
    if (followers >= 200) return 'Level 4'
    if (followers >= 100 && followers < 200) return 'Level 3'
    if (followers >= 50 && followers < 100) return 'Level 2'
    return 'Level 1'
  }

  const getCaseNumber = (id: number): string => {
    return `GH-${id}`
  }

  const getWeapon = (language: string | null): string => {
    const weapons: Record<string, string> = {
      JavaScript: '"Chaotic Neutral. Works at 3am, nobody knows why."',
      TypeScript: '"Reformed criminal. Now plays by the rules."',
      Python: '"The Serpent Handler. Suspiciously readable."',
      Rust: '"The Masochist. Fights the compiler for sport."',
      C: '"The Cold-Blooded Veteran. No mercy, no garbage collector."',
      'C++': '"The Chaotic Perfectionist. Too much power for one person."',
      Go: '"The Minimalist. Says less, does more."',
      Ruby: '"The Romantic. Makes it beautiful or dies trying."',
      PHP: '"The Survivor. Still here despite everything."',
      Java: '"The Bureaucrat. 47 files to print Hello World."',
      Swift: '"The Apple Cultist. Shiny but locked in."',
      Kotlin: '"The Pragmatist. Java, but make it tolerable."',
      Shell: '"The Wizard. One-liners that do terrifying things."',
      HTML: '"The Architect. Technically not a programmer (shhh)."',
      CSS: '"The Artist. Still centering that div."',
      Dart: '"The Flutter Fanatic. Everything is a widget."',
    }
    return weapons[language ?? ''] ?? '"No language detected. The perfect crime."'
  }

  const getBadges = (user: GitHubUser): string[] => {
    const badges: string[] = []

    if (user.followers === 0) badges.push('Works Alone')
    else if (user.followers < 5) badges.push('Flies Under the Radar')
    else if (user.followers >= 5 && user.followers <= 50) badges.push('Known to Locals')
    else if (user.followers > 50 && user.followers <= 100) badges.push('Person of Interest')
    else if (user.followers > 100 && user.followers <= 200) badges.push('Has Accomplices')
    else badges.push('Highly Dangerous')

    if (user.public_repos === 0) badges.push('All Evidence Classified')
    else if (user.public_repos <= 10) badges.push('Active Offender')
    else if (user.public_repos > 10 && user.public_repos <= 50) badges.push('Prolific Suspect')
    else badges.push('Serial Committer')

    if (!user.bio) badges.push('Identity Concealed')
    if (!user.location) badges.push('Location Unknown')
    if (user.following > user.followers) badges.push('More Curious Than Famous')

    const year = new Date(user.created_at).getFullYear()
    const age = new Date().getFullYear() - year
    if (age >= 10) badges.push('Underground Veteran')
    else if (age >= 5 && age < 10) badges.push('Seasoned Operative')
    else if (age <= 1) badges.push('Fresh Recruit')
    return badges
  }

  const getLanguageProfile = (repos: GitHubRepo[]): { languages: string[]; verdict: string } => {
    const languages = [...new Set(repos.map((r) => r.language).filter(Boolean) as string[])]

    let verdict = ''
    if (languages.length === 0) verdict = 'No evidence of coding activity'
    else if (languages.length === 1) verdict = 'One-trick pony. Loyal to the cause.'
    else if (languages.length === 2) verdict = 'Bilingual operative.'
    else if (languages.length === 3) verdict = 'Dangerous versatility detected.'
    else if (languages.length >= 5) verdict = 'Polyglot. Do not trust.'
    else verdict = 'Multi-skilled suspect.'

    return { languages, verdict }
  }

  return {
    getClassification,
    getCaseNumber,
    getWeapon,
    getBadges,
    getLanguageProfile,
  }
}
