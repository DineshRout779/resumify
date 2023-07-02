import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { loginSuccess } from '../reducers/authReducers';

const Success = () => {
  const { dispatch } = useAuth();
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    dispatch(loginSuccess(token));
    navigate('/dashboard');
  }, [searchParams, navigate, dispatch]);

  return <div>Success</div>;
};

export default Success;
