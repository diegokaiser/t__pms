import type { Metadata } from "next"
import { plusJakartaSans } from "@/app/fonts"
import "@/app/globals.css"

import { cn } from "./libs/utils"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Asclepius",
  description: "A healthcare management system",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={ cn('min-h-screen bg-dark-300 font-sans antialiased', plusJakartaSans.variable) }>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
