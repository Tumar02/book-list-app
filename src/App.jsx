import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

function App() {
  const [selectedBookId, setSelectedBookId] = useState(null);

  return (
    <div className="App">
      <header style={{ textAlign: 'center', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
        <h1>React Книжная Коллекция</h1>
      </header>
      
      {}
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