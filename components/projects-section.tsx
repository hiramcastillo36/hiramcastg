import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Database, Zap, Cloud, Code, Globe } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AbsintheInitializer",
      description: "Mix task that automates the setup of a GraphQL API using Absinthe in Phoenix/Elixir projects. Simplifies Absinthe integration, routing, and optional authentication.",
      features: [
        "Automates Absinthe and dependency setup",
        "Configures routes for GraphQL and GraphiQL",
        "Optionally adds user authentication",
        "Generates schema, mutations, queries, and types for GraphQL"
      ],
      technologies: ["Elixir", "Phoenix", "Absinthe", "GraphQL"],
      github: "https://github.com/hiramcastillo36/absinthe_initializer",
      icon: <Database className="w-6 h-6 text-primary" />
    },
    {
      title: "RCJ-Simulator",
      description: "Robot trajectory simulator for RoboCup Soccer using Bézier curves to avoid obstacles and reach targets. Uses OpenGL and GLM for visualization.",
      features: [
        "Simulates robot movement with Bézier curves",
        "Trajectory planning avoiding obstacles",
        "Visualization with OpenGL and GLM"
      ],
      technologies: ["C++", "OpenGL", "GLM"],
      github: "https://github.com/hiramcastillo36/RCJ-Simulator",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      title: "Bear and Bees C",
      description: "Multiple Producers and One Consumer synchronization problem using Semaphores. N bees produce honey and a bear consumes it when the jar is full. Demonstrates concurrent programming in C.",
      features: [
        "Implements producer-consumer synchronization with semaphores",
        "Randomized number of bees and jar capacity",
        "Infinite honey production and consumption loop"
      ],
      technologies: ["C", "Semaphores", "Concurrency"],
      github: "https://github.com/hiramcastillo36/bear-and-bees-c",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "PIG: Platform for Research with GPUs",
      description: "PIG is an inter-institutional initiative by the Supercomputing Community within CUDI, aggregating GPU infrastructure from various Mexican institutions into a single, container-based platform for secure and easy resource sharing. Its main objective is to provide students and researchers access to advanced computing tools, promote collaboration, and optimize resource utilization. In its pilot phase, PIG deployed a Kubernetes cluster with infrastructure from UNAM, UDG, and UAEMEX, offering 10+ GPUs, 80+ CPUs, 250GB+ RAM, and 5TB storage. The next steps involve expanding capacity and incorporating more institutions and users.",
      features: [
        "Aggregates GPU resources from multiple institutions",
        "Secure, container-based platform for resource sharing",
        "Kubernetes cluster with multi-institution nodes",
        "Supports development, debugging, and testing of parallel GPU applications"
      ],
      technologies: ["Kubernetes", "Linux System Administration", "Docker"],
      github: "https://github.com/cudi-community/pig-platform",
      icon: <Cloud className="w-6 h-6 text-primary" />
    },
    {
      title: "Ecotide: 3D Ocean and Phytoplankton Visualization",
      description: "Ecotide is a web platform developed with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel. It features a Model Viewer library for real-time 3D model rendering, allowing users to explore detailed information about the ocean and phytoplankton with immersive visuals and ocean sounds. Project for NASA Space Apps Ocean Garden Challenge.",
      features: [
        "Web platform for 3D ocean and phytoplankton visualization",
        "Real-time 3D model rendering with Model Viewer",
        "Immersive ocean sounds and interactive exploration",
        "Developed for NASA Space Apps Ocean Garden Challenge"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/alancasre133/Nasaoceangarden",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50/40 dark:bg-slate-900/20">
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
