"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Award } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Contributor to the Platform for Research with GPUs (PIG), Published at CARLA 2024",
      organization: "Latin America High Performance Computing",
      date: "Sept. 2024",
      associated: "RedCUDI - Corporación Universitaria para el Desarrollo de Internet A. C.",
      description:
        "Platform for Research with GPUs (PIG) is an inter-institutional collaboration project led by the Supercomputing Community at CUDI. Recently published at CARLA 2024 in Chile, the platform provides a shared infrastructure of over 10 GPUs, 80 CPUs, and 5TB of storage, enabling students and researchers from institutions like UNAM, UDG, UASLP, and UAEMEX to experiment with various GPU environments. By simplifying access through Kubernetes and VPN technology, PIG promotes both resource optimization and inter-institutional cooperation. My role involves managing this Kubernetes-based platform, ensuring efficient resource sharing, and supporting GPU-based scientific research.",
      certificate: "/CertificateCARLA2024-Poster.pdf"
    },
  ]

  const [open, setOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Achievements & Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognitions, publications, and contributions to the scientific and tech community
          </p>
        </div>
        <div className="space-y-8">
          {achievements.map((ach, index) => (
            <Card key={index} className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => {
                if (ach.certificate) {
                  setSelectedCert(ach.certificate)
                  setOpen(true)
                }
              }}>
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <CardTitle className="text-xl text-foreground">{ach.title}</CardTitle>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm text-muted-foreground font-semibold">{ach.organization}</span>
                    <span className="text-xs text-muted-foreground">{ach.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 text-sm text-primary font-semibold">Associated with: {ach.associated}</div>
                <p className="text-muted-foreground leading-relaxed mb-2">{ach.description}</p>
                {ach.certificate && (
                  <div className="text-xs text-blue-600 underline cursor-pointer mt-2">Click to view certificate</div>
                )}
              </CardContent>
            </Card>
          ))}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className=" max-w-4xl">
              <DialogHeader>
                <DialogTitle>Certificate</DialogTitle>
              </DialogHeader>
              {selectedCert && (
                <Image src={selectedCert} alt="Certificate" width={1000} height={1500} className="rounded shadow" />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
