export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} CineSpoilerS · Proyecto de aprendizaje · Datos de
        películas por TMDB
      </div>
    </footer>
  )
}
