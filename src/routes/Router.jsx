import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';
import Materials from '../pages/Materials/Materials';
import Estimate from '../pages/Estimate/Estimate';
import Login from '../pages/Login/Login';

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
        path: '/estimate',
        element: <Estimate />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;