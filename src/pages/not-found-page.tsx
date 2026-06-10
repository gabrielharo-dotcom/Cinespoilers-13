import { Link } from 'react-router'

import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="text-2xl font-semibold">Esta función no existe</h1>
      <p className="text-muted-foreground">
        La página que buscas no está en cartelera.
      </p>
      <Button asChild>
        <Link to="/">Volver a la cartelera</Link>
      </Button>
    </section>
  )
}
