import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hiram Castillo - Backend Developer & Software Engineer",
  description:
    "Professional portfolio of Hiram Jalil Castillo Gutierrez - Backend Developer specializing in scalable APIs, GraphQL, and distributed systems",
  generator: "v0.app",
  keywords: ["Backend Developer", "Software Engineer", "GraphQL", "Elixir", "Python", "API Development"],
  authors: [{ name: "Hiram Jalil Castillo Gutierrez" }],
  openGraph: {
    title: "Hiram Castillo - Backend Developer & Software Engineer",
    description: "Professional portfolio showcasing backend development expertise and software engineering projects",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
