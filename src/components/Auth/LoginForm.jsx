import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const { login, loading, error, setAuthStage } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email (напр. test@example.com)" 
          required 
          disabled={loading}
          style={{ width: '100%', padding: '10px', margin: '5px 0' }}
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Пароль (напр. password)" 
          required 
          disabled={loading}
          style={{ width: '100%', padding: '10px', margin: '5px 0' }}
        />
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: loading ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {loading ? 'Вход...' : 'Войти и получить код'}
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>Ошибка: {error}</p>}
      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        Нет аккаунта? <span onClick={() => setAuthStage('register')} style={{ color: '#007bff', cursor: 'pointer' }}>Зарегистрироваться</span>
      </p>
    </div>
  );
};

export default LoginForm;