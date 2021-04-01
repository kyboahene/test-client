import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
  user: null
};

if (window.localStorage.getItem("token")) {
  const decodedToken = jwtDecode(window.localStorage.getItem("token"));

  if (Date.now() <= decodedToken.exp * 1000) {
    window.localStorage.removeItem('token');
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {}
});

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    window.localStorage.setItem("token", userData.token)
    console.log(window.localStorage.setItem("token", userData.token));
    dispatch({
      type: 'LOGIN',
      payload: userData
    });
  }

  function logout() {
    window.localStorage.removeItem("token");
    dispatch({ type: 'LOGOUT' });
    
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
