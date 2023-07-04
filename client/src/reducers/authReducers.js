export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'LOGIN_SUCCESS':
      console.log('token in react: ', action.payload);
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: '',
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        error: '',
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'STOP_LOAD':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const loginStart = () => {
  return {
    type: 'LOGIN_START',
  };
};

export const loginSuccess = (payload) => {
  console.log('hey', payload);
  return {
    type: 'LOGIN_SUCCESS',
    payload,
  };
};

export const loginFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
    error,
  };
};

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const startLoading = () => {
  return {
    type: 'LOADING',
  };
};

export const stopLoading = () => {
  return {
    type: 'STOP_LOAD',
  };
};
