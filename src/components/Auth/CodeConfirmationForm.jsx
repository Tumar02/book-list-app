import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const CodeConfirmationForm = () => {
  const [code, setCode] = useState('');
  const { verifyCode, loading, error, tempUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCode(code);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #007bff', borderRadius: '8px', textAlign: 'center' }}>
      <h2>Подтверждение авторизации</h2>
      <p>Код подтверждения был "отправлен" на email: <strong>{tempUser}</strong>.</p>
      <p style={{ color: 'red' }}>***Проверьте консоль разработчика (F12) для получения кода!***</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          placeholder="Введите 6-значный код" 
          maxLength="6"
          required 
          disabled={loading}
          style={{ width: '100%', padding: '10px', margin: '15px 0', textAlign: 'center', fontSize: '18px', letterSpacing: '3px' }}
        />
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', backgroundColor: loading ? '#ccc' : '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {loading ? 'Проверка...' : 'Подтвердить и войти'}
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>Ошибка: {error}</p>}
    </div>
  );
};

export default CodeConfirmationForm;