import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Main />,
      }
    ],
  },
]);

export default router;