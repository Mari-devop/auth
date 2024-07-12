import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ProtectedRouteProps } from './types';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authTokens } = useAuth();

  if (!authTokens) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
