export interface ProjectGalleryImage {
    url: string
    caption?: string
  }
  
  export interface RelatedProject {
    slug: string
    title: string
    category: string
    image: string
  }
  
  export interface Project {
    id: number
    slug: string
    title: string
    category: string
    shortDescription: string
    description: string[]
    features: string[]
    technologies: string[]
    coverImage: string
    thumbnailImage: string
    gallery?: ProjectGalleryImage[]
    client?: string
    timeline: string
    role: string
    liveUrl?: string
    githubUrl?: string
    relatedProjects?: RelatedProject[]
  }
  
  const projects: Project[] = [
    {
      id: 1,
      slug: "filler1",
      title: "filler",
      category: "filler",
      shortDescription: "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
      description: [
        "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
        "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
        "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
      ],
      features: [
        "filler filler filler filler filler filler filler filler filler filler",
        "filler filler filler filler filler filler filler filler filler filler",
        "filler filler filler filler filler filler filler filler filler filler",
        "filler filler filler filler filler filler filler filler filler filler",
        "filler filler filler filler filler filler filler filler filler filler",
        "filler filler filler filler filler filler filler filler filler filler",
      ],
      technologies: ["filler", "filler", "filler", "filler", "filler", "filler", "filler"],
      coverImage:"/favicon.ico",
      thumbnailImage:"/favicon.ico",
      gallery: [
        { url: "/favicon.ico", caption: "filler" },
        { url: "/favicon.ico", caption: "filler" },
        { url: "/favicon.ico", caption: "filler" },
        { url: "/favicon.ico", caption: "filler" },
      ],
      timeline: "filler",
      role: "filler",
      liveUrl: "filler",
      githubUrl: "filler",
      relatedProjects: [
        {
          slug: "filler2",
          title: "filler",
          category: "filler",
          image: "/favicon.ico",
        },
        {
          slug: "filler3",
          title: "filler",
          category: "filler",
          image: "/favicon.ico",
        },
      ],
    },
    {
        id: 2,
        slug: "filler2",
        title: "filler",
        category: "filler",
        shortDescription: "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
        description: [
            "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
        ],
        features: [
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
        ],
        technologies: ["filler", "filler", "filler", "filler", "filler", "filler", "filler"],
        coverImage:"/favicon.ico",
        thumbnailImage:"/favicon.ico",
        gallery: [
            { url: "/favicon.ico", caption: "filler" },
            { url: "/favicon.ico", caption: "filler" },
            { url: "/favicon.ico", caption: "filler" },
            { url: "/favicon.ico", caption: "filler" },
        ],
        timeline: "filler",
        role: "filler",
        liveUrl: "filler",
        githubUrl: "filler",
        relatedProjects: [
            {
            slug: "filler1",
            title: "filler",
            category: "filler",
            image: "/favicon.ico",
            },
            {
            slug: "filler3",
            title: "filler",
            category: "filler",
            image: "/favicon.ico",
            },
        ],
      },
      {
        id: 3,
        slug: "filler3",
        title: "filler",
        category: "filler",
        shortDescription: "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
        description: [
            "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
        ],
        features: [
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
            "filler filler filler filler filler filler filler filler filler filler",
        ],
        technologies: ["filler", "filler", "filler", "filler", "filler", "filler", "filler"],
        coverImage:"/favicon.ico",
        thumbnailImage:"/favicon.ico",
        gallery: [
            { url: "/favicon.ico", caption: "filler" },
            { url: "/favicon.ico", caption: "filler" },
            { url: "/favicon.ico", caption: "filler" },
            { url: "/favicon.ico", caption: "filler" },
        ],
        timeline: "filler",
        role: "filler",
        liveUrl: "filler",
        githubUrl: "filler",
        relatedProjects: [
            {
            slug: "filler1",
            title: "filler",
            category: "filler",
            image: "/favicon.ico",
            },
            {
            slug: "filler2",
            title: "filler",
            category: "filler",
            image: "/favicon.ico",
            },
        ],
        },
        {
            id: 4,
            slug: "filler4",
            title: "filler",
            category: "filler",
            shortDescription: "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
            description: [
                "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
                "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
                "filler filler filler filler filler filler filler filler filler filler filler  filler filler filler filler filler",
            ],
            features: [
                "filler filler filler filler filler filler filler filler filler filler",
                "filler filler filler filler filler filler filler filler filler filler",
                "filler filler filler filler filler filler filler filler filler filler",
                "filler filler filler filler filler filler filler filler filler filler",
                "filler filler filler filler filler filler filler filler filler filler",
                "filler filler filler filler filler filler filler filler filler filler",
            ],
            technologies: ["filler", "filler", "filler", "filler", "filler", "filler", "filler"],
            coverImage:"/favicon.ico",
            thumbnailImage:"/favicon.ico",
            gallery: [
                { url: "/favicon.ico", caption: "filler" },
                { url: "/favicon.ico", caption: "filler" },
                { url: "/favicon.ico", caption: "filler" },
                { url: "/favicon.ico", caption: "filler" },
            ],
            timeline: "filler",
            role: "filler",
            liveUrl: "filler",
            githubUrl: "filler",
            relatedProjects: [
                {
                slug: "filler1",
                title: "filler",
                category: "filler",
                image: "/favicon.ico",
                },
                {
                slug: "filler3",
                title: "filler",
                category: "filler",
                image: "/favicon.ico",
                },
            ],
        },
  ]
  
  export { projects }

  export function getAllProjects(): Project[] {
    return projects
  }
  
  export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug)
  }
  
  export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
    const currentProject = getProjectBySlug(currentSlug)
    if (!currentProject || !currentProject.relatedProjects) {
      return projects
        .filter((project) => project.slug !== currentSlug)
        .slice(0, limit)
        .map((project) => ({
          slug: project.slug,
          title: project.title,
          category: project.category,
          image: project.thumbnailImage,
        }))
    }
  
    return currentProject.relatedProjects.slice(0, limit)
  }
  