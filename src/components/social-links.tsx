import * as LucideIcons from "lucide-react"
import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface SocialLinksProps {
  socialLinks: SocialLink[]
}


type IconComponentType = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className="flex justify-center gap-2 sm:gap-3 my-2 sm:my-3">
      {socialLinks.map((link, index) => {
 
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons] as IconComponentType | undefined

        return (
          <a
            key={index}
            href={link.url}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />}
          </a>
        )
      })}
    </div>
  )
}
