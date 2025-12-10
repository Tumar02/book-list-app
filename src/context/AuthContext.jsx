
import React, { createContext, useContext, useState } from 'react';
import { mockRegister, mockLogin, mockVerifyCode } from '../utils/mockApi';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authStage, setAuthStage] = useState('login');
  const [tempUser, setTempUser] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await mockRegister({ email, password });
      setAuthStage('login'); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await mockLogin({ email, password });
      setTempUser(response.email); 
      setAuthStage('code'); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const verifyCode = async (code) => {
    setLoading(true);
    setError(null);
    try {
        const response = await mockVerifyCode({ code });
        setUser({ email: tempUser, token: response.token });
        setTempUser(null);
        setAuthStage(null); 
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  }

  const logout = () => {
    setUser(null);
    setAuthStage('login');
  };
  
  const value = {
    user,
    authStage,
    loading,
    error,
    login,
    register,
    verifyCode,
    logout,
    setAuthStage,
    tempUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};