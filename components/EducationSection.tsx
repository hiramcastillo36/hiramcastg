import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering in Intelligent Systems",
      institution: "Universidad Autónoma de San Luis Potosí",
      period: "08/2021 – 12/2025",
      location: "San Luis Potosí, Mexico",
      gpa: "91.25/100",
      coursework: ["Data Structures and Algorithms", "Computer Graphics", "Supercomputing"],
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Academic foundation in intelligent systems and computer science
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-primary opacity-0 animate-fade-in-up animate-delay-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">{edu.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">{edu.degree}</CardTitle>
                    <h3 className="text-lg font-semibold text-primary mb-3">{edu.institution}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge
                        key={courseIndex}
                        variant="secondary"
                        className="hover:bg-primary/20 transition-colors duration-200"
                      >
                        {course}
                      </Badge>
                    ))}
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
