import { createContext, useEffect, useReducer } from 'react';
import { authReducer, setUser } from '../reducers/authReducers';
import { isAuthenticated } from '../services/lib/auth';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: '',
  token: localStorage.getItem('token') || null,
};

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    const getUser = async () => {
      console.log('this ran too');

      try {
        const res = await isAuthenticated();

        // console.log(res);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch(setUser(res.data.user));
      } catch (error) {
        console.log(error.response);
      }
    };
    if (state.token && state.user === null) {
      getUser();
    }
  }, [state]);

  useEffect(() => {
    console.log('this ran');
    if (state.token) {
      console.log('inside');
      localStorage.setItem('token', state.token);
    }
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
