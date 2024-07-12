import React from 'react';
import { Container } from './pages.styled';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AccountPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <Container>
      <h2>Account Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
};

export default AccountPage;
