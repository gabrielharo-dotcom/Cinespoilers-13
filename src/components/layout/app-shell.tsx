import { Outlet } from 'react-router'

import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'

/**
 * Estructura común a todas las páginas: navbar arriba, footer abajo
 * y la página activa en el medio (vía <Outlet />).
 */
export function AppShell() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
