import { useState, useContext, createContext } from "react";
import { Navigate, useLocation } from "react-router";
import { fakeAuth } from "../functions/fakeAuth";

// create context for auth
const authContext = createContext();

// AuthProvider to wrap children adapted and edited based on react-router docs
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
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} />
  }

  return children;
}

