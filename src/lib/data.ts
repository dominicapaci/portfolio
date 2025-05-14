import portfolioData from "@/data/portfolio-data.json"

export const data = portfolioData

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
  