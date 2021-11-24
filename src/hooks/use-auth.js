import { useState, useContext, createContext } from "react";
import { Navigate } from "react-router";
import { fakeAuth } from "../functions/fakeAuth";

const authContext = createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = (newUser, callback) => {
    return fakeAuth.signin(() => {
      setUser(newUser);
      callback();
    })
  }

  let signout = () => {
    return fakeAuth.signout(() => {
      setUser(null)
    })
  }

  let value = { user, signin, signout }

  return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export function useAuth() {
  return useContext(authContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/" />
  }

  return children;
}
