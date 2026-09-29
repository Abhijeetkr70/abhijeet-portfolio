import { projects as portfolioProjects, skillGroups, siteConfig } from '../../lib/data'

export interface Project {
  title: string
  description: string
  url: string
}

export interface Skill {
  name: string
  category: string
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    return portfolioProjects.map((p) => ({
      title: p.name,
      description: `${p.tagline} (Stack: ${p.stack.slice(0, 4).join(', ')})`,
      url: p.live || p.github,
    }))
  } catch {
    return [
      {
        title: 'SmartNotes Application',
        description: 'Full-stack note management with Clerk auth, Express, and MongoDB',
        url: 'https://smartnotes-application.vercel.app/',
      },
      {
        title: 'Frontend Utility Suite',
        description: 'Vanilla-JS SPA bundling Task Manager, Weather Dashboard, and Quiz Platform',
        url: 'https://frontend-utility-suite.vercel.app/',
      },
    ]
  }
}

export async function fetchSkills(): Promise<Skill[]> {
  try {
    return skillGroups.flatMap((group) =>
      group.skills.map((skillName) => ({
        name: skillName,
        category: group.label,
      }))
    )
  } catch {
    return [
      { name: 'React.js', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'TypeScript', category: 'Languages' },
    ]
  }
}

export function getContactInfo() {
  return {
    name: siteConfig.name,
    email: siteConfig.email,
    linkedin: siteConfig.linkedin,
    github: siteConfig.github,
    portfolio: siteConfig.url,
    location: siteConfig.location.current,
  }
}