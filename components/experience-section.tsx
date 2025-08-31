import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
        title: "Backend Developer",
        company: "Pefai",
        location: "Remote",
        period: "Aug 2025 – Present",
        achievements: [
        ],
        technologies: ["Go", "Java", "Spring Boot", "MongoDB", "Microservices", "Azure SQL"],
    },
    {
      title: "Backend Developer",
      company: "IXMATIX",
      location: "Remote",
      period: "Aug 2023 – Aug 2025",
      achievements: [
        "Implemented a GraphQL API using Absinthe, optimizing the API and resolving the N+1 error, resulting in a 50% improvement in response time.",
        "Developed and designed PostgreSQL databases, ensuring project requirements were met and applying normalization forms to optimize development.",
        "Consumed external APIs for the development of internal tools and automation of processes, utilizing OTP to enhance efficiency and reliability."
      ],
      technologies: ["Elixir", "GraphQL", "PostgreSQL", "OTP", "API Integration"],
    },
    {
      title: "HPC Systems Administrator",
      company: "Corporación Universitaria para el Desarrollo de Internet A. C.",
      location: "Remote",
      period: "Jan 2024 – Aug 2025",
      achievements: [
        "Managed a Kubernetes-based cluster with 10+ GPUs, 80+ CPUs, 250GB+ RAM, ensuring optimal performance and providing technical support for researchers leveraging the platform for advanced scientific projects."
      ],
      technologies: ["Kubernetes", "Linux System Administration", "Docker", "GPU Computing"],
    },
    {
      title: "Backend Developer",
      company: "CatapultaAcademy",
      location: "Remote",
      period: "Mar 2021 – Aug 2023",
      achievements: [
        "Developed web applications using GraphQL and Phoenix Framework.",
        "Contributed to multiple internal and client-facing projects."
      ],
      technologies: ["GraphQL", "Phoenix Framework", "Web Development"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-blue-50/30 dark:bg-blue-950/20">
      <div className="container-fluid">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building scalable systems and optimizing performance across diverse technology stacks
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-8 justify-center">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`flex-1 md:max-w-md border-l-4 border-l-primary opacity-0 animate-fade-in-up hover:shadow-lg transition-shadow duration-300 ${
                index === 0 ? "animate-delay-200" : "animate-delay-400"
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      • {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="hover:scale-105 transition-transform duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
