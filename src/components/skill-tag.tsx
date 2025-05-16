import type { ReactNode } from "react"

interface SkillTagProps {
  children: ReactNode
  type?: "credential" | "technical"
}

export function SkillTag({ children, type = "credential" }: SkillTagProps) {
  if (type === "technical") {
    return <div className="px-2 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-400">{children}</div>
  }
  
  // Default credential styling
  return (
    <span className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-800 text-xs rounded-md border border-zinc-700">
      {children}
    </span>
  )
}