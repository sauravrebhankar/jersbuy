"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ImagePreview } from "./image-preview"

interface ProductGridProps {
  products: {
    id: string
    name: string
    image: string
  }[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 gap-2 p-2 sm:gap-4 sm:p-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedImage(product.image)}
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-sm sm:text-lg font-semibold text-white line-clamp-2">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <ImagePreview
          src={selectedImage || "/placeholder.svg"}
          alt="Full size preview"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
}

