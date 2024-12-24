import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import * as Lazy from './lazy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Lazy.Main />,
      },
      {
        path: '/materials',
        element: <Lazy.Materials />,
      },
      {
        path: '/material/:company/:name',
        element: <Lazy.MaterialDetail />,
      },
      {
        path: '/compare',
        element: <Lazy.Compare />,
      },
      {
        path: '/reservation',
        element: <Lazy.Reservation />,
      },
      {
        path: '/reservation-board',
        element: <Lazy.ReservationBoard />
      },
      {
        path: '/reservation/:id',
        element: <Lazy.ReservationDetail />,
      },
      {
        path: '/login',
        element: <Lazy.Login />,
      },
      {
        path: '/event',
        element: <Lazy.Event />,
      },
      {
        path: '/event-create',
        element: <Lazy.EventCreate />,
      },
      {
        path: '/event/:id',
        element: <Lazy.EventDetail />,
      },
      {
        path: '/portfolio',
        element: <Lazy.Portfolio />,
      },
      {
        path: '/portfolio/:portfolioId',
        element: <Lazy.PortfolioDetail />,
      },
      {
        path: '/portfolio-create',
        element: <Lazy.PortfolioCreate />,
      },
    ],
  },
]);

export default router;