export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'LOGIN_SUCCESS':
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
    case 'LOGIN_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
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
