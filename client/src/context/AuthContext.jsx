import { createContext, useEffect, useReducer } from 'react';
import {
  authReducer,
  setUser,
  startLoading,
  stopLoading,
} from '../reducers/authReducers';
import { isAuthenticated } from '../services/lib/auth';
import { Spinner } from 'flowbite-react';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: '',
  token: localStorage.getItem('token') || null,
};

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

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
    if (state.token && state.user === null && token !== null && !user) {
      getUser();
    }
  }, [state, token, user]);

  if (state.loading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <Spinner aria-label='Center-aligned spinner example' size={'xl'} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
