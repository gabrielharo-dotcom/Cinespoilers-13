import { Clapperboard } from 'lucide-react'
import { Link } from 'react-router'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center px-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Clapperboard className="size-5 text-primary" aria-hidden="true" />
          <span>
            Cine<span className="text-primary">SpoilerS</span>
          </span>
        </Link>
      </nav>
    </header>
  )
}
