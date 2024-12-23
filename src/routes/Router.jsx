import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';
import Materials from '../pages/Materials/Materials';
import Login from '../pages/Login/Login';
import MaterialDetail from '../pages/Materials/MaterialDetail/MaterialDetail';
import Compare from '../pages/Materials/Compare/Compare';
import Reservation from '../pages/Reservation/Reservation';
import ReservationDetail from '../pages/Reservation/ReservationDetail/ReservationDetail';
import Event from '../pages/Event/Event';
import EventDetail from '../pages/Event/EventDetail/EventDetail';
import Portfolio from '../pages/Portfolio/Portfolio';
import PortfolioDetail from '../pages/Portfolio/Detail/PortfolioDetail';
import ReservationBoard from '../pages/Reservation/ReservationBoard/ReservationBoard';
import EventCreate from '../pages/Event/EventCreate/EventCreate';
import PortfolioCreate from '../pages/Portfolio/PortfolioCreate/PortfolioCreate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/materials',
        element: <Materials />,
      },
      {
        path: '/material/:company/:name',
        element: <MaterialDetail />,
      },
      {
        path: '/compare',
        element: <Compare />,
      },
      {
        path: '/reservation',
        element: <Reservation />,
      },
      {
        path: '/reservation-board',
        element: <ReservationBoard />
      },
      {
        path: '/reservation/:id',
        element: <ReservationDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/event',
        element: <Event />,
      },
      {
        path: '/event-create',
        element: <EventCreate />,
      },
      {
        path: '/event/:id',
        element: <EventDetail />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/portfolio/:portfolioId',
        element: <PortfolioDetail />,
      },
      {
        path: '/portfolio-create',
        element: <PortfolioCreate />,
      },
    ],
  },
]);

export default router;