import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import PublicRoutes from './public.routes';
import ProtectedRoutes from './protected.routes';
import NavBar from '../components/Material-Ui/NavBar';

export default function Routes() {
  return (
    <AuthProvider>
      <NavBar />
      <PublicRoutes />
      <ProtectedRoutes />
    </AuthProvider>
  );
}
