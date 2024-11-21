import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';
import Materials from '../pages/Materials/Materials';
import Estimate from '../pages/Estimate/Estimate';
import Login from '../pages/Login/Login';
import MaterialDetail from '../pages/Materials/MaterialDetail/MaterialDetail';

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