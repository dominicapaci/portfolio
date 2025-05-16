"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { PortfolioHeader } from "@/components/portfolio-header"
import { useIsMobile } from "@/hooks/use-mobile"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { EnhancedProfileMobile } from "@/components/enhanced-profile-mobile"
import { AboutMeSection } from "@/components/about-me-section"

export default function Home() {

  const isMobile = useIsMobile()
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
          </div>
        </div>
      </div>
    </main>
  );
}
