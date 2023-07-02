import { createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/authReducers';
import axios from 'axios';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: '',
  token: JSON.parse(localStorage.getItem('token')) || null,
};

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    const checkAuth = async () => {
      console.log('this ran too');

      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/auth/login/check-auth`
        );

        console.log(res);
      } catch (error) {
        console.log(error.response);
      }
    };
    if (state.token) {
      checkAuth();
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
