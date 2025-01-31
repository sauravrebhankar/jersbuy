"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryDropdownProps {
  title: string
  children: React.ReactNode
}

export function CategoryDropdown({ title, children }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="w-full flex flex-col items-center">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full max-w-md justify-center text-2xl font-bold py-6 text-white hover:bg-white/10"
      >
        {title}
        <ChevronDown className={`h-5 w-5 transition-transform ml-2 ${isOpen ? "rotate-180" : ""}`} />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

