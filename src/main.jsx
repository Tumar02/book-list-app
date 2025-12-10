// src/main.jsx (Измените этот файл)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx' // Импорт

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Обертка App в провайдер */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
)