import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { loginSuccess } from '../reducers/authReducers';
import { Spinner } from 'flowbite-react';

const Success = () => {
  const { dispatch } = useAuth();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    dispatch(loginSuccess(token));

    window.location.href = '/dashboard';
  }, [searchParams, dispatch]);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Spinner aria-label='Center-aligned spinner example' size={'xl'} />
    </div>
  );
};

export default Success;
