import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
