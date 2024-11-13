import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';
import Product from '../pages/Product/Product';

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
        path: '/products',
        element: <Product />,
      }
    ],
  },
]);

export default router;