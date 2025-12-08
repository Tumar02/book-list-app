import React from 'react';
import books from '../data/books';

const BookDetail = ({ bookId, setSelectedBookId }) => {
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p>Книга не найдена.</p>
        <button onClick={() => setSelectedBookId(null)}>
          Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #007bff', borderRadius: '8px' }}>
      <button onClick={() => setSelectedBookId(null)} style={{ marginBottom: '20px' }}>
        ← Вернуться к списку
      </button>
      <h2>📖 Детали книги: {book.title}</h2>
      <p>
        **Автор:** {book.author}
      </p>
      <p>
        **Год издания:** {book.year}
      </p>
      <p>
        **Жанр:** {book.genre}
      </p>
      <p>
        **Краткое содержание:**
      </p>
      <blockquote style={{ borderLeft: '3px solid #ccc', paddingLeft: '10px', margin: '10px 0' }}>
        {book.summary}
      </blockquote>
    </div>
  );
};

export default BookDetail;