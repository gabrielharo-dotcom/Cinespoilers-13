import { useParams } from 'react-router'

export function MovieDetailPage() {
  const { movieId } = useParams()

  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Detalle de película</h1>
      <p className="mt-2 text-muted-foreground">
        Próximamente: detalle de la película #{movieId} (Etapa 6).
      </p>
    </section>
  )
}
