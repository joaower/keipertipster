import React, { useState } from 'react';
import { navigate } from '@reach/router';

const AuthContext = React.createContext();

const AuthProvider = props => {
  const cookie = window.localStorage
  const [jwt, setJwt] = useState(cookie.getItem('jwt'));
  const user = cookie.getItem('username');
  const [auth, setAuth] = useState(jwt !== '' ? jwt : '');
  const [username, setUsername] = useState(user !== '' ? user : '');
  const [role, setRole] = useState(false);
  const [firstName, setFirstName] = useState(cookie.getItem('firstName'));
  const login = (uName, token, roleId, fName) => {
    cookie.setItem('firstName', fName);
    setFirstName(fName);
    cookie.setItem('username', uName);
    setUsername(username);
    cookie.setItem('jwt', token);
    setJwt(token);
    if (roleId === 'privileged') {
      setRole(true);
      navigate('/spider/dashboard');
    } else {
      navigate('/');
    }
    setTimeout(() => setAuth(true), 1000);
  };
  const logout = () => {
    setTimeout(() => setAuth(false), 1000);
    cookie.clear();
  };
  const handleRole = (r) => {
    setRole(r);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        username,
        role,
        handleRole,
        firstName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
