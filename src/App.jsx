import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import LoginForm from './components/Auth/LoginForm';
import RegistrationForm from './components/Auth/RegistrationForm';
import CodeConfirmationForm from './components/Auth/CodeConfirmationForm';
import { useAuth } from './context/AuthContext';

function App() {
  const { user, authStage, logout } = useAuth();

  const [selectedBookId, setSelectedBookId] = useState(null);

  if (!user) {
    let AuthComponent;
    
    if (authStage === 'register') {
      AuthComponent = <RegistrationForm />;
    } else if (authStage === 'code') {
      AuthComponent = <CodeConfirmationForm />;
    } else {
      AuthComponent = <LoginForm />; 
    }

    return (
      <div className="App">
        <header style={{ textAlign: 'center', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h1>React Книжная Коллекция</h1>
        </header>
        {AuthComponent}
      </div>
    );
  }


  return (
    <div className="App">
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 20px', 
        borderBottom: '1px solid #ccc' 
      }}>
        <h1>React Книжная Коллекция</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '15px' }}>Вы вошли как: <strong>{user.email}</strong></p>
            <button onClick={logout}>Выход</button>
        </div>
      </header>
      
      {selectedBookId ? (
        <BookDetail 
          bookId={selectedBookId} 
          setSelectedBookId={setSelectedBookId} 
        />
      ) : (
        <BookList 
          setSelectedBookId={setSelectedBookId} 
        />
      )}
    </div>
  );
}

export default App;