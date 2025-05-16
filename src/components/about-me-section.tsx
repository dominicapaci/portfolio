import { User, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getAboutInfo } from "@/lib/data"

export function AboutMeSection() {
  const aboutInfo = getAboutInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-6">
          {/* About Me */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center">
              <User className="w-5 h-5 mr-2 text-cyan-400" />
              About Me
            </h3>
            <p className="text-sm sm:text-base text-zinc-300">{aboutInfo.bio}</p>
          </div>

          {/* Professional Focus */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-zinc-400 flex items-center">
              <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
              Professional Focus
            </h3>
            <div className="space-y-2">
              {aboutInfo.focus.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
