import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 opacity-0 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground animate-pulse-glow">
            HC
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Hiram Jalil Castillo Gutierrez
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Backend Developer & Software Engineer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Specialized in building scalable APIs, optimizing GraphQL performance, and architecting distributed systems.
            Passionate about solving complex backend challenges and delivering robust software solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up animate-delay-200">
          <Button asChild className="hover:scale-105 transition-transform duration-200">
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="hover:scale-105 transition-transform duration-200 bg-transparent"
          >
            <a href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="hover:scale-105 transition-transform duration-200 bg-transparent"
          >
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 opacity-0 animate-slide-in-left animate-delay-400">
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-200">
            <a href="https://github.com/hiramcastillo36" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-200">
            <a href="https://linkedin.com/in/hiram-castg" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-200">
            <a href="mailto:hiramcastg@gmail.com">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
