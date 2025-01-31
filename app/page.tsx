import { Logo } from "@/components/logo"
import { WhatsAppBanner } from "@/components/whatsapp-banner"
import { CategoryDropdown } from "@/components/category-dropdown"
import { ProductGrid } from "@/components/product-grid"

// Sample product data
const fanVersionProducts = [
  {
    id: "fan-1",
    name: "Barcelona Home Jersey 23/24",
    image: "https://i.imgur.com/KOLk9DV.jpeg",
  },
  {
    id: "fan-2",
    name: "Real Madrid Home Jersey 23/24",
    image: "https://i.imgur.com/mJUJuff.jpeg",
  },
  {
    id: "fan-3",
    name: "Manchester United Home Jersey 23/24",
    image: "https://i.imgur.com/bwsxz5Q.jpeg",
  },
  {
    id: "fan-4",
    name: "Liverpool Home Jersey 23/24",
    image: "https://i.imgur.com/URdbVsd.jpeg",
  },
  {
    id: "fan-5",
    name: "PSG Home Jersey 23/24",
    image: "https://i.imgur.com/LVIQPQZ.jpeg",
  },
  {
    id: "fan-6",
    name: "Bayern Munich Home Jersey 23/24",
    image: "https://i.imgur.com/LmpPg4Y.jpeg",
  },
  {
    id: "fan-7",
    name: "Juventus Home Jersey 23/24",
    image: "https://i.imgur.com/or8TkMp.jpeg",
  },
  {
    id: "fan-8",
    name: "Arsenal Home Jersey 23/24",
    image: "https://i.imgur.com/hKzdBL7.jpeg",
  },
  {
    id: "fan-9",
    name: "Chelsea Home Jersey 23/24",
    image: "https://i.imgur.com/30RhKfq.jpeg",
  },
]

const playerVersionProducts = Array.from({ length: 9 }, (_, i) => ({
  id: `player-${i}`,
  name: `Player Jersey ${i + 1}`,
  image: `/placeholder.svg?height=300&width=300`,
}))

const retroProducts = Array.from({ length: 9 }, (_, i) => ({
  id: `retro-${i}`,
  name: `Retro Jersey ${i + 1}`,
  image: `/placeholder.svg?height=300&width=300`,
}))

const keychainProducts = Array.from({ length: 9 }, (_, i) => ({
  id: `keychain-${i}`,
  name: `Keychain ${i + 1}`,
  image: `/placeholder.svg?height=300&width=300`,
}))

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(https://i.imgur.com/gqBz9Bb.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <main className="relative z-10 min-h-screen">
        <Logo />
        <WhatsAppBanner />
        <div className="container mx-auto py-8 space-y-8">
          <div className="max-w-4xl mx-auto">
            <CategoryDropdown title="Fan Version">
              <ProductGrid products={fanVersionProducts} />
            </CategoryDropdown>

            <CategoryDropdown title="Player Version">
              <ProductGrid products={playerVersionProducts} />
            </CategoryDropdown>

            <CategoryDropdown title="Retro">
              <ProductGrid products={retroProducts} />
            </CategoryDropdown>

            <CategoryDropdown title="Keychains">
              <ProductGrid products={keychainProducts} />
            </CategoryDropdown>
          </div>
        </div>
      </main>
    </div>
  )
}

