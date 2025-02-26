import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function Sidebar() {
  return (
    <div><header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-xl">
        <span className="text-primary">Bordex</span>
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Introduction Hub
        </Link>
        <Link href="/funciones" className="text-sm font-medium transition-colors hover:text-primary text-primary">
          Funciones
        </Link>
        <Link href="/precios" className="text-sm font-medium transition-colors hover:text-primary">
          Precios
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="bg-[#001a4d] hover:bg-[#00133a] text-white rounded-full">Contactanos <ArrowRight className="w-"/ > </Button>
      </div>
    </div>
  </header></div>
  )
}

export default Sidebar