import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold tracking-tight">
        Cine<span className="text-primary">SpoilerS</span>
      </h1>
      <p className="text-muted-foreground">Tu próxima función empieza aquí.</p>
      <Button>Ver cartelera</Button>
    </main>
  )
}

export default App
