import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const {
    state: { token, loading },
  } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }
  return token ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
