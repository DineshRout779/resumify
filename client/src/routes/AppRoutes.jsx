import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Build from '../pages/Build';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Success from '../pages/Success';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },

  {
    path: '/success',
    element: <Success />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'build',
        element: <Build />,
      },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
