import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Elixir", "Python", "JavaScript/TypeScript", "C/C++", "Java", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Phoenix (Elixir)", "Django", "Next.js", "React", "GraphQL", "Apollo Client"],
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "Redis", "MongoDB", "Database Design"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Git", "Linux", "Firebase"],
    },
  ]

  const achievements = [
    "ICPC Mexico Finals - 48th place (2023)",
    "Robotics Competition - 3rd place nationally (2019)",
    "MakeX Robotics Competition - 2nd place nationally (2019)",
    "65% API performance improvement at Ixmatix Robotics",
    "Managed 10+ GPU Kubernetes cluster for scientific computing",
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive expertise across backend technologies and system architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`opacity-0 animate-scale-in hover:shadow-lg transition-shadow duration-300 ${
                index === 0
                  ? "animate-delay-200"
                  : index === 1
                    ? "animate-delay-300"
                    : index === 2
                      ? "animate-delay-400"
                      : "animate-delay-500"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="opacity-0 animate-slide-in-left animate-delay-300 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Key Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
