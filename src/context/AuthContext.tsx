import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

interface AuthContextType {
  authTokens: AuthTokens | null;
  login: (email: string, password: string, navigate: Function) => Promise<void>;
  signup: (email: string, password: string, navigate: Function) => Promise<void>;
  logout: (navigate: Function) => void;
  refreshAccessToken: () => Promise<void>;
}

interface ErrorResponse {
  code: number;
  message: string;
  status: string;
}

interface LoginResponse {
  body: {
    access_token: string;
    refresh_token: string;
  };
  statusCode: number;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(() => {
    const tokens = localStorage.getItem('authTokens');
    return tokens ? JSON.parse(tokens) : null;
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (authTokens) {
        console.log('Refreshing access token...');
        refreshAccessToken();
      }
    }, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval);
  }, [authTokens]);

  const login = async (email: string, password: string, navigate: Function) => {
    try {
      console.log('Attempting login with email:', email);
      const response = await axios.post('http://142.93.134.108:1111/login', null, {
        params: { email, password }
      });

      console.log('Login response data:', response.data);

      if ((response.data as ErrorResponse).status === 'error') {
        const { code, message } = response.data as ErrorResponse;
        if (code === 1012) {
          console.error('Login error:', message);
          setError(message);
          throw new Error(message || 'Login failed');
        }
      } else if ('body' in response.data) {
        const { access_token, refresh_token } = (response.data as LoginResponse).body;
        if (access_token && refresh_token) {
          const tokens: AuthTokens = { access_token, refresh_token };
          setAuthTokens(tokens);
          localStorage.setItem('authTokens', JSON.stringify(tokens));
          console.log('Login successful, tokens set:', tokens);
          setError(null);
          navigate('/me');
          return;
        }
      }

      throw new Error('Invalid token response');
    } catch (error: any) {
      console.error('Login failed:', error.message);
      setError(error.message);
      throw error;
    }
  };

  const signup = async (email: string, password: string, navigate: Function) => {
    try {
      console.log('Attempting signup with email:', email);
      const response = await axios.post('http://142.93.134.108:1111/sign_up', { email, password });
      console.log('Signup response data:', response.data);

      if (response.status === 200) {
        alert('Signup successful!');
        await login(email, password, navigate);
      } else {
        console.error('Signup response status:', response.status, 'Response data:', response.data);
        throw new Error('Signup failed');
      }
    } catch (error: any) {
      console.error('Signup failed:', error.message);
      alert('Signup failed. Please try again.');
    }
  };

  const logout = (navigate: Function) => {
    setAuthTokens(null);
    localStorage.removeItem('authTokens');
    navigate('/sign-in');
  };

  const refreshAccessToken = async () => {
    try {
      if (!authTokens) return;

      const response = await axios.post<LoginResponse>('http://142.93.134.108:1111/refresh', null, {
        headers: { Authorization: `Bearer ${authTokens.refresh_token}` },
      });

      const { access_token } = response.data.body;
      if (access_token) {
        const newTokens = { ...authTokens, access_token };
        setAuthTokens(newTokens);
        localStorage.setItem('authTokens', JSON.stringify(newTokens));
        console.log('Access token refreshed');
      } else {
        throw new Error('Failed to refresh access token');
      }
    } catch (error: any) {
      console.error('Failed to refresh access token:', error.message);
      logout(() => {});
    }
  };

  return (
    <AuthContext.Provider value={{ authTokens, login, signup, logout, refreshAccessToken }}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
