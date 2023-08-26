import { useEffect } from 'react';
import Header from '../components/Header';
import TemplateList from '../components/TemplateList';
import { useAuth } from '../hooks/useAuth';
import { setUser, startLoading, stopLoading } from '../reducers/authReducers';
import { isAuthenticated } from '../services/lib/auth';

const Dashboard = () => {
  const {
    state: { loading, token, user },
    dispatch,
  } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      dispatch(startLoading());
      console.log('this ran too');

      try {
        const res = await isAuthenticated();

        // console.log(res);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch(setUser(res.data.user));
        dispatch(stopLoading());
      } catch (error) {
        console.log(error.response);
        dispatch(stopLoading());
      }
    };
    if (token && user === null) {
      getUser();
    }
  }, [dispatch, token, user]);

  if (loading) {
    <p>Loading...please wait</p>;
  }

  return (
    <>
      <Header />
      <div className='container w-[95%] max-w-[1200px] mx-auto p-4'>
        <h1 className='text-2xl font-semibold mb-4'>My resumes</h1>
        <TemplateList />
      </div>
    </>
  );
};
export default Dashboard;
