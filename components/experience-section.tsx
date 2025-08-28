import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Ixmatix Robotics",
      location: "Remote",
      period: "March 2021 - Present",
      achievements: [
        "Implemented GraphQL API using Absinthe, optimizing performance and resolving N+1 errors, resulting in 65% improvement in response time",
        "Developed and designed PostgreSQL databases with proper normalization forms to optimize development workflows",
        "Consumed external APIs for internal tools development and process automation using OTP for enhanced efficiency",
        "Implemented Apollo Client for GraphQL API consumption, effectively integrating user interfaces",
        "Developed web applications using Django, TypeScript, and Next.js with focus on intuitive user experiences",
      ],
      technologies: ["Elixir", "GraphQL", "PostgreSQL", "Django", "TypeScript", "Next.js", "Apollo Client"],
    },
    {
      title: "HPC Systems Administrator",
      company: "Corporación Universitaria para el Desarrollo de Internet",
      location: "Remote",
      period: "January 2024 - December 2024",
      achievements: [
        "Managed PIG (Platform for GPU Research) as part of CUDI's Supercomputing Community collaborative project",
        "Administered Kubernetes-based cluster with 10+ GPUs, 80+ CPUs, and 250GB+ RAM",
        "Ensured optimal system performance and delivered technical support to researchers for advanced scientific projects",
        "Implemented monitoring and maintenance protocols for high-availability computing infrastructure",
      ],
      technologies: ["Kubernetes", "Docker", "Linux", "GPU Computing", "System Monitoring"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building scalable systems and optimizing performance across diverse technology stacks
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`border-l-4 border-l-primary opacity-0 animate-fade-in-up hover:shadow-lg transition-shadow duration-300 ${
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
