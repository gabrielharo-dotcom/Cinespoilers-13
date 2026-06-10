import { createBrowserRouter } from 'react-router'

import { AppShell } from '@/components/layout/app-shell'
import { HomePage } from '@/pages/home-page'
import { MovieDetailPage } from '@/pages/movie-detail-page'
import { NotFoundPage } from '@/pages/not-found-page'

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/movies/:movieId', element: <MovieDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
