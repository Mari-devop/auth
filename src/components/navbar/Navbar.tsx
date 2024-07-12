import React from 'react';
import { Container } from './Navbar.styled';
import logo from '../../logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="react-logo" />
            </Link>
          </li>
          {location.pathname !== '/me' && (
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
