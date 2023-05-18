import React, { useState } from "react";

interface AuthContextProps {
  children: React.ReactNode;
}



export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  
  const login = (email: string, password: string) => {
    setUser({
      email,
      password,
    });
  }

  const auth = {
    user,
  };

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  )
}
