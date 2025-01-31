"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImagePreviewProps {
  src: string
  alt: string
  onClose: () => void
}

export function ImagePreview({ src, alt, onClose }: ImagePreviewProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false)
      setTimeout(onClose, 300) // Wait for fade-out animation
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div className="relative max-w-4xl max-h-full p-4">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={1200}
          height={1200}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  )
}

