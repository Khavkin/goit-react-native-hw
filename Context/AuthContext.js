import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState(null);

  const logIn = ({ user }) => {
    // console.log(user);
    setIsLoggedIn(true);
    setAuth(user);
    //  console.log(auth);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setAuth(null);
  };

  const getUser = () => {
    return auth;
  };

  return (
    <AuthContext.Provider value={{ getUser, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
