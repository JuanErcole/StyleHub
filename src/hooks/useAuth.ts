import React from 'react';
import { AuthContext } from '../context/AuthContext';



export const useAuth = () => {
  
  const auth = React.useContext(AuthContext);
  
  return auth;
}
