"use client"
import React, { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { SkillTag } from "@/components/skill-tag"
import { getProjectBySlug } from "@/lib/data"
import { notFound } from "next/navigation"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { useEffect } from "react"



export default function ProjectPage({ params}: {params: Promise<{ slug: string }> & { slug: string }}) {
  const unwrappedParams = use(params) as { slug: string };
  const { slug } = unwrappedParams;
  const project = getProjectBySlug(slug);

  const [selectedImage, setSelectedImage] = useState<{ url: string; caption?: string } | null>(null)

  if (!project) {
    notFound()
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [slug]) 

  return (
    <main className="min-h-screen bg-black text-white">
     
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        <AnimatedSection animation="fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm text-zinc-400 hover:text-white mb-4 sm:mb-6 transition-colors"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Back to Portfolio
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatedSection animation="fade-up" className="lg:col-span-3">
            <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 sm:h-64 md:h-80 w-full">
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-cyan-400 mb-1 sm:mb-2">{project.category}</div>
                  <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">{project.title}</h1>
                  <p className="text-sm text-zinc-400 mt-1 sm:mt-2 max-w-2xl">{project.shortDescription}</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Project Overview</h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-300">
                    {project.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <AnimatedSection animation="fade-up" delay={200}>
                    <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-zinc-300">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={300}>
                    <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech, index) => (
                        <SkillTag key={index}>{tech}</SkillTag>
                      ))}
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={400}>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                      {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xs sm:text-sm"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            View Live Project
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            View Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>

            {project.gallery && project.gallery.length > 0 && (
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {project.gallery.map((image, index) => (
                        <AnimatedSection key={index} animation="zoom-in" delay={100 * (index + 1)}>
                          <div className="relative h-50 sm:h-80 rounded-lg overflow-hidden border border-zinc-800" onClick={() => setSelectedImage(image)}>
                            <Image
                              src={image.url || "/placeholder.svg"}
                              alt={image.caption || `Gallery image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}
          </div>

          {/* Project Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <AnimatedSection animation="slide-left" delay={100}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Project Details</h2>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400">Client</h3>
                      <p className="text-sm sm:text-base">{project.client || "Personal Project"}</p>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400">Timeline</h3>
                      <p className="text-sm sm:text-base">{project.timeline}</p>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400">Role</h3>
                      <p className="text-sm sm:text-base">{project.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Next Projects */}
            <AnimatedSection animation="slide-left" delay={200}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">More Projects</h2>
                  <div className="space-y-3 sm:space-y-4">
                    {project.relatedProjects &&
                      project.relatedProjects.map((related, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                          <Link href={`/projects/${related.slug}`} className="block group">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden flex-shrink-0">
                                <Image
                                  src={related.image || "/placeholder.svg"}
                                  alt={related.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="text-sm sm:text-base font-medium group-hover:text-cyan-400 transition-colors">
                                  {related.title}
                                </h3>
                                <p className="text-xs text-zinc-400">{related.category}</p>
                              </div>
                            </div>
                          </Link>
                        </AnimatedSection>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Dominic Capaci. All rights reserved.</p>
        </AnimatedSection>
      </div>
      <EnhancedScrollIndicator />
      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-6xl w-full p-0 bg-zinc-900/95 border-zinc-800">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-zinc-800/80 p-2 text-white hover:bg-zinc-700 transition-colors">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {selectedImage && (
            <div className="relative w-full h-[90vh] flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.caption || "Project image"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              
              {selectedImage.caption && (
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="bg-zinc-900/80 text-white py-2 px-4 mx-auto inline-block rounded-md text-sm">
                    {selectedImage.caption}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
