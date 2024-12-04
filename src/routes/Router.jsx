import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';
import Materials from '../pages/Materials/Materials';
import Estimate from '../pages/Estimate/Estimate';
import Login from '../pages/Login/Login';
import MaterialDetail from '../pages/Materials/MaterialDetail/MaterialDetail';
import Compare from '../pages/Materials/Compare/Compare';
import WriteEstimate from '../pages/Estimate/WriteEstimate/WriteEstimate';
import Reservation from '../pages/Reservation/Reservation';
import ReservationDetail from '../pages/Reservation/ReservationDetail/ReservationDetail';
import Event from '../pages/Event/Event';
import Portfolio from '../pages/Portfolio/Portfolio';
import PortfolioDetail from '../pages/Portfolio/Detail/PortfolioDetail';
import ReservationBoard from '../pages/Reservation/ReservationBoard/ReservationBoard';

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
        path: '/material/:name',
        element: <MaterialDetail />,
      },
      {
        path: '/compare',
        element: <Compare />,
      },
      {
        path: '/estimate',
        element: <Estimate />,
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
        path: '/write-estimate',
        element: <WriteEstimate />,
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
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/portfolio/:portfolioId',
        element: <PortfolioDetail />,
      },
    ],
  },
]);

export default router;