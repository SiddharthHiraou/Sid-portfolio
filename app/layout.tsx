import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Siddharth Hiraou - Data Science & ML Engineer",
  description:
    "Portfolio of Siddharth Hiraou - Data Science Graduate Student & Machine Learning Engineer specializing in intelligent systems and data-driven solutions.",
  keywords: ["Data Science", "Machine Learning", "Python", "AI", "Data Engineering", "Portfolio"],
  authors: [{ name: "Siddharth Hiraou" }],
  openGraph: {
    title: "Siddharth Hiraou - Data Science & ML Engineer",
    description:
      "Portfolio showcasing data science projects, machine learning expertise, and software engineering experience.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
