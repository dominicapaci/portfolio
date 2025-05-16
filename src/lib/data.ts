import portfolioData from "@/data/portfolio-data.json"
import { projects, getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects"

export const data = portfolioData

export { projects, getAllProjects, getProjectBySlug, getRelatedProjects }

export function getNavItems() {
    return [
      { label: "About Me", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Credentials", href: "#credentials" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ]
  }

  export function getPersonalInfo() {
    return data.personal
  }
  
  export function getAboutInfo() {
    return data.about
  }

  export function getExperienceInfo() {
    return data.experience
  }

  export function getCredentialsInfo() {
    return data.credentials
  }

  export function getTechnicalSkillsInfo() {
    return data.technicalSkills
  }
  