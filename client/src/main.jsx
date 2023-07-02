import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Flowbite } from 'flowbite-react';
import { customTheme } from './theme.js';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard.jsx';
import Success from './pages/Success.jsx';
import Error from './pages/Error.jsx';
import AuthContextProvider from './context/AuthContext.jsx';

// Create a client
const queryClient = new QueryClient();

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
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/success',
    element: <Success />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Flowbite theme={{ theme: customTheme }}>
          <Toaster position='bottom-center' reverseOrder={false} />
          <RouterProvider router={router} />
        </Flowbite>
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
