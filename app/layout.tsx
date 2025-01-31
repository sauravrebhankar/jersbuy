import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jersbuy - Football Jersey Store",
  description: "Your one-stop shop for football jerseys",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark">{children}</body>
    </html>
  )
}

