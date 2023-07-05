import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Flowbite } from 'flowbite-react';
import { customTheme } from './theme.js';
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from './context/AuthContext.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import './index.css';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Flowbite theme={{ theme: customTheme }}>
          <Toaster position='bottom-center' reverseOrder={false} />
          <AppRoutes />
        </Flowbite>
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
