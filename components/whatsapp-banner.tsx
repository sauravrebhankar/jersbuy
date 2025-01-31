"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"]

export function WhatsAppBanner() {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-black/50 backdrop-blur-md py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center justify-center gap-4">
        <a
          href="https://wa.link/xouwsd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
          style={{ color: colors[colorIndex] }}
        >
          <Phone className="h-5 w-5" />
          For orders WhatsApp on +919527921826
        </a>
      </div>
    </div>
  )
}

