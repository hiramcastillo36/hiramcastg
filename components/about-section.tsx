import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate backend developer with expertise in building scalable systems and optimizing performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-slide-in-left animate-delay-200">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Backend Developer with experience building scalable systems. I work at Ixmatix Robotics, where I've optimized GraphQL APIs and improved response times by 65%.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience includes both backend and frontend development, with a focus on server-side technologies. I enjoy solving complex technical problems and have experience managing Kubernetes clusters for advanced computing projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've also competed in programming contests like ICPC Mexico Finals and led robotics teams to national recognition.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="opacity-0 animate-scale-in animate-delay-300 hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">API Development</h3>
                    <p className="text-sm text-muted-foreground">GraphQL, REST APIs, and microservices architecture</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="opacity-0 animate-scale-in animate-delay-400 hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Database Design</h3>
                    <p className="text-sm text-muted-foreground">PostgreSQL optimization and database architecture</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
