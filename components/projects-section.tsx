import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Database, Zap, Cloud, Code } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "GraphQL API Optimization Platform",
      description:
        "High-performance GraphQL API built with Elixir and Absinthe, featuring advanced query optimization and N+1 problem resolution. Achieved 65% improvement in response times through strategic caching and database query optimization.",
      technologies: ["Elixir", "Phoenix", "GraphQL", "Absinthe", "PostgreSQL", "Redis"],
      features: [
        "Advanced query optimization and caching",
        "N+1 problem resolution",
        "Real-time subscriptions",
        "Comprehensive API documentation",
      ],
      icon: <Zap className="w-6 h-6" />,
      github: "https://github.com/hiramcastillo36",
      demo: "#",
    },
    {
      title: "Distributed System Architecture",
      description:
        "Scalable microservices architecture designed for high-availability applications. Implemented using containerization and orchestration technologies with comprehensive monitoring and logging systems.",
      technologies: ["Docker", "Kubernetes", "PostgreSQL", "Redis", "Nginx", "Prometheus"],
      features: [
        "Kubernetes-based orchestration",
        "Load balancing and auto-scaling",
        "Centralized logging and monitoring",
        "High availability design",
      ],
      icon: <Cloud className="w-6 h-6" />,
      github: "https://github.com/hiramcastillo36",
      demo: "#",
    },
    {
      title: "Real-time Data Processing Pipeline",
      description:
        "Robust data processing system built with Python and Django, featuring real-time analytics and automated reporting. Integrates with external APIs and provides comprehensive data visualization.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "REST API"],
      features: [
        "Real-time data processing",
        "Automated report generation",
        "External API integrations",
        "Comprehensive analytics dashboard",
      ],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/hiramcastillo36",
      demo: "#",
    },
    {
      title: "HPC Cluster Management System",
      description:
        "Advanced system for managing high-performance computing resources, including GPU allocation, job scheduling, and resource monitoring. Built for scientific computing applications with 10+ GPUs and 250GB+ RAM.",
      technologies: ["Kubernetes", "Docker", "Python", "Linux", "GPU Computing", "Monitoring"],
      features: [
        "GPU resource allocation",
        "Job scheduling and queuing",
        "Performance monitoring",
        "Scientific computing optimization",
      ],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/hiramcastillo36",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing scalable backend systems and innovative solutions across diverse technology stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{project.icon}</div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
