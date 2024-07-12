import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import AccountPage from './pages/AccountPage';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route
            path="/me"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
