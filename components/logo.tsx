import { FlagIcon as Jersey } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <Jersey className="h-8 w-8 text-primary" />
      <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        JERSBUY
      </h1>
    </div>
  )
}

