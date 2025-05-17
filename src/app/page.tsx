"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { BriefcaseIcon, CodeIcon, GlobeIcon } from "lucide-react"
import { PortfolioHeader } from "@/components/portfolio-header"
import { useIsMobile } from "@/hooks/use-mobile"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { EnhancedProfileMobile } from "@/components/enhanced-profile-mobile"
import { AboutMeSection } from "@/components/about-me-section"
import { Card, CardContent } from "@/components/ui/card"
import { getExperienceInfo, getTechnicalSkillsInfo, getAllProjects } from "@/lib/data"
import { ExperienceCard } from "@/components/experience-card"
import { CredentialsSection } from "@/components/credentials-section"
import { SkillTag } from "@/components/skill-tag"
import { ProjectCard } from "@/components/project-card"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"

export default function Home() {

  const isMobile = useIsMobile()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()
  const projects = getAllProjects()
  const [profileHeight, setProfileHeight] = useState<number | null>(null)
  const projectsSectionRef = useRef<HTMLDivElement>(null)
  const profileContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMobile && projectsSectionRef.current && profileContainerRef.current) {
      const updateHeight = () => {
        const projectsRect = projectsSectionRef.current?.getBoundingClientRect()
        const profileRect = profileContainerRef.current?.getBoundingClientRect()

        if (projectsRect && profileRect) {
          const projectsBottom = projectsRect.bottom + window.scrollY
          const viewportHeight = window.innerHeight
          const headerHeight = 64 
          const maxProfileHeight = projectsBottom - headerHeight - 24 
          setProfileHeight(maxProfileHeight)
        }
      }

      updateHeight()

      window.addEventListener("resize", updateHeight)
      window.addEventListener("scroll", updateHeight)

      return () => {
        window.removeEventListener("resize", updateHeight)
        window.removeEventListener("scroll", updateHeight)
      }
    }
  }, [isMobile])

  return (
    <main className="min-h-screen bg-black text-white">
      <PortfolioHeader />
      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          <div className={`${isMobile ? "w-full" : "md:col-span-3 lg:col-span-3"}`} ref={profileContainerRef}>
            <div
              className={isMobile ? "w-full" : "md:sticky md:top-20 w-full"}
              style={!isMobile && profileHeight ? { maxHeight: `${profileHeight}px`, overflowY: "auto" } : {}}
            >
              <AnimatedSection animation="slide-right">
                {isMobile ? <EnhancedProfileMobile /> : <EnhancedProfile />}
              </AnimatedSection>
            </div>
          </div>
          <div className={`${isMobile ? "" : "md:col-span-9 lg:col-span-9"} space-y-4 sm:space-y-6`}>
          {!isMobile && (
              <AnimatedSection animation="fade-up" id="about" className="scroll-mt-24">
                <AboutMeSection />
              </AnimatedSection>
            )}
            <AnimatedSection animation="fade-up" id="experience" className="scroll-mt-24">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-cyan-400" />
                    <h3 className="text-lg font-medium">Experience</h3>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" id="credentials" className="scroll-mt-24">
              <CredentialsSection />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" id="skills" className="scroll-mt-24">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <CodeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                    <h3 className="text-lg font-medium">Technical Skills</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <AnimatedSection animation="slide-right" delay={100}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Design</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.design.map((skill, index) => (
                            <SkillTag type="credential" key={index}>{skill}</SkillTag>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={200}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Development</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.development.map((skill, index) => (
                            <SkillTag type="credential" key={index}>{skill}</SkillTag>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={300}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">UX Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.uxMethods.map((skill, index) => (
                            <SkillTag type="credential" key={index}>{skill}</SkillTag>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={400}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Soft Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.softSkills.map((skill, index) => (
                            <SkillTag type="credential" key={index}>{skill}</SkillTag>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" id="projects" className="scroll-mt-24" ref={projectsSectionRef}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                      <h3 className="text-lg font-medium">Recent Projects</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {projects.map((project, index) => (
                      <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.thumbnailImage}
                          slug={project.slug}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection
              animation="fade-in"
              delay={500}
              className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
            >
              <p>© {new Date().getFullYear()} Dominic Capaci. All rights reserved.</p>
            </AnimatedSection>


          </div>
        </div>
      </div>

      <EnhancedScrollIndicator />
    </main>
  );
}
