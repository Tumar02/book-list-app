import React from 'react';
import books from '../data/books';

const BookList = ({ setSelectedBookId }) => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📚 Список книг</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map(book => (
          <li
            key={book.id}
            onClick={() => setSelectedBookId(book.id)} 
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              marginBottom: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
          >
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;