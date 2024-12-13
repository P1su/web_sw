import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    </QueryClientProvider>
  )
}

export default App
