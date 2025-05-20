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
      slug: "backstage",
      title: "Backstage Technologies",
      category: "Web App",
      shortDescription: "A ticketing platform that enables users to quickly sell, manage, and participate in concert ticket offers and giveaways.",
      description: [
        "Backstage Technologies is a ticketing platform designed to make buying, selling, and managing concert tickets fast and user-friendly.",
        "The platform supports thousands of monthly transactions and has generated approximately $450,000 in offers per month.",
        "Users can quickly sell tickets in under two minutes, participate in giveaways, and manage their purchases through an intuitive interface. Backstage emphasizes security, real-time analytics, and a seamless experience for both buyers and sellers.",

      ],
      features: [
        "Instant Cash ticket flow for rapid ticket sales and immediate offers",
        "Marketplace Listing and “Sell” landing page for flexible ticket management",
        "Integrated giveaway system to boost user engagement and platform growth",
        "User profile section to track purchased tickets, offers, and listings",
        "Real-time dashboards and analytics for transparent sales and user activity",
        "Responsive, high-fidelity UI built with React, TypeScript, and Tailwind CSS",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "GraphQL", "Figma"],
      coverImage:"/backstage-header.jpg",
      thumbnailImage:"/backstage-header.jpg",
      gallery: [
        { url: "/backstage-artist.png", caption: "Select Artist" },
        { url: "/backstage-details.png", caption: "Ticket Detail" },
        { url: "/backstage-header.jpg", caption: "Company Banner" },
        { url: "/backstage-offer.png", caption: "Backstage Offer" },
        { url: "/backstage-price-set.png", caption: "Set Market Place Listing" },
        { url: "/backstage-sell-header.png", caption: "Sell Page Header" },
        { url: "/backstage-tours.png", caption: "Active Tours" },
        { url: "/backstage-my-tickets.png", caption: "Ticket Manager" },
      ],
      client: "Backstage Technologies",
      timeline: "Sept 2024 - Feb 2025",
      role: "Software Engineer (Full-Stack) / UI Designer",
      liveUrl: "https://joinbackstage.com/",
      relatedProjects: [
        {
          slug: "puzzlit",
          title: "Puzzlit",
          category: "Mobile App",
          image: "/puzzlit-thumbnail.png",
        },
        {
          slug: "nightspot",
          title: "Nightspot Networks",
          category: "Mobile App",
          image: "/nightspot-banner2.png",
        },
      ],
    },
    {
        id: 2,
        slug: "puzzlit",
        title: "Puzzlit",
        category: "Mobile App",
        shortDescription: "A social daily puzzle game where users can solve new challenges, post their scores to a shared feed, and interact with other players’ achievements through likes and comments.",
        description: [
            "Puzzlit is a social daily puzzle game that brings users together through interactive challenges and a vibrant community feed.",
            "The app features a robust avatar customization system, allowing players to express themselves with layered SVG avatars, and a virtual shop where users can purchase unique upgrades—features that have driven strong early engagement and monetization.",
            "Daily puzzles, real-time leaderboards, and interactive posts keep the experience fresh and competitive, while optimized asset management ensures smooth performance across devices.",
        ],
        features: [
            "Dynamic social feed for posting scores, sharing achievements, and engaging with other players",
            "Layered SVG avatar customization, enabling deep personalization and real-time updates",
            "Virtual shop with secure purchases, inventory management, and efficient asset delivery",
            "Daily mini-puzzles and real-time leaderboards to foster friendly competition",
            "Environment-specific asset management handled in Firebase Storage for fast, reliable access to user and shop assets",
        ],
        technologies: ["React Native", "Redux Toolkit", "Firebase", "TypeScript", "Python", "Framer"],
        coverImage:"/puzzlit-logo.png",
        thumbnailImage:"/puzzlit-logo.png",
        gallery: [
            { url: "/puzzlit-home.png", caption: "Home Screen" },
            { url: "/puzzlit-leaderboard.png", caption: "Leaderboard" },
            { url: "/puzzlit-profile.jpg", caption: "Profile" },
            { url: "/puzzlit-profile-edit.jpg", caption: "Profile Edit" },
            { url: "/puzzlit-shop.jpg", caption: "Shop" },
        ],
        client: "Puzzlit Inc",
        timeline: "March 2025 - present",
        role: "Software Engineer (Full-Stack)",
        liveUrl: "https://apps.apple.com/us/app/puzzlit-puzzles-made-social/id6472233094",
        relatedProjects: [
            {
            slug: "backstage",
            title: "Backstage Technologies",
            category: "Web Application",
            image: "/backstage-header.jpg"
            },
            {
            slug: "nightspot",
            title: "Nightspot Networks",
            category: "Mobile App",
            image: "/nightspot-banner2",
            },
        ],
      },
      {
        id: 3,
        slug: "nightspot",
        title: "Nightspot Networks",
        category: "Mobile App",
        shortDescription: "A web and mobile app that helps users discover and explore local nightlife events and venues.",
        description: [
            "Nightspot is a city nightlife app that enables users to discover bars and restaurants in their area, providing highly detailed venue information such as menus, real time photos, and atmosphere. ",
            "The app enhances social experiences by showing which connections are currently at each venue and delivers real-time updates on line lengths, helping users plan their night more efficiently. ",
            "Built to support thousands of users, Nightspot ensures quick access to up-to-date venue and social data on any device.",
        ],
        features: [
            "Detailed venue profiles including menus, photos, atmosphere descriptions, and location info",
            "Real-time line length and wait time updates for bars and restaurants",
            "Social map view showing which connections are currently checked in at each venue",
            "Responsive, high-fidelity UI/UX designed in Figma and implemented across web and mobile",
            "Cross-platform support with native-feeling experiences on both iOS and Android",
        ],
        client: "Nightspot Networks",
        technologies: ["React JS", "React Native", "MongoDB", "Figma", "TypeScript"],
        coverImage:"/nightspot-banner.png",
        thumbnailImage:"/nightspot-banner2.png",
        gallery: [
            { url: "/nightspot-home.png", caption: "Home Page" },
            { url: "/nightspot-bar.png", caption: "Bar Profile Page" },
            { url: "/nightspot-map.png", caption: "Map Page" },
            { url: "/nightspot-story.png", caption: "Story Screen" },
            { url: "/nightspot-notifications.png", caption: "Notifcations Page" },
            { url: "/nightspot-uber.png", caption: "Uber Screen" },
        ],
        timeline: "Oct 2022 - Aug 2024",
        role: "Co-Founder / Software Engineer (Full-Stack)",
        relatedProjects: [
          {
            slug: "backstage",
            title: "Backstage Technologies",
            category: "Web Application",
            image: "/backstage-header.jpg"
            },
            {
              slug: "puzzlit",
              title: "Puzzlit",
              category: "Mobile App",
              image: "/puzzlit-thumbnail.png",
            },
        ],
        },
        {
            id: 4,
            slug: "bny",
            title: "Traffic Tool",
            category: "Chrome Extension",
            shortDescription: "A Chrome extension that empowers users to control and monitor network routing for improved debugging and traffic management.",
            description: [
                "The BNY Mellon Chrome extension is a specialized tool that empowers users to direct their network traffic to any of four available regions—two on-premises and two cloud—overriding standard load-balancing protocols. ",
                "By providing manual control over traffic routing, the extension enables more precise testing, troubleshooting, and operational flexibility across complex environments. Each request’s detailed metadata is captured and displayed within the extension, giving users real-time visibility into routing decisions and system behavior. ",
                "This solution streamlines debugging and analysis for both test and production workflows, supporting efficient cloud migration and service management.",
            ],
            features: [
                "Manual selection of traffic routing to any of four regions (two on-premises, two cloud)",
                "Override of default load-balancing to enable targeted testing and troubleshooting",
                "Real-time capture and display of detailed request metadata within the extension",
                "Intuitive user interface for monitoring and controlling traffic flow",
                "Enhanced visibility into network behavior for both development and production environments",
                "Supports operational flexibility during cloud migration and hybrid infrastructure management",
            ],
            client: "BNY",
            technologies: ["Azure", "React", "TypeScript", "MongoDB", "Splunk"],
            coverImage:"/bny-banner.jpg",
            thumbnailImage:"/bny-banner.jpg",
            gallery: [
                { url: "/bny-traffic.png", caption: "Traffic Tab" },
                { url: "/bny-analytics.png", caption: "Analytics Tab" },
                { url: "/bny-history.png", caption: "History Tab" },
            ],
            timeline: "Nov 2023 - Feb 2024",
            role: "Software Engineer",
            relatedProjects: [
               {
                slug: "backstage",
                title: "Backstage Technologies",
                category: "Web Application",
                image: "/backstage-header.jpg"
                },
                {
                slug: "puzzlit",
                title: "Puzzlit",
                category: "Mobile App",
                image: "/puzzlit-thumbnail.png",
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
  